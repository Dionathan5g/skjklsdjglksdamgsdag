// ===== FUNÇÕES DE GESTÃO DE USUÁRIOS =====

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

// Filtrar usuários
function filtrarUsuarios() {
    const filtroTipo = document.getElementById('filtroTipoUsuario').value;
    const busca = document.getElementById('buscaUsuario').value.toLowerCase();
    const tbody = document.getElementById('tbodyUsuarios');
    
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    Object.keys(users).forEach(email => {
        const user = users[email];
        
        // Filtrar por tipo
        if (filtroTipo && user.type !== filtroTipo) return;
        
        // Filtrar por busca
        if (busca) {
            const buscaText = `${user.name} ${email} ${user.matricula || ''} ${user.cpf || ''}`.toLowerCase();
            if (!buscaText.includes(busca)) return;
        }
        
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

// Abrir modal de cadastro de usuário
function abrirModalCadastroUsuario(tipo) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'modalCadastroUsuario';
    
    let camposHTML = '';
    
    if (tipo === 'aluno') {
        camposHTML = `
            <div class="form-group">
                <label class="form-label"><i class="fas fa-id-card"></i> Matrícula</label>
                <input type="text" class="form-input" id="modalAlunoMatricula" placeholder="Digite a matrícula">
            </div>
            <div class="form-group">
                <label class="form-label">Nome Completo</label>
                <input type="text" class="form-input" id="modalAlunoNome" placeholder="Nome completo">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-envelope"></i> E-mail</label>
                <input type="email" class="form-input" id="modalAlunoEmail" placeholder="email@exemplo.com">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-id-card"></i> CPF</label>
                <input type="text" class="form-input" id="modalAlunoCpf" placeholder="000.000.000-00" maxlength="14">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-calendar"></i> Data de Nascimento</label>
                <input type="date" class="form-input" id="modalAlunoNascimento">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-graduation-cap"></i> Série</label>
                <select class="form-input" id="modalAlunoSerie">
                    <option value="">Selecione</option>
                    <option value="1">1ª Série</option>
                    <option value="2">2ª Série</option>
                    <option value="3">3ª Série</option>
                    <option value="4">4ª Série</option>
                    <option value="5">5ª Série</option>
                    <option value="6">6ª Série</option>
                    <option value="7">7ª Série</option>
                    <option value="8">8ª Série</option>
                    <option value="9">9ª Série</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-school"></i> Turma</label>
                <select class="form-input" id="modalAlunoTurma">
                    <option value="">Selecione</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-lock"></i> Senha</label>
                <input type="password" class="form-input" id="modalAlunoSenha" placeholder="Mínimo 8 caracteres">
            </div>
        `;
    } else if (tipo === 'professor') {
        camposHTML = `
            <div class="form-group">
                <label class="form-label"><i class="fas fa-id-card"></i> Matrícula</label>
                <input type="text" class="form-input" id="modalProfessorMatricula" placeholder="Matrícula funcional">
            </div>
            <div class="form-group">
                <label class="form-label">Nome Completo</label>
                <input type="text" class="form-input" id="modalProfessorNome" placeholder="Nome completo">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-envelope"></i> E-mail Institucional</label>
                <input type="email" class="form-input" id="modalProfessorEmail" placeholder="professor@escola.com">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-id-card"></i> CPF</label>
                <input type="text" class="form-input" id="modalProfessorCpf" placeholder="000.000.000-00" maxlength="14">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-book"></i> Disciplina Principal</label>
                <input type="text" class="form-input" id="modalProfessorDisciplina" placeholder="Ex: Matemática">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-lock"></i> Senha</label>
                <input type="password" class="form-input" id="modalProfessorSenha" placeholder="Mínimo 8 caracteres">
            </div>
        `;
    } else if (tipo === 'responsavel') {
        camposHTML = `
            <div class="form-group">
                <label class="form-label"><i class="fas fa-id-card"></i> CPF do Responsável</label>
                <input type="text" class="form-input" id="modalResponsavelCpf" placeholder="000.000.000-00" maxlength="14">
            </div>
            <div class="form-group">
                <label class="form-label">Nome Completo</label>
                <input type="text" class="form-input" id="modalResponsavelNome" placeholder="Nome completo">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-envelope"></i> E-mail</label>
                <input type="email" class="form-input" id="modalResponsavelEmail" placeholder="email@exemplo.com">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-phone"></i> Telefone</label>
                <input type="text" class="form-input" id="modalResponsavelTelefone" placeholder="(00) 00000-0000">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-link"></i> CPF do Aluno (para vinculação)</label>
                <input type="text" class="form-input" id="modalResponsavelCpfAluno" placeholder="000.000.000-00" maxlength="14">
            </div>
            <div class="form-group">
                <label class="form-label"><i class="fas fa-lock"></i> Senha</label>
                <input type="password" class="form-input" id="modalResponsavelSenha" placeholder="Mínimo 8 caracteres">
            </div>
        `;
    }
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px; max-height: 90vh; overflow-y: auto;">
            <div class="modal-header">
                <h2><i class="fas fa-plus"></i> Cadastrar ${tipo === 'aluno' ? 'Aluno' : tipo === 'professor' ? 'Professor' : 'Responsável'}</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                ${camposHTML}
                <div class="modal-actions" style="margin-top: 20px;">
                    <button class="btn btn-save" onclick="salvarNovoUsuario('${tipo}')"><i class="fas fa-save"></i> Salvar</button>
                    <button class="btn btn-edit" onclick="fecharModal()"><i class="fas fa-times"></i> Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Aplicar máscaras
    if (tipo === 'aluno' || tipo === 'professor' || tipo === 'responsavel') {
        const cpfInputs = modal.querySelectorAll('input[id*="Cpf"]');
        cpfInputs.forEach(input => {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length <= 11) {
                    value = value.replace(/(\d{3})(\d)/, '$1.$2');
                    value = value.replace(/(\d{3})(\d)/, '$1.$2');
                    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                    e.target.value = value;
                }
            });
        });
    }
}

