// ===== FUNÇÕES ESPECÍFICAS DO ADMIN =====

// Carregar lista de usuários
function carregarUsuarios() {
    const tbody = document.getElementById('tbodyUsuarios');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    Object.keys(users).forEach(email => {
        const user = users[email];
        const row = document.createElement('tr');
        
        const tipoLabel = {
            'aluno': 'Aluno',
            'professor': 'Professor',
            'responsavel': 'Responsável',
            'direcao': 'Direção',
            'admin': 'Admin'
        };
        
        const identificador = user.type === 'responsavel' 
            ? (user.cpfResponsavel || user.cpf || 'N/A')
            : (user.matricula || 'N/A');
        
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${email}</td>
            <td>${tipoLabel[user.type] || user.type}</td>
            <td>${identificador}</td>
            <td><span class="status-badge ${user.active !== false ? 'active' : 'inactive'}">${user.active !== false ? 'Ativo' : 'Inativo'}</span></td>
            <td>
                <button class="btn btn-edit" onclick="editarUsuario('${email}')" style="padding: 5px 10px; font-size: 12px;"><i class="fas fa-edit"></i> Editar</button>
                <button class="btn" onclick="toggleStatusUsuario('${email}')" style="padding: 5px 10px; font-size: 12px;">
                    ${user.active !== false ? '<i class="fas fa-ban"></i> Desativar' : '<i class="fas fa-check"></i> Reativar'}
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Processar importação de alunos
function processarImportacao() {
    const arquivoInput = document.getElementById('arquivoImportacao');
    const resultadoDiv = document.getElementById('resultadoImportacao');
    
    if (!arquivoInput.files.length) {
        showAlert('Por favor, selecione um arquivo!', 'error');
        return;
    }
    
    const arquivo = arquivoInput.files[0];
    const extensao = arquivo.name.split('.').pop().toLowerCase();
    
    if (extensao !== 'csv' && extensao !== 'xlsx' && extensao !== 'xls') {
        showAlert('Formato de arquivo não suportado! Use CSV ou XLSX.', 'error');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const texto = e.target.result;
            const linhas = texto.split('\n').filter(linha => linha.trim());
            
            if (linhas.length < 2) {
                showAlert('Arquivo vazio ou formato inválido!', 'error');
                return;
            }
            
            // Pular cabeçalho
            const dados = linhas.slice(1).map(linha => {
                const colunas = linha.split(',').map(col => col.trim().replace(/"/g, ''));
                return {
                    nome: colunas[0] || '',
                    matricula: colunas[1] || '',
                    cpf: colunas[2] || '',
                    nascimento: colunas[3] || '',
                    serie: colunas[4] || '',
                    turma: colunas[5] || '',
                    email: colunas[6] || ''
                };
            }).filter(d => d.nome && d.matricula);
            
            if (dados.length === 0) {
                showAlert('Nenhum dado válido encontrado no arquivo!', 'error');
                return;
            }
            
            // Processar importação
            let sucessos = 0;
            let erros = [];
            
            dados.forEach((aluno, index) => {
                try {
                    // Validar dados
                    if (!aluno.nome || !aluno.matricula || !aluno.email) {
                        erros.push(`Linha ${index + 2}: Dados incompletos`);
                        return;
                    }
                    
                    // Validar unicidade da matrícula
                    const matriculaExistente = Object.values(users).find(u => 
                        u.type === 'aluno' && u.matricula === aluno.matricula
                    );
                    if (matriculaExistente) {
                        erros.push(`Linha ${index + 2}: Matrícula ${aluno.matricula} já cadastrada`);
                        return;
                    }
                    
                    // Validar unicidade do email
                    if (users[aluno.email]) {
                        erros.push(`Linha ${index + 2}: Email ${aluno.email} já cadastrado`);
                        return;
                    }
                    
                    // Criar usuário
                    const senhaPadrao = '12345678'; // Senha padrão que deve ser alterada
                    users[aluno.email] = {
                        password: senhaPadrao,
                        type: 'aluno',
                        name: aluno.nome,
                        matricula: aluno.matricula,
                        cpfAluno: aluno.cpf,
                        dataNascimento: aluno.nascimento,
                        serie: aluno.serie,
                        turma: aluno.turma,
                        active: true,
                        senhaTemporaria: true // Flag para indicar que precisa alterar senha
                    };
                    
                    sucessos++;
                } catch (error) {
                    erros.push(`Linha ${index + 2}: ${error.message}`);
                }
            });
            
            // Exibir resultado
            resultadoDiv.style.display = 'block';
            resultadoDiv.innerHTML = `
                <div style="padding: 20px; background: ${sucessos > 0 ? '#d4edda' : '#f8d7da'}; border-radius: 10px; margin-top: 20px;">
                    <h4 style="color: ${sucessos > 0 ? '#155724' : '#721c24'}; margin-bottom: 15px;">
                        ${sucessos > 0 ? '✅' : '❌'} Resultado da Importação
                    </h4>
                    <p><strong>Alunos importados com sucesso:</strong> ${sucessos}</p>
                    ${erros.length > 0 ? `
                        <p><strong>Erros encontrados:</strong> ${erros.length}</p>
                        <div style="max-height: 200px; overflow-y: auto; margin-top: 10px;">
                            ${erros.map(erro => `<p style="font-size: 12px; color: #721c24;">• ${erro}</p>`).join('')}
                        </div>
                    ` : ''}
                </div>
            `;
            
            if (sucessos > 0) {
                showAlert(`${sucessos} aluno(s) importado(s) com sucesso!`, 'success');
                carregarUsuarios();
            }
            
        } catch (error) {
            showAlert('Erro ao processar arquivo: ' + error.message, 'error');
        }
    };
    
    reader.readAsText(arquivo);
}

// Carregar turmas (reutiliza função do dashboard-direcao.js se disponível, senão cria local)
function carregarTurmas() {
    const lista = document.getElementById('listaTurmas');
    if (!lista) return;
    
    lista.innerHTML = '';
    
    Object.keys(turmasData || {}).forEach(codigo => {
        const turma = turmasData[codigo];
        const card = document.createElement('div');
        card.className = 'turma-item';
        card.style.cssText = 'background: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="color: #2c3e50; margin-bottom: 10px;">${turma.nome}</h3>
                    <p style="color: #666;">${turma.disciplina} • ${turma.alunos.length} alunos</p>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-edit" onclick="editarTurma('${codigo}')"><i class="fas fa-edit"></i> Editar</button>
                    <button class="btn" onclick="excluirTurma('${codigo}')" style="background: #f44336; color: white;"><i class="fas fa-trash"></i> Excluir</button>
                </div>
            </div>
        `;
        lista.appendChild(card);
    });
}

// Carregar disciplinas (reutiliza função do dashboard-direcao.js se disponível, senão cria local)
function carregarDisciplinas() {
    const lista = document.getElementById('listaDisciplinas');
    if (!lista) return;
    
    // Buscar disciplinas dos professores
    const disciplinasUnicas = new Set();
    Object.values(users).forEach(user => {
        if (user.type === 'professor' && user.disciplina) {
            disciplinasUnicas.add(user.disciplina);
        }
    });
    
    lista.innerHTML = '';
    
    if (disciplinasUnicas.size === 0) {
        lista.innerHTML = '<p style="text-align: center; color: #666;">Nenhuma disciplina cadastrada ainda.</p>';
        return;
    }
    
    disciplinasUnicas.forEach(disciplina => {
        const card = document.createElement('div');
        card.style.cssText = 'background: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="color: #2c3e50; margin-bottom: 10px;"><i class="fas fa-book"></i> ${disciplina}</h3>
                    <p style="color: #666;">Disciplina ativa</p>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-edit" onclick="editarDisciplina('${disciplina}')"><i class="fas fa-edit"></i> Editar</button>
                    <button class="btn" onclick="excluirDisciplina('${disciplina}')" style="background: #f44336; color: white;"><i class="fas fa-trash"></i> Excluir</button>
                </div>
            </div>
        `;
        lista.appendChild(card);
    });
}

// Funções auxiliares para turmas e disciplinas
function editarTurma(codigo) {
    if (typeof abrirModalTurma === 'function') {
        abrirModalTurma(codigo);
    } else {
        showAlert('Função de edição de turma não disponível', 'error');
    }
}

function excluirTurma(codigo) {
    if (confirm('Tem certeza que deseja excluir esta turma?')) {
        delete turmasData[codigo];
        showAlert('Turma excluída com sucesso!', 'success');
        carregarTurmas();
    }
}

function editarDisciplina(nome) {
    if (typeof abrirModalDisciplina === 'function') {
        abrirModalDisciplina(nome);
    } else {
        showAlert('Função de edição de disciplina não disponível', 'error');
    }
}

function excluirDisciplina(nome) {
    if (confirm(`Tem certeza que deseja excluir a disciplina "${nome}"?`)) {
        Object.values(users).forEach(user => {
            if (user.type === 'professor' && user.disciplina === nome) {
                user.disciplina = '';
            }
        });
        showAlert('Disciplina excluída com sucesso!', 'success');
        carregarDisciplinas();
    }
}

// Funções auxiliares para usuários
function editarUsuario(email) {
    const user = users[email];
    if (!user) return;
    
    showAlert('Funcionalidade de edição será implementada em breve!', 'info');
    // TODO: Implementar modal de edição
}

function toggleStatusUsuario(email) {
    const user = users[email];
    if (!user) return;
    
    user.active = user.active === false ? true : false;
    showAlert(`Usuário ${user.active ? 'reativado' : 'desativado'} com sucesso!`, 'success');
    carregarUsuarios();
}

// Carregar logs de auditoria
function carregarLogsAuditoria() {
    const tbody = document.getElementById('tbodyAuditoria');
    const selectUsuario = document.getElementById('filtroAuditoriaUsuario');
    
    if (!tbody) return;
    
    // Carregar lista de usuários para filtro
    if (selectUsuario) {
        selectUsuario.innerHTML = '<option value="">Todos os usuários</option>';
        Object.keys(users).forEach(email => {
            const option = document.createElement('option');
            option.value = email;
            option.textContent = users[email].name;
            selectUsuario.appendChild(option);
        });
    }
    
    // Carregar logs do localStorage
    const logs = JSON.parse(localStorage.getItem('auditoriaLogs') || '[]');
    
    if (logs.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; color: #666;">Nenhum log encontrado</td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = '';
    logs.reverse().forEach(log => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${new Date(log.timestamp).toLocaleString('pt-BR')}</td>
            <td>${log.usuario}</td>
            <td>${log.acao}</td>
            <td>${log.detalhes || '-'}</td>
        `;
        tbody.appendChild(row);
    });
}

// Filtrar auditoria
function filtrarAuditoria() {
    const filtroUsuario = document.getElementById('filtroAuditoriaUsuario').value;
    const filtroAcao = document.getElementById('filtroAuditoriaAcao').value;
    const tbody = document.getElementById('tbodyAuditoria');
    
    if (!tbody) return;
    
    const logs = JSON.parse(localStorage.getItem('auditoriaLogs') || '[]');
    let logsFiltrados = logs;
    
    if (filtroUsuario) {
        logsFiltrados = logsFiltrados.filter(log => log.email === filtroUsuario);
    }
    
    if (filtroAcao) {
        logsFiltrados = logsFiltrados.filter(log => log.acao.toLowerCase().includes(filtroAcao.toLowerCase()));
    }
    
    if (logsFiltrados.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; color: #666;">Nenhum log encontrado com os filtros aplicados</td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = '';
    logsFiltrados.reverse().forEach(log => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${new Date(log.timestamp).toLocaleString('pt-BR')}</td>
            <td>${log.usuario}</td>
            <td>${log.acao}</td>
            <td>${log.detalhes || '-'}</td>
        `;
        tbody.appendChild(row);
    });
}

// Salvar configurações
function salvarConfiguracoes() {
    const nomeInstituicao = document.getElementById('configNomeInstituicao').value;
    const anoLetivo = document.getElementById('configAnoLetivo').value;
    const periodoLetivo = document.getElementById('configPeriodoLetivo').value;
    
    const configuracoes = {
        nomeInstituicao: nomeInstituicao,
        anoLetivo: anoLetivo,
        periodoLetivo: periodoLetivo,
        atualizadoEm: new Date().toISOString()
    };
    
    localStorage.setItem('configuracoesSistema', JSON.stringify(configuracoes));
    showAlert('Configurações salvas com sucesso!', 'success');
}

// Registrar log de auditoria
function registrarLogAuditoria(acao, detalhes = '') {
    const logs = JSON.parse(localStorage.getItem('auditoriaLogs') || '[]');
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    logs.push({
        timestamp: new Date().toISOString(),
        usuario: currentUser.name || 'Sistema',
        email: currentUser.email || '',
        acao: acao,
        detalhes: detalhes
    });
    
    // Manter apenas os últimos 1000 logs
    if (logs.length > 1000) {
        logs.shift();
    }
    
    localStorage.setItem('auditoriaLogs', JSON.stringify(logs));
}

// Editar perfil admin
function editAdminProfile() {
    showAlert('Funcionalidade de edição de perfil será implementada em breve!', 'info');
}

// Sobrescrever função de cadastro de usuário para incluir direção
const abrirModalCadastroUsuarioOriginal = window.abrirModalCadastroUsuario;
window.abrirModalCadastroUsuario = function(tipo) {
    if (tipo === 'direcao') {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'modalCadastroUsuario';
        
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 600px;">
                <div class="modal-header">
                    <h2><i class="fas fa-plus"></i> Cadastrar Direção</h2>
                    <button class="modal-close" onclick="fecharModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label"><i class="fas fa-id-card"></i> CPF</label>
                        <input type="text" class="form-input" id="modalDirecaoCpf" placeholder="000.000.000-00" maxlength="14">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Nome Completo</label>
                        <input type="text" class="form-input" id="modalDirecaoNome" placeholder="Nome completo">
                    </div>
                    <div class="form-group">
                        <label class="form-label"><i class="fas fa-briefcase"></i> Cargo</label>
                        <select class="form-input" id="modalDirecaoCargo">
                            <option value="">Selecione</option>
                            <option value="Diretor">Diretor</option>
                            <option value="Vice-Diretor">Vice-Diretor</option>
                            <option value="Coordenador Pedagógico">Coordenador Pedagógico</option>
                            <option value="Supervisor Escolar">Supervisor Escolar</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label"><i class="fas fa-envelope"></i> E-mail Institucional</label>
                        <input type="email" class="form-input" id="modalDirecaoEmail" placeholder="direcao@escola.com">
                    </div>
                    <div class="form-group">
                        <label class="form-label"><i class="fas fa-lock"></i> Senha</label>
                        <input type="password" class="form-input" id="modalDirecaoSenha" placeholder="Mínimo 8 caracteres">
                    </div>
                    <div class="modal-actions">
                        <button class="btn btn-save" onclick="salvarNovoUsuario('direcao')"><i class="fas fa-save"></i> Salvar</button>
                        <button class="btn btn-edit" onclick="fecharModal()"><i class="fas fa-times"></i> Cancelar</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'flex';
        
        // Máscara de CPF
        const cpfInput = document.getElementById('modalDirecaoCpf');
        if (cpfInput) {
            cpfInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length <= 11) {
                    value = value.replace(/(\d{3})(\d)/, '$1.$2');
                    value = value.replace(/(\d{3})(\d)/, '$1.$2');
                    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                    e.target.value = value;
                }
            });
        }
    } else {
        abrirModalCadastroUsuarioOriginal(tipo);
    }
};

// Sobrescrever função salvarNovoUsuario para incluir direção
const salvarNovoUsuarioOriginal = window.salvarNovoUsuario;
window.salvarNovoUsuario = function(tipo) {
    if (tipo === 'direcao') {
        const cpf = document.getElementById('modalDirecaoCpf').value;
        const nome = document.getElementById('modalDirecaoNome').value;
        const cargo = document.getElementById('modalDirecaoCargo').value;
        const email = document.getElementById('modalDirecaoEmail').value;
        const senha = document.getElementById('modalDirecaoSenha').value;
        
        if (!cpf || !nome || !cargo || !email || !senha) {
            showAlert('Por favor, preencha todos os campos!', 'error');
            return;
        }
        
        if (senha.length < 8) {
            showAlert('A senha deve ter pelo menos 8 caracteres!', 'error');
            return;
        }
        
        // Validar unicidade
        const cpfLimpo = cpf.replace(/\D/g, '');
        const cpfExistente = Object.values(users).find(u => 
            (u.type === 'direcao' || u.type === 'admin') && 
            u.cpf && u.cpf.replace(/\D/g, '') === cpfLimpo
        );
        if (cpfExistente) {
            showAlert('Este CPF já está cadastrado!', 'error');
            return;
        }
        
        if (users[email]) {
            showAlert('Este e-mail já está cadastrado!', 'error');
            return;
        }
        
        users[email] = {
            password: senha,
            type: 'direcao',
            name: nome,
            cpf: cpf,
            cargo: cargo,
            active: true
        };
        
        registrarLogAuditoria('Cadastro de Direção', `Direção cadastrada: ${nome}`);
        showAlert('Direção cadastrada com sucesso!', 'success');
        fecharModal();
        carregarUsuarios();
    } else {
        salvarNovoUsuarioOriginal(tipo);
    }
};