// Salvar novo usuário
function salvarNovoUsuario(tipo) {
    let email, senha, novoUsuario;
    
    if (tipo === 'aluno') {
        const matricula = document.getElementById('modalAlunoMatricula').value;
        const nome = document.getElementById('modalAlunoNome').value;
        email = document.getElementById('modalAlunoEmail').value;
        const cpf = document.getElementById('modalAlunoCpf').value;
        const nascimento = document.getElementById('modalAlunoNascimento').value;
        const serie = document.getElementById('modalAlunoSerie').value;
        const turma = document.getElementById('modalAlunoTurma').value;
        senha = document.getElementById('modalAlunoSenha').value;
        
        if (!matricula || !nome || !email || !cpf || !nascimento || !serie || !turma || !senha) {
            showAlert('Por favor, preencha todos os campos!', 'error');
            return;
        }
        
        // Validar unicidade
        const matriculaExistente = Object.values(users).find(u => u.type === 'aluno' && u.matricula === matricula);
        if (matriculaExistente) {
            showAlert('Esta matrícula já está cadastrada!', 'error');
            return;
        }
        
        const cpfLimpo = cpf.replace(/\D/g, '');
        const cpfExistente = Object.values(users).find(u => u.type === 'aluno' && u.cpfAluno && u.cpfAluno.replace(/\D/g, '') === cpfLimpo);
        if (cpfExistente) {
            showAlert('Este CPF já está cadastrado!', 'error');
            return;
        }
        
        if (users[email]) {
            showAlert('Este e-mail já está cadastrado!', 'error');
            return;
        }
        
        novoUsuario = {
            password: senha,
            type: 'aluno',
            name: nome,
            matricula: matricula,
            cpfAluno: cpf,
            dataNascimento: nascimento,
            serie: serie,
            turma: turma,
            active: true
        };
    } else if (tipo === 'professor') {
        const matricula = document.getElementById('modalProfessorMatricula').value;
        const nome = document.getElementById('modalProfessorNome').value;
        email = document.getElementById('modalProfessorEmail').value;
        const cpf = document.getElementById('modalProfessorCpf').value;
        const disciplina = document.getElementById('modalProfessorDisciplina').value;
        senha = document.getElementById('modalProfessorSenha').value;
        
        if (!matricula || !nome || !email || !cpf || !disciplina || !senha) {
            showAlert('Por favor, preencha todos os campos!', 'error');
            return;
        }
        
        // Validar unicidade
        const matriculaExistente = Object.values(users).find(u => u.type === 'professor' && u.matricula === matricula);
        if (matriculaExistente) {
            showAlert('Esta matrícula já está cadastrada!', 'error');
            return;
        }
        
        const cpfLimpo = cpf.replace(/\D/g, '');
        const cpfExistente = Object.values(users).find(u => (u.type === 'professor' || u.type === 'direcao') && u.cpf && u.cpf.replace(/\D/g, '') === cpfLimpo);
        if (cpfExistente) {
            showAlert('Este CPF já está cadastrado!', 'error');
            return;
        }
        
        if (users[email]) {
            showAlert('Este e-mail já está cadastrado!', 'error');
            return;
        }
        
        novoUsuario = {
            password: senha,
            type: 'professor',
            name: nome,
            matricula: matricula,
            cpf: cpf,
            disciplina: disciplina,
            active: true
        };
    } else if (tipo === 'responsavel') {
        const cpf = document.getElementById('modalResponsavelCpf').value;
        const nome = document.getElementById('modalResponsavelNome').value;
        email = document.getElementById('modalResponsavelEmail').value;
        const telefone = document.getElementById('modalResponsavelTelefone').value;
        const cpfAluno = document.getElementById('modalResponsavelCpfAluno').value;
        senha = document.getElementById('modalResponsavelSenha').value;
        
        if (!cpf || !nome || !email || !cpfAluno || !senha) {
            showAlert('Por favor, preencha todos os campos obrigatórios!', 'error');
            return;
        }
        
        // Validar unicidade do CPF
        const cpfLimpo = cpf.replace(/\D/g, '');
        const cpfExistente = Object.values(users).find(u => u.type === 'responsavel' && u.cpfResponsavel && u.cpfResponsavel.replace(/\D/g, '') === cpfLimpo);
        if (cpfExistente) {
            showAlert('Este CPF já está cadastrado!', 'error');
            return;
        }
        
        if (users[email]) {
            showAlert('Este e-mail já está cadastrado!', 'error');
            return;
        }
        
        // Buscar aluno vinculado
        const cpfAlunoLimpo = cpfAluno.replace(/\D/g, '');
        const alunoEncontrado = Object.values(users).find(u => u.type === 'aluno' && u.cpfAluno && u.cpfAluno.replace(/\D/g, '') === cpfAlunoLimpo);
        
        novoUsuario = {
            password: senha,
            type: 'responsavel',
            name: nome,
            cpfResponsavel: cpf,
            cpf: cpf,
            telefone: telefone,
            cpfAlunoVinculado: cpfAluno,
            alunoVinculado: alunoEncontrado ? {
                nome: alunoEncontrado.name,
                matricula: alunoEncontrado.matricula,
                cpf: alunoEncontrado.cpfAluno,
                dataNascimento: alunoEncontrado.dataNascimento,
                serie: alunoEncontrado.serie,
                turma: alunoEncontrado.turma
            } : null,
            active: true
        };
    }
    
    if (senha.length < 8) {
        showAlert('A senha deve ter pelo menos 8 caracteres!', 'error');
        return;
    }
    
    users[email] = novoUsuario;
    showAlert('Usuário cadastrado com sucesso!', 'success');
    fecharModal();
    carregarUsuarios();
}

// Editar usuário
function editarUsuario(email) {
    const user = users[email];
    if (!user) return;
    
    showAlert('Funcionalidade de edição será implementada em breve!', 'info');
    // TODO: Implementar modal de edição
}

// Toggle status do usuário
function toggleStatusUsuario(email) {
    const user = users[email];
    if (!user) return;
    
    user.active = user.active === false ? true : false;
    showAlert(`Usuário ${user.active ? 'reativado' : 'desativado'} com sucesso!`, 'success');
    carregarUsuarios();
}

// ===== FUNÇÕES DE GESTÃO DE TURMAS =====

// Carregar turmas
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

// Abrir modal de turma
function abrirModalTurma(editarCodigo = null) {
    const turma = editarCodigo ? turmasData[editarCodigo] : null;
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'modalTurma';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${editarCodigo ? '<i class="fas fa-edit"></i> Editar' : '<i class="fas fa-plus"></i> Nova'} Turma</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Nome da Turma</label>
                    <input type="text" class="form-input" id="modalTurmaNome" value="${turma ? turma.nome : ''}" placeholder="Ex: 1° ano A">
                </div>
                <div class="form-group">
                    <label class="form-label">Série</label>
                    <select class="form-input" id="modalTurmaSerie">
                        <option value="">Selecione</option>
                        ${[1,2,3,4,5,6,7,8,9].map(s => `<option value="${s}" ${turma && turma.serie === s ? 'selected' : ''}>${s}ª Série</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Turno</label>
                    <select class="form-input" id="modalTurmaTurno">
                        <option value="">Selecione</option>
                        <option value="manha" ${turma && turma.turno === 'manha' ? 'selected' : ''}>Manhã</option>
                        <option value="tarde" ${turma && turma.turno === 'tarde' ? 'selected' : ''}>Tarde</option>
                        <option value="noite" ${turma && turma.turno === 'noite' ? 'selected' : ''}>Noite</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Ano Letivo</label>
                    <input type="text" class="form-input" id="modalTurmaAno" value="${turma ? turma.anoLetivo : new Date().getFullYear()}" placeholder="2024">
                </div>
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarTurma('${editarCodigo || ''}')"><i class="fas fa-save"></i> Salvar</button>
                    <button class="btn btn-edit" onclick="fecharModal()"><i class="fas fa-times"></i> Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

// Salvar turma
function salvarTurma(codigo) {
    const nome = document.getElementById('modalTurmaNome').value;
    const serie = document.getElementById('modalTurmaSerie').value;
    const turno = document.getElementById('modalTurmaTurno').value;
    const anoLetivo = document.getElementById('modalTurmaAno').value;
    
    if (!nome || !serie || !turno || !anoLetivo) {
        showAlert('Por favor, preencha todos os campos!', 'error');
        return;
    }
    
    const novoCodigo = codigo || `${serie}${nome.split(' ')[nome.split(' ').length - 1]}`;
    
    if (!turmasData) turmasData = {};
    
    turmasData[novoCodigo] = {
        nome: nome,
        serie: serie,
        turno: turno,
        anoLetivo: anoLetivo,
        disciplina: turmasData[novoCodigo]?.disciplina || '',
        professor: turmasData[novoCodigo]?.professor || '',
        alunos: turmasData[novoCodigo]?.alunos || []
    };
    
    showAlert('Turma salva com sucesso!', 'success');
    fecharModal();
    carregarTurmas();
}

// Editar turma
function editarTurma(codigo) {
    abrirModalTurma(codigo);
}

// Excluir turma
function excluirTurma(codigo) {
    if (confirm('Tem certeza que deseja excluir esta turma?')) {
        delete turmasData[codigo];
        showAlert('Turma excluída com sucesso!', 'success');
        carregarTurmas();
    }
}

// ===== FUNÇÕES DE GESTÃO DE DISCIPLINAS =====

// Carregar disciplinas
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

// Abrir modal de disciplina
function abrirModalDisciplina(editarNome = null) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'modalDisciplina';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${editarNome ? '✏️ Editar' : '➕ Nova'} Disciplina</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Nome da Disciplina</label>
                    <input type="text" class="form-input" id="modalDisciplinaNome" value="${editarNome || ''}" placeholder="Ex: Matemática">
                </div>
                <div class="form-group">
                    <label class="form-label">Código</label>
                    <input type="text" class="form-input" id="modalDisciplinaCodigo" placeholder="Ex: MAT001">
                </div>
                <div class="form-group">
                    <label class="form-label">Carga Horária (horas)</label>
                    <input type="number" class="form-input" id="modalDisciplinaCarga" placeholder="Ex: 80">
                </div>
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarDisciplina('${editarNome || ''}')">💾 Salvar</button>
                    <button class="btn btn-edit" onclick="fecharModal()">❌ Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

// Salvar disciplina
function salvarDisciplina(nomeAntigo) {
    const nome = document.getElementById('modalDisciplinaNome').value;
    const codigo = document.getElementById('modalDisciplinaCodigo').value;
    const carga = document.getElementById('modalDisciplinaCarga').value;
    
    if (!nome) {
        showAlert('Por favor, informe o nome da disciplina!', 'error');
        return;
    }
    
    // Se estiver editando, atualizar professores que têm essa disciplina
    if (nomeAntigo && nomeAntigo !== nome) {
        Object.values(users).forEach(user => {
            if (user.type === 'professor' && user.disciplina === nomeAntigo) {
                user.disciplina = nome;
            }
        });
    }
    
    showAlert('Disciplina salva com sucesso!', 'success');
    fecharModal();
    carregarDisciplinas();
}

// Editar disciplina
function editarDisciplina(nome) {
    abrirModalDisciplina(nome);
}

// Excluir disciplina
function excluirDisciplina(nome) {
    if (confirm(`Tem certeza que deseja excluir a disciplina "${nome}"?`)) {
        // Remover disciplina dos professores
        Object.values(users).forEach(user => {
            if (user.type === 'professor' && user.disciplina === nome) {
                user.disciplina = '';
            }
        });
        showAlert('Disciplina excluída com sucesso!', 'success');
        carregarDisciplinas();
    }
}

// ===== FUNÇÕES DE BOLETINS =====

// Carregar alunos para seleção de boletim
function carregarAlunosParaBoletim() {
    const select = document.getElementById('seletorAlunoBoletim');
    if (!select) return;
    
    select.innerHTML = '<option value="">Selecione um aluno...</option>';
    
    Object.keys(users).forEach(email => {
        const user = users[email];
        if (user.type === 'aluno') {
            const option = document.createElement('option');
            option.value = email;
            option.textContent = `${user.name} - Matrícula: ${user.matricula}`;
            select.appendChild(option);
        }
    });
}

// Carregar boletim do aluno (para direção)
function carregarBoletimAlunoDirecao() {
    const email = document.getElementById('seletorAlunoBoletim').value;
    const container = document.getElementById('boletimAlunoDirecao');
    
    if (!email || !container) {
        container.style.display = 'none';
        return;
    }
    
    const aluno = users[email];
    if (!aluno || aluno.type !== 'aluno') {
        showAlert('Aluno não encontrado!', 'error');
        return;
    }
    
    container.innerHTML = `
        <div style="background: white; padding: 25px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
            <h3 style="color: #2c3e50; margin-bottom: 20px;"><i class="fas fa-clipboard-list"></i> Boletim de ${aluno.name}</h3>
            <div style="margin-bottom: 20px;">
                <p><strong>Matrícula:</strong> ${aluno.matricula}</p>
                <p><strong>Turma:</strong> ${aluno.serie}ª Série ${aluno.turma}</p>
            </div>
            <button class="btn btn-save" onclick="inserirObservacaoBoletim('${email}')"><i class="fas fa-plus"></i> Inserir Observação</button>
            <div style="margin-top: 20px;">
                <p style="color: #666;">Boletim completo será exibido aqui...</p>
            </div>
        </div>
    `;
    container.style.display = 'block';
}

// Inserir observação no boletim
function inserirObservacaoBoletim(emailAluno) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'modalObservacao';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>📝 Inserir Observação no Boletim</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Disciplina</label>
                    <input type="text" class="form-input" id="modalObsDisciplina" placeholder="Ex: Matemática">
                </div>
                <div class="form-group">
                    <label class="form-label">Observação</label>
                    <textarea class="form-input" id="modalObsTexto" rows="5" placeholder="Digite a observação sobre o aluno..."></textarea>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarObservacao('${emailAluno}')">💾 Salvar</button>
                    <button class="btn btn-edit" onclick="fecharModal()">❌ Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

// Salvar observação
function salvarObservacao(emailAluno) {
    const disciplina = document.getElementById('modalObsDisciplina').value;
    const texto = document.getElementById('modalObsTexto').value;
    
    if (!disciplina || !texto) {
        showAlert('Por favor, preencha todos os campos!', 'error');
        return;
    }
    
    const aluno = users[emailAluno];
    if (!aluno.observacoes) aluno.observacoes = [];
    
    aluno.observacoes.push({
        disciplina: disciplina,
        texto: texto,
        autor: window.currentUser.name,
        tipo: 'direcao',
        data: new Date().toISOString().split('T')[0]
    });
    
    showAlert('Observação inserida com sucesso!', 'success');
    fecharModal();
    carregarBoletimAluno();
}

// ===== FUNÇÕES DE RELATÓRIOS =====

function gerarRelatorioFrequencia() {
    showAlert('Relatório de frequência será gerado em breve!', 'info');
}

function gerarRelatorioNotas() {
    showAlert('Relatório de notas será gerado em breve!', 'info');
}

function gerarRelatorioTurmas() {
    showAlert('Relatório por turma será gerado em breve!', 'info');
}

function gerarRelatorioDisciplinas() {
    showAlert('Relatório por disciplina será gerado em breve!', 'info');
}

// Função para fechar modal
function fecharModal() {
    const modal = document.getElementById('modalCadastroUsuario') || 
                  document.getElementById('modalTurma') || 
                  document.getElementById('modalDisciplina') ||
                  document.getElementById('modalObservacao');
    if (modal) {
        modal.remove();
    }
}

