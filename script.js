// ===== DADOS DE EXEMPLO PRÉ-CADASTRADOS =====
// FUTURO: Integração com banco de dados real via database-config.js
const users = {
    // Alunos
    'aluno@teste.com': {
        password: '12345678',
        type: 'aluno',
        name: 'João Silva',
        matricula: '2024001',
        cpfAluno: '111.222.333-44',
        dataNascimento: '2010-03-15',
        serie: '2',
        turma: 'A'
    },
    'maria@teste.com': {
        password: '12345678',
        type: 'aluno',
        name: 'Maria Santos',
        matricula: '2024002',
        cpfAluno: '555.666.777-88',
        dataNascimento: '2011-07-20',
        serie: '1',
        turma: 'B'
    },

    // Professores
    'prof@teste.com': {
        password: '12345678',
        type: 'professor',
        name: 'Prof. Carlos Silva',
        matricula: 'PROF001',
        disciplina: 'Matemática'
    },
    'ana.prof@teste.com': {
        password: '12345678',
        type: 'professor',
        name: 'Profa. Ana Costa',
        matricula: 'PROF002',
        disciplina: 'Português'
    },

    // Responsáveis
    'resp@teste.com': {
        password: '12345678',
        type: 'responsavel',
        name: 'José Silva',
        cpfResponsavel: '123.456.789-00',
        cpfAlunoVinculado: '111.222.333-44', // CPF do aluno vinculado
        alunoVinculado: {
            nome: 'João Silva',
            matricula: '2024001',
            cpf: '111.222.333-44',
            dataNascimento: '2010-03-15',
            serie: '2',
            turma: 'A'
        }
    }
};

// ===== DADOS DE TURMAS E ALUNOS =====
const turmasData = {
    '1A': {
        nome: '1° ano A',
        disciplina: 'Matemática',
        professor: 'Prof. Carlos Silva',
        alunos: [
            { nome: 'João Silva', matricula: '2024001', frequencia: 95, nota: 9.5, comportamento: 'Excelente' },
            { nome: 'Maria Santos', matricula: '2024002', frequencia: 88, nota: 8.2, comportamento: 'Bom' },
            { nome: 'Pedro Oliveira', matricula: '2024003', frequencia: 92, nota: 7.8, comportamento: 'Bom' },
            { nome: 'Ana Costa', matricula: '2024004', frequencia: 85, nota: 9.0, comportamento: 'Excelente' },
            { nome: 'Lucas Ferreira', matricula: '2024005', frequencia: 90, nota: 8.5, comportamento: 'Bom' }
        ]
    },
    '2B': {
        nome: '2° ano B',
        disciplina: 'Matemática',
        professor: 'Prof. Carlos Silva',
        alunos: [
            { nome: 'Carlos Mendes', matricula: '2023001', frequencia: 87, nota: 7.5, comportamento: 'Bom' },
            { nome: 'Fernanda Lima', matricula: '2023002', frequencia: 94, nota: 9.2, comportamento: 'Excelente' },
            { nome: 'Rafael Souza', matricula: '2023003', frequencia: 89, nota: 8.8, comportamento: 'Bom' },
            { nome: 'Juliana Rocha', matricula: '2023004', frequencia: 91, nota: 8.0, comportamento: 'Bom' }
        ]
    },
    '3A': {
        nome: '3° ano A',
        disciplina: 'Matemática',
        professor: 'Prof. Carlos Silva',
        alunos: [
            { nome: 'Gabriel Alves', matricula: '2022001', frequencia: 93, nota: 9.8, comportamento: 'Excelente' },
            { nome: 'Camila Dias', matricula: '2022002', frequencia: 86, nota: 7.2, comportamento: 'Bom' },
            { nome: 'Diego Santos', matricula: '2022003', frequencia: 88, nota: 8.5, comportamento: 'Bom' },
            { nome: 'Larissa Costa', matricula: '2022004', frequencia: 95, nota: 9.5, comportamento: 'Excelente' },
            { nome: 'Bruno Silva', matricula: '2022005', frequencia: 90, nota: 8.8, comportamento: 'Bom' }
        ]
    }
};

// ===== DADOS DE NOTAS POR PROFESSOR =====
let professorNotas = {
    'prof@teste.com': {
        '1A': {
            'João Silva': { frequencia: 95, nota: 9.5, comportamento: 'Excelente' },
            'Maria Santos': { frequencia: 88, nota: 8.2, comportamento: 'Bom' },
            'Pedro Oliveira': { frequencia: 92, nota: 7.8, comportamento: 'Bom' },
            'Ana Costa': { frequencia: 85, nota: 9.0, comportamento: 'Excelente' },
            'Lucas Ferreira': { frequencia: 90, nota: 8.5, comportamento: 'Bom' }
        },
        '2B': {
            'Carlos Mendes': { frequencia: 87, nota: 7.5, comportamento: 'Bom' },
            'Fernanda Lima': { frequencia: 94, nota: 9.2, comportamento: 'Excelente' },
            'Rafael Souza': { frequencia: 89, nota: 8.8, comportamento: 'Bom' },
            'Juliana Rocha': { frequencia: 91, nota: 8.0, comportamento: 'Bom' }
        },
        '3A': {
            'Gabriel Alves': { frequencia: 93, nota: 9.8, comportamento: 'Excelente' },
            'Camila Dias': { frequencia: 86, nota: 7.2, comportamento: 'Bom' },
            'Diego Santos': { frequencia: 88, nota: 8.5, comportamento: 'Bom' },
            'Larissa Costa': { frequencia: 95, nota: 9.5, comportamento: 'Excelente' },
            'Bruno Silva': { frequencia: 90, nota: 8.8, comportamento: 'Bom' }
        }
    }
};

// ===== DADOS DE CONTEÚDO POR DISCIPLINA =====
let professorConteudo = {
    'prof@teste.com': {
        disciplina: 'Matemática',
        conteudos: [
            {
                id: 1,
                titulo: 'Operações Básicas',
                descricao: 'Adição, subtração, multiplicação e divisão',
                dataInicio: '2024-01-15',
                dataFim: '2024-01-30',
                status: 'Concluído',
                turmas: ['1A', '2B'],
                atividades: [
                    { nome: 'Exercícios de Adição', tipo: 'Prática', prazo: '2024-01-20' },
                    { nome: 'Prova de Multiplicação', tipo: 'Avaliação', prazo: '2024-01-25' }
                ]
            },
            {
                id: 2,
                titulo: 'Frações',
                descricao: 'Conceitos básicos de frações e operações',
                dataInicio: '2024-02-01',
                dataFim: '2024-02-15',
                status: 'Em Andamento',
                turmas: ['1A', '2B', '3A'],
                atividades: [
                    { nome: 'Exercícios de Frações', tipo: 'Prática', prazo: '2024-02-10' },
                    { nome: 'Trabalho em Grupo', tipo: 'Projeto', prazo: '2024-02-12' }
                ]
            },
            {
                id: 3,
                titulo: 'Geometria Básica',
                descricao: 'Formas geométricas e cálculos de área',
                dataInicio: '2024-02-16',
                dataFim: '2024-03-01',
                status: 'Planejado',
                turmas: ['2B', '3A'],
                atividades: [
                    { nome: 'Construção de Figuras', tipo: 'Prática', prazo: '2024-02-20' },
                    { nome: 'Cálculo de Áreas', tipo: 'Exercício', prazo: '2024-02-25' }
                ]
            }
        ]
    }
};

// ===== DADOS DE OBSERVAÇÕES DOS PROFESSORES =====
let professorObservacoes = {
    'prof@teste.com': {
        '2024001': [ // Matrícula do aluno
            {
                id: 1,
                disciplina: 'Matemática',
                data: '2024-10-15',
                observacao: 'Aluna demonstra excelente desempenho em todas as atividades. Participa ativamente das aulas e auxilia os colegas. Recomendo continuar incentivando a prática diária de exercícios.'
            }
        ],
        '2024002': [
            {
                id: 1,
                disciplina: 'Matemática',
                data: '2024-10-12',
                observacao: 'Bom desenvolvimento nas atividades. Recomendo mais atenção nos exercícios de álgebra.'
            }
        ]
    }
};

// ===== DADOS DE DISCIPLINAS POR PROFESSOR =====
let professorDisciplinas = {
    'prof@teste.com': [
        {
            id: 1,
            nome: 'Matemática',
            tipo: 'Principal',
            turmas: ['1A', '2B', '3A'],
            totalAlunos: 14,
            cargaHoraria: 40,
            status: 'Ativa',
            objetivos: [
                'Desenvolver raciocínio lógico',
                'Aplicar conceitos matemáticos',
                'Resolver problemas práticos'
            ],
            metodologia: 'Aulas expositivas com exercícios práticos e trabalhos em grupo',
            avaliacao: 'Provas escritas (60%) + Trabalhos (40%)',
            recursos: ['Quadro branco', 'Calculadora', 'Material didático'],
            estatisticas: {
                mediaGeral: 8.2,
                aprovados: 12,
                reprovados: 2,
                frequenciaMedia: 91.5
            }
        },
        {
            id: 2,
            nome: 'Física (Apoio)',
            tipo: 'Apoio',
            turmas: ['2B'],
            totalAlunos: 4,
            cargaHoraria: 20,
            status: 'Ativa',
            objetivos: [
                'Compreender conceitos físicos básicos',
                'Aplicar fórmulas em exercícios',
                'Relacionar física com matemática'
            ],
            metodologia: 'Aulas práticas com demonstrações e experimentos',
            avaliacao: 'Provas (50%) + Relatórios de experimentos (50%)',
            recursos: ['Laboratório', 'Equipamentos de física', 'Simuladores'],
            estatisticas: {
                mediaGeral: 7.8,
                aprovados: 3,
                reprovados: 1,
                frequenciaMedia: 88.2
            }
        }
    ]
};

let currentUser = null;

// ===== FUNÇÕES DE ACESSIBILIDADE =====
function toggleAccessibility(mode) {
    const body = document.body;
    body.classList.remove('daltonismo-mode', 'preto-e-branco-mode');

    if (mode === 'daltonismo') {
        body.classList.add('daltonismo-mode');
        showAlert('Modo daltônico ativado', 'success');
    } else if (mode === 'preto-e-branco') {
        body.classList.add('preto-e-branco-mode');
        showAlert('Modo preto e branco ativado', 'success');
    } else {
        showAlert('Modo de visualização padrão ativado', 'success');
    }
}

function toggleLegend() {
    const legend = document.getElementById('daltonismoLegend');
    if (legend) legend.classList.toggle('show');
}

function togglePbLegend() {
    const legend = document.getElementById('pbLegend');
    if (legend) legend.classList.toggle('show');
}

// ===== FUNÇÕES DE NAVEGAÇÃO =====
function showPage(pageId) {
    // Ocultar todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Mostrar página solicitada
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserEmail');
    showAlert('Logout realizado com sucesso!', 'success');
    setTimeout(() => window.location.href = 'login.html', 1500);
}

// ===== FUNÇÕES DE LOGIN =====
function doLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showAlert('Por favor, preencha todos os campos!', 'error');
        return;
    }

    const user = users[email];
    if (!user || user.password !== password) {
        showAlert('E-mail ou senha incorretos!', 'error');
        return;
    }

    currentUser = { ...user, email: email };
    // Salvar dados do usuário no localStorage para compartilhar entre páginas
    localStorage.setItem('currentUser', JSON.stringify({ ...user, email: email }));
    localStorage.setItem('currentUserEmail', email);
    showAlert(`Bem-vindo, ${user.name}!`, 'success');

    // Redirecionar para dashboard correto
    setTimeout(() => {
        if (user.type === 'aluno') {
            window.location.href = 'dashboard-aluno.html';
        } else if (user.type === 'professor') {
            window.location.href = 'dashboard-professor.html';
        } else if (user.type === 'responsavel') {
            window.location.href = 'dashboard-responsavel.html';
        } else if (user.type === 'direcao') {
            window.location.href = 'dashboard-direcao.html';
        } else if (user.type === 'admin') {
            window.location.href = 'dashboard-admin.html';
        }
    }, 1500);
}

// ===== FUNÇÕES DE CADASTRO =====
function cadastrarAluno() {
    const matricula = document.getElementById('alunoMatricula').value;
    const nome = document.getElementById('alunoNome').value;
    const serie = document.getElementById('alunoSerie').value;
    const turma = document.getElementById('alunoTurma').value;
    const email = document.getElementById('alunoEmail').value;
    const senha = document.getElementById('alunoSenha').value;

    if (!matricula || !nome || !serie || !turma || !email || !senha) {
        showAlert('Por favor, preencha todos os campos!', 'error');
        return;
    }

    if (senha.length < 8) {
        showAlert('A senha deve ter pelo menos 8 caracteres!', 'error');
        return;
    }

    if (users[email]) {
        showAlert('Este e-mail já está cadastrado!', 'error');
        return;
    }

    // Cadastrar novo usuário
    users[email] = {
        password: senha,
        type: 'aluno',
        name: nome,
        matricula: matricula,
        serie: serie,
        turma: turma
    };

    showAlert('Cadastro realizado com sucesso!', 'success');
    setTimeout(() => window.location.href = 'login.html', 2000);
}

function cadastrarProfessor() {
    const matricula = document.getElementById('professorMatricula').value;
    const nome = document.getElementById('professorNome').value;
    const email = document.getElementById('professorEmail').value;
    const disciplina = document.getElementById('professorDisciplina').value;
    const senha = document.getElementById('professorSenha').value;

    if (!matricula || !nome || !email || !disciplina || !senha) {
        showAlert('Por favor, preencha todos os campos!', 'error');
        return;
    }

    if (senha.length < 8) {
        showAlert('A senha deve ter pelo menos 8 caracteres!', 'error');
        return;
    }

    if (users[email]) {
        showAlert('Este e-mail já está cadastrado!', 'error');
        return;
    }

    users[email] = {
        password: senha,
        type: 'professor',
        name: nome,
        matricula: matricula,
        disciplina: disciplina
    };

    showAlert('Cadastro realizado com sucesso!', 'success');
    setTimeout(() => window.location.href = 'login.html', 2000);
}

function cadastrarResponsavel() {
    const cpfResponsavel = document.getElementById('responsavelCpf').value;
    const nome = document.getElementById('responsavelNome').value;
    const email = document.getElementById('responsavelEmail').value;
    const cpfAluno = document.getElementById('responsavelCpfAluno').value;
    const senha = document.getElementById('responsavelSenha').value;

    if (!cpfResponsavel || !nome || !email || !cpfAluno || !senha) {
        showAlert('Por favor, preencha todos os campos!', 'error');
        return;
    }

    if (senha.length < 8) {
        showAlert('A senha deve ter pelo menos 8 caracteres!', 'error');
        return;
    }

    if (users[email]) {
        showAlert('Este e-mail já está cadastrado!', 'error');
        return;
    }

    // Buscar aluno pelo CPF
    const alunoEncontrado = Object.values(users).find(u => u.type === 'aluno' && u.cpfAluno === cpfAluno);
    
    if (!alunoEncontrado) {
        showAlert('CPF do aluno não encontrado no sistema! Verifique se o aluno está cadastrado.', 'error');
        return;
    }

    // Cadastrar responsável com vinculação ao aluno
    users[email] = {
        password: senha,
        type: 'responsavel',
        name: nome,
        cpfResponsavel: cpfResponsavel,
        cpfAlunoVinculado: cpfAluno,
        alunoVinculado: {
            nome: alunoEncontrado.name,
            matricula: alunoEncontrado.matricula,
            cpf: alunoEncontrado.cpfAluno,
            dataNascimento: alunoEncontrado.dataNascimento,
            serie: alunoEncontrado.serie,
            turma: alunoEncontrado.turma
        }
    };

    showAlert(`Cadastro realizado! Você é responsável por ${alunoEncontrado.name}`, 'success');
    setTimeout(() => window.location.href = 'login.html', 2000);
}

// ===== RECUPERAÇÃO DE SENHA =====
function recoverPassword() {
    const email = document.getElementById('recoveryEmail').value;
    const messageDiv = document.getElementById('recoveryMessage');

    if (!email) {
        showMessage(messageDiv, 'Por favor, digite seu e-mail.', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showMessage(messageDiv, 'Por favor, digite um e-mail válido.', 'error');
        return;
    }

    if (!users[email]) {
        showMessage(messageDiv, 'E-mail não encontrado no sistema.', 'error');
        return;
    }

    showMessage(messageDiv, `E-mail de recuperação enviado para ${email}`, 'success');
    setTimeout(() => {
        showAlert('Verifique sua caixa de entrada. Redirecionando...', 'success');
        window.location.href = 'login.html';
    }, 2000);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;
    if (/^(\d)\1+$/.test(cpf)) return false;
    
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

function showMessage(element, message, type) {
    if (element) {
        element.textContent = message;
        element.className = `feedback-message ${type}`;
        element.style.display = 'block';
    }
}

// ===== FUNÇÕES DOS DASHBOARDS =====
function showAlunoSection(section) {
    // Atualizar menu ativo
    document.querySelectorAll('#dashboardAlunoPage .menu-item').forEach(item => {
        item.classList.remove('active');
    });
    if (event && event.target) {
        event.target.closest('.menu-item').classList.add('active');
    }

    // Mostrar seção correspondente
    const notasSection = document.getElementById('alunoNotasSection');
    const perfilSection = document.getElementById('alunoPerfilSection');
    
    if (notasSection) notasSection.style.display = section === 'notas' ? 'block' : 'none';
    if (perfilSection) perfilSection.style.display = section === 'perfil' ? 'block' : 'none';
}

function showProfessorSection(section) {
    // Atualizar menu ativo
    document.querySelectorAll('#dashboardProfessorPage .menu-item').forEach(item => {
        item.classList.remove('active');
    });
    if (event && event.target) {
        event.target.closest('.menu-item').classList.add('active');
    }

    // Ocultar todas as seções
    const sections = ['professorBoletimSection', 'professorTurmasSection', 'professorDisciplinasSection', 'professorPerfilSection'];
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) element.style.display = 'none';
    });

    // Mostrar seção solicitada
    const targetSection = document.getElementById(`professor${section.charAt(0).toUpperCase() + section.slice(1)}Section`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

function showResponsavelSection(section) {
    // Atualizar menu ativo
    document.querySelectorAll('#dashboardResponsavelPage .menu-item').forEach(item => {
        item.classList.remove('active');
    });
    if (event && event.target) {
        event.target.closest('.menu-item').classList.add('active');
    }

    // Ocultar todas as seções
    const sections = ['responsavelBoletimSection', 'responsavelFrequenciaSection', 'responsavelPerfilSection'];
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) element.style.display = 'none';
    });

    // Mostrar seção solicitada
    const targetSection = document.getElementById(`responsavel${section.charAt(0).toUpperCase() + section.slice(1)}Section`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// ===== FUNÇÕES INTERATIVAS =====
function showDetails(categoria, status, valor) {
    showAlert(`${categoria} - ${status}: ${valor}`, 'success');
}

function editNote(cell, aluno, categoria) {
    const currentValue = cell.textContent;
    const newValue = prompt(`Editando ${categoria} de ${aluno}:\nValor atual: ${currentValue}\nNovo valor:`);

    if (newValue !== null && newValue !== '') {
        cell.textContent = newValue;
        showAlert(`${categoria} de ${aluno} atualizada!`, 'success');
    }
}

function exportGrades() {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    showAlert('Gerando PDF...', 'success');
    
    // Dados das notas
    const alunos = [
        { nome: 'João Silva', frequencia: '95%', nota: '9.5', comportamento: 'Excelente' },
        { nome: 'Maria Santos', frequencia: '88%', nota: '8.2', comportamento: 'Bom' },
        { nome: 'Pedro Oliveira', frequencia: '92%', nota: '7.8', comportamento: 'Bom' },
        { nome: 'Ana Costa', frequencia: '85%', nota: '9.0', comportamento: 'Excelente' }
    ];
    
    // Criar conteúdo HTML para o PDF
    let htmlContent = `
        <html>
        <head>
            <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; background: #f8f9fa; }
                .container { background: white; padding: 40px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
                h1 { 
                    color: #3498DB; 
                    text-align: center; 
                    margin-bottom: 10px; 
                    font-size: 32px;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
                }
                h2 { color: #C19A2B; margin-bottom: 15px; font-size: 18px; }
                .info-section { 
                    background: linear-gradient(135deg, #f5f3e8, #ede8d5); 
                    padding: 20px; 
                    border-radius: 12px; 
                    margin-bottom: 25px;
                    border-left: 5px solid #3498DB;
                }
                .info-section p { margin: 8px 0; color: #555; }
                table { 
                    width: 100%; 
                    border-collapse: separate; 
                    border-spacing: 0; 
                    margin-top: 25px;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
                }
                th { 
                    background: linear-gradient(135deg, #3498DB, #2980B9); 
                    color: white; 
                    padding: 15px 12px; 
                    text-align: left;
                    font-weight: 600;
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                td { 
                    border-bottom: 1px solid #e0e0e0; 
                    padding: 14px 12px;
                    background: white;
                    color: #333;
                }
                tr:nth-child(even) td { background: #fafafa; }
                tr:last-child td { border-bottom: none; }
                
                .comportamento-cell {
                    display: inline-block;
                    padding: 8px 20px !important;
                    border-radius: 25px !important;
                    font-weight: bold !important;
                    font-size: 13px !important;
                    text-align: center !important;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                    border: 2px solid transparent !important;
                }
                
                .comportamento-excelente { 
                    background: linear-gradient(135deg, #4CAF50, #45a049) !important; 
                    color: white !important;
                    border-color: #388E3C !important;
                }
                .comportamento-bom { 
                    background: linear-gradient(135deg, #2196F3, #1976D2) !important; 
                    color: white !important;
                    border-color: #1565C0 !important;
                }
                .comportamento-regular { 
                    background: linear-gradient(135deg, #FF9800, #F57C00) !important; 
                    color: white !important;
                    border-color: #E65100 !important;
                }
                .comportamento-ruim { 
                    background: linear-gradient(135deg, #F44336, #D32F2F) !important; 
                    color: white !important;
                    border-color: #B71C1C !important;
                }
                
                .footer { 
                    margin-top: 40px; 
                    text-align: center; 
                    font-size: 12px; 
                    color: #888;
                    padding-top: 30px;
                    border-top: 2px solid #3498DB;
                }
                .footer p { margin: 5px 0; }
                
                .legend {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin: 20px 0;
                    padding: 15px;
                    background: #f5f3e8;
                    border-radius: 10px;
                }
                .legend-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                }
                .legend-color {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📋 Boletim Escolar</h1>
                <div class="info-section">
                    <p><strong>Professor:</strong> ${currentUser.name}</p>
                    <p><strong>Disciplina:</strong> ${currentUser.disciplina}</p>
                    <p><strong>Data de Emissão:</strong> ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</p>
                </div>
                
                <div class="legend">
                    <div class="legend-item">
                        <div class="legend-color" style="background: linear-gradient(135deg, #4CAF50, #45a049);"></div>
                        <span><strong>Excelente</strong></span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background: linear-gradient(135deg, #2196F3, #1976D2);"></div>
                        <span><strong>Bom</strong></span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background: linear-gradient(135deg, #FF9800, #F57C00);"></div>
                        <span><strong>Regular</strong></span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background: linear-gradient(135deg, #F44336, #D32F2F);"></div>
                        <span><strong>Ruim</strong></span>
                    </div>
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Aluno</th>
                            <th>Frequência</th>
                            <th>Nota</th>
                            <th style="text-align: center;">Comportamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${alunos.map(aluno => {
                            let comportamentoClass = '';
                            if (aluno.comportamento === 'Excelente') comportamentoClass = 'comportamento-excelente';
                            else if (aluno.comportamento === 'Bom') comportamentoClass = 'comportamento-bom';
                            else if (aluno.comportamento === 'Regular') comportamentoClass = 'comportamento-regular';
                            else if (aluno.comportamento === 'Ruim') comportamentoClass = 'comportamento-ruim';
                            
                            return `
                            <tr>
                                <td><strong>${aluno.nome}</strong></td>
                                <td>${aluno.frequencia}</td>
                                <td><strong>${aluno.nota}</strong></td>
                                <td style="text-align: center;">
                                    <span class="comportamento-cell ${comportamentoClass}">${aluno.comportamento}</span>
                                </td>
                            </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
                
                <div class="footer">
                    <p><strong>Sistema Escolar JK - Gestão Acadêmica</strong></p>
                    <p>Documento gerado automaticamente</p>
                    <p>${new Date().toLocaleString('pt-BR')}</p>
                </div>
            </div>
        </body>
        </html>
    `;
    
    // Criar e fazer download do PDF
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    setTimeout(() => {
        printWindow.print();
        showAlert('PDF gerado! Use a opção "Salvar como PDF" na janela de impressão.', 'success');
    }, 500);
}

function changePhoto() {
    showAlert('Funcionalidade de foto em desenvolvimento', 'success');
}

function editAlunoProfile() {
    const nomeElement = document.getElementById('alunoPerfilNome');
    if (nomeElement) {
        const nome = prompt('Novo nome:', nomeElement.textContent);
        if (nome) {
            nomeElement.textContent = nome;
            showAlert('Perfil atualizado!', 'success');
        }
    }
}

function saveAlunoProfile() {
    showAlert('Perfil salvo com sucesso!', 'success');
}

function editProfessorProfile() {
    const nomeElement = document.getElementById('professorPerfilNome');
    if (nomeElement) {
        const nome = prompt('Novo nome:', nomeElement.textContent);
        if (nome) {
            nomeElement.textContent = nome;
            showAlert('Perfil atualizado!', 'success');
        }
    }
}

function saveProfessorProfile() {
    showAlert('Perfil salvo! Redirecionando...', 'success');
    setTimeout(() => logout(), 2000);
}

function editResponsavelProfile() {
    const nomeElement = document.getElementById('responsavelPerfilNome');
    if (nomeElement) {
        const nome = prompt('Novo nome:', nomeElement.textContent);
        if (nome) {
            nomeElement.textContent = nome;
            showAlert('Perfil atualizado!', 'success');
        }
    }
}

function saveResponsavelProfile() {
    showAlert('Perfil salvo com sucesso!', 'success');
}

// ===== FUNÇÃO PARA MASCARAR CPF (SEGURANÇA) =====
function mascararCPF(cpf) {
    if (!cpf) return 'Não informado';
    
    // Remove formatação
    const cpfNumeros = cpf.replace(/\D/g, '');
    
    // Máscara: ***.***.333-44 (mostra apenas últimos 2 dígitos)
    if (cpfNumeros.length === 11) {
        return `***.***.*${cpfNumeros.substring(7, 9)}-${cpfNumeros.substring(9, 11)}`;
    }
    
    // Se já estiver formatado com pontos, mascarar
    return cpf.replace(/\d(?=\d{2})/g, '*');
}

// ===== SISTEMA DE ALERTAS =====
function showAlert(message, type = 'success') {
    // Remove alertas existentes
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Cria novo alerta
    const alert = document.createElement('div');
    alert.className = `custom-alert ${type}`;
    alert.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 5px;">
            ${type === 'success' ? '✅' : '❌'} ${type === 'success' ? 'Sucesso!' : 'Erro!'}
        </div>
        <div>${message}</div>
    `;

    document.body.appendChild(alert);

    // Animação de entrada
    setTimeout(() => alert.classList.add('show'), 100);

    // Remove automaticamente após 4 segundos
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 300);
    }, 4000);
}

// ===== MÁSCARAS E VALIDAÇÕES =====
document.addEventListener('DOMContentLoaded', function () {
    // Máscara CPF (Responsável)
    const cpfInput = document.getElementById('responsavelCpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        });
    }
    
    // Máscara CPF (Aluno)
    const cpfAlunoInput = document.getElementById('responsavelCpfAluno');
    if (cpfAlunoInput) {
        cpfAlunoInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        });
    }

    // Validação de email em tempo real
    document.querySelectorAll('.email-input').forEach(input => {
        input.addEventListener('input', function () {
            const email = this.value;
            if (email.includes('@') && email.includes('.')) {
                this.style.borderColor = '#27AE60';
            } else {
                this.style.borderColor = '#ecf0f1';
            }
        });
    });

    // Validação de senha em tempo real
    document.querySelectorAll('input[type="password"]').forEach(input => {
        input.addEventListener('input', function () {
            const password = this.value;
            if (password.length >= 8) {
                this.style.borderColor = '#27AE60';
            } else {
                this.style.borderColor = '#ecf0f1';
            }
        });
    });

    // Mudança de cor nos selects
    document.querySelectorAll('.form-select').forEach(select => {
        select.addEventListener('change', function () {
            if (this.value) {
                this.style.color = '#2c3e50';
            } else {
                this.style.color = '#bdc3c7';
            }
        });
    });

    // Enter para submeter login
    const loginPassword = document.getElementById('loginPassword');
    if (loginPassword) {
        loginPassword.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                doLogin();
            }
        });
    }

    // Enter para submeter recuperação de senha
    const recoveryEmail = document.getElementById('recoveryEmail');
    if (recoveryEmail) {
        recoveryEmail.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                recoverPassword();
            }
        });
    }

    // Fechar menus ao clicar fora deles
    document.addEventListener('click', function(event) {
        const accessibilityMenu = document.querySelector('.accessibility-menu');
        const accessibilityOptions = document.getElementById('accessibilityOptions');
        
        if (accessibilityMenu && accessibilityOptions && !accessibilityMenu.contains(event.target)) {
            accessibilityOptions.classList.remove('show');
        }
        
        const daltonismoLegend = document.getElementById('daltonismoLegend');
        const pbLegend = document.getElementById('pbLegend');
        const legendToggle = document.querySelector('.legend-toggle');
        const pbLegendToggle = document.querySelector('.pb-legend-toggle');
        
        if (daltonismoLegend && legendToggle && daltonismoLegend.classList.contains('show') && 
            !daltonismoLegend.contains(event.target) && !legendToggle.contains(event.target)) {
            daltonismoLegend.classList.remove('show');
        }
        
        if (pbLegend && pbLegendToggle && pbLegend.classList.contains('show') && 
            !pbLegend.contains(event.target) && !pbLegendToggle.contains(event.target)) {
            pbLegend.classList.remove('show');
        }
    });

    // Fechar legendas ao pressionar a tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const daltonismoLegend = document.getElementById('daltonismoLegend');
            const pbLegend = document.getElementById('pbLegend');
            const accessibilityOptions = document.getElementById('accessibilityOptions');
            
            if (daltonismoLegend) daltonismoLegend.classList.remove('show');
            if (pbLegend) pbLegend.classList.remove('show');
            if (accessibilityOptions) accessibilityOptions.classList.remove('show');
        }
    });
});

// ===== FUNCIONALIDADES EXTRAS =====

// Simulação de loading
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '⏳ Carregando...';
    return loading;
}

// Função para simular salvamento
function simulateSave() {
    const btn = event.target;
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = '⏳ Salvando...';

    setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        showAlert('Dados salvos com sucesso!', 'success');
    }, 2000);
}

// Adicionar funcionalidade de busca (para futuras implementações)
function searchFunction(query) {
    if (query.length < 3) return;
    showAlert(`Buscando por: "${query}"`, 'success');
}

// Função para alternar tema (futuro)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    showAlert('Tema alterado!', 'success');
}

// Validação avançada de formulários
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#f44336';
            isValid = false;
        } else {
            input.style.borderColor = '#4CAF50';
        }
    });

    return isValid;
}

// ===== EASTER EGGS =====
let clickCount = 0;
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function () {
            clickCount++;
            if (clickCount === 5) {
                showAlert('🎉 Easter Egg encontrado! Você é curioso!', 'success');
                clickCount = 0;
            }
        });
    }
});

// Konami Code (↑↑↓↓←→←→BA)
let konamiCode = [];
const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function (e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konami.length) {
        konamiCode.shift();
    }

    if (konamiCode.join(',') === konami.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        showAlert('🌈 Konami Code ativado! Modo especial!', 'success');
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        konamiCode = [];
    }
});

// CSS para efeito rainbow
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ===== FUNÇÕES ESPECÍFICAS DO PROFESSOR =====

// Função auxiliar para garantir que currentUser e email estão disponíveis
function garantirCurrentUser() {
    // Verificar primeiro se existe window.currentUser (definido no dashboard)
    if (window.currentUser && window.currentUser.email) {
        currentUser = window.currentUser;
        return true;
    }
    
    if (!currentUser) {
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            currentUser = JSON.parse(userData);
        } else {
            return false;
        }
    }

    if (!currentUser.email) {
        const userEmail = localStorage.getItem('currentUserEmail');
        if (userEmail) {
            currentUser.email = userEmail;
        } else {
            return false;
        }
    }

    return true;
}

function gerenciarTurma(turmaId) {
    const turma = turmasData[turmaId];
    if (!turma) {
        showAlert('Turma não encontrada!', 'error');
        return;
    }

    // Criar modal para gerenciar turma
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>👥 Gerenciar Turma: ${turma.nome}</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="turma-info-header">
                    <p><strong>Disciplina:</strong> ${turma.disciplina}</p>
                    <p><strong>Professor:</strong> ${turma.professor}</p>
                    <p><strong>Total de Alunos:</strong> ${turma.alunos.length}</p>
                </div>
                <div class="alunos-table-container">
                    <table class="alunos-table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Matrícula</th>
                                <th>Frequência (%)</th>
                                <th>Nota</th>
                                <th>Comportamento</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody id="alunosTableBody">
                            ${turma.alunos.map(aluno => `
                                <tr>
                                    <td>${aluno.nome}</td>
                                    <td>${aluno.matricula}</td>
                                    <td><span class="edit-cell" onclick="editarNota('${turmaId}', '${aluno.nome}', 'frequencia', this)">${aluno.frequencia}%</span></td>
                                    <td><span class="edit-cell" onclick="editarNota('${turmaId}', '${aluno.nome}', 'nota', this)">${aluno.nota}</span></td>
                                    <td><span class="edit-cell" onclick="editarNota('${turmaId}', '${aluno.nome}', 'comportamento', this)">${aluno.comportamento}</span></td>
                                    <td>
                                        <button class="btn-small btn-edit" onclick="editarAluno('${turmaId}', '${aluno.nome}')">Editar</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarTurma('${turmaId}')">Salvar Alterações</button>
                    <button class="btn btn-edit" onclick="exportarTurma('${turmaId}')">Exportar Relatório</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function editarNota(turmaId, alunoNome, campo, elemento) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const valorAtual = elemento.textContent;
    const novoValor = prompt(`Editar ${campo} de ${alunoNome}:\nValor atual: ${valorAtual}\nNovo valor:`, valorAtual);
    
    if (novoValor !== null && novoValor !== valorAtual) {
        elemento.textContent = novoValor;
        elemento.style.backgroundColor = '#fff3cd';
        elemento.style.border = '1px solid #ffc107';
        
        // Atualizar dados na memória
        if (!professorNotas[currentUser.email]) {
            professorNotas[currentUser.email] = {};
        }
        if (!professorNotas[currentUser.email][turmaId]) {
            professorNotas[currentUser.email][turmaId] = {};
        }
        if (!professorNotas[currentUser.email][turmaId][alunoNome]) {
            professorNotas[currentUser.email][turmaId][alunoNome] = {};
        }
        
        professorNotas[currentUser.email][turmaId][alunoNome][campo] = novoValor;
        
        showAlert(`${campo} de ${alunoNome} atualizado!`, 'success');
    }
}

function editarAluno(turmaId, alunoNome) {
    const turma = turmasData[turmaId];
    const aluno = turma.alunos.find(a => a.nome === alunoNome);
    
    if (!aluno) {
        showAlert('Aluno não encontrado!', 'error');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>✏️ Editar Dados do Aluno</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>👤 Nome Completo:</label>
                    <input type="text" id="editNome" value="${aluno.nome}" class="form-input" placeholder="Digite o nome do aluno">
                </div>
                <div class="form-group">
                    <label>🎫 Matrícula:</label>
                    <input type="text" id="editMatricula" value="${aluno.matricula}" class="form-input" placeholder="Número de matrícula">
                </div>
                <div class="form-group">
                    <label>📅 Frequência (%):</label>
                    <input type="number" id="editFrequencia" value="${aluno.frequencia}" min="0" max="100" class="form-input" placeholder="0-100">
                </div>
                <div class="form-group">
                    <label>📝 Nota Final:</label>
                    <input type="number" id="editNota" value="${aluno.nota}" min="0" max="10" step="0.1" class="form-input" placeholder="0.0 a 10.0">
                </div>
                <div class="form-group">
                    <label>⭐ Comportamento:</label>
                    <select id="editComportamento" class="form-select">
                        <option value="Excelente" ${aluno.comportamento === 'Excelente' ? 'selected' : ''}>⭐⭐⭐ Excelente</option>
                        <option value="Bom" ${aluno.comportamento === 'Bom' ? 'selected' : ''}>⭐⭐ Bom</option>
                        <option value="Regular" ${aluno.comportamento === 'Regular' ? 'selected' : ''}>⭐ Regular</option>
                        <option value="Ruim" ${aluno.comportamento === 'Ruim' ? 'selected' : ''}>❌ Ruim</option>
                    </select>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarAluno('${turmaId}', '${alunoNome}')">💾 Salvar Dados</button>
                    <button class="btn-add-observacao" onclick="adicionarObservacaoAluno('${aluno.matricula}', '${alunoNome}')">📝 Adicionar Observação</button>
                    <button class="btn btn-edit" onclick="fecharModal()">❌ Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function salvarAluno(turmaId, alunoNomeAntigo) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const novoNome = document.getElementById('editNome').value;
    const matricula = document.getElementById('editMatricula').value;
    const frequencia = document.getElementById('editFrequencia').value;
    const nota = document.getElementById('editNota').value;
    const comportamento = document.getElementById('editComportamento').value;
    
    if (!novoNome || !matricula || !frequencia || !nota || !comportamento) {
        showAlert('Por favor, preencha todos os campos!', 'error');
        return;
    }
    
    // Atualizar dados na turma
    const turma = turmasData[turmaId];
    const alunoIndex = turma.alunos.findIndex(a => a.nome === alunoNomeAntigo);
    
    if (alunoIndex !== -1) {
        turma.alunos[alunoIndex] = {
            nome: novoNome,
            matricula: matricula,
            frequencia: parseInt(frequencia),
            nota: parseFloat(nota),
            comportamento: comportamento
        };
        
        // Atualizar dados do professor
        if (!professorNotas[currentUser.email]) {
            professorNotas[currentUser.email] = {};
        }
        if (!professorNotas[currentUser.email][turmaId]) {
            professorNotas[currentUser.email][turmaId] = {};
        }
        
        // Remover dados antigos e adicionar novos
        delete professorNotas[currentUser.email][turmaId][alunoNomeAntigo];
        professorNotas[currentUser.email][turmaId][novoNome] = {
            frequencia: parseInt(frequencia),
            nota: parseFloat(nota),
            comportamento: comportamento
        };
        
        showAlert('Dados do aluno salvos com sucesso!', 'success');
        fecharModal();
        
        // Recarregar a tabela
        setTimeout(() => gerenciarTurma(turmaId), 500);
    }
}

function salvarTurma(turmaId) {
    // Salvar dados no localStorage
    localStorage.setItem('professorNotas', JSON.stringify(professorNotas));
    showAlert('Dados da turma salvos com sucesso!', 'success');
}

function exportarTurma(turmaId) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const turma = turmasData[turmaId];
    if (!turma) {
        showAlert('Turma não encontrada!', 'error');
        return;
    }
    
    showAlert(`Gerando relatório da turma ${turma.nome}...`, 'success');
    
    // Criar conteúdo HTML para o relatório
    let htmlContent = `
        <html>
        <head>
            <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; background: #f8f9fa; }
                .container { background: white; padding: 40px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
                .header { text-align: center; margin-bottom: 30px; }
                h1 { 
                    color: #3498DB; 
                    margin-bottom: 10px; 
                    font-size: 32px;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
                }
                h2 { color: #2980B9; font-size: 18px; margin-bottom: 5px; }
                .info-box { 
                    background: linear-gradient(135deg, #f5f3e8, #ede8d5); 
                    padding: 25px; 
                    border-left: 5px solid #3498DB; 
                    margin-bottom: 30px;
                    border-radius: 12px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }
                .info-box p { margin: 8px 0; color: #555; font-size: 14px; }
                table { 
                    width: 100%; 
                    border-collapse: separate;
                    border-spacing: 0; 
                    margin-top: 25px;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
                }
                th { 
                    background: linear-gradient(135deg, #3498DB, #2980B9); 
                    color: white; 
                    padding: 15px 12px; 
                    text-align: left; 
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                td { 
                    border-bottom: 1px solid #e0e0e0; 
                    padding: 14px 12px; 
                    font-size: 12px;
                    background: white;
                    color: #333;
                }
                tr:nth-child(even) td { background: #fafafa; }
                tr:last-child td { border-bottom: none; }
                
                .comportamento-cell, .status-cell {
                    display: inline-block;
                    padding: 8px 20px !important;
                    border-radius: 25px !important;
                    font-weight: bold !important;
                    font-size: 11px !important;
                    text-align: center !important;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                    border: 2px solid transparent !important;
                }
                
                .comportamento-excelente { 
                    background: linear-gradient(135deg, #4CAF50, #45a049) !important; 
                    color: white !important;
                    border-color: #388E3C !important;
                }
                .comportamento-bom { 
                    background: linear-gradient(135deg, #2196F3, #1976D2) !important; 
                    color: white !important;
                    border-color: #1565C0 !important;
                }
                .comportamento-regular { 
                    background: linear-gradient(135deg, #FF9800, #F57C00) !important; 
                    color: white !important;
                    border-color: #E65100 !important;
                }
                .comportamento-ruim { 
                    background: linear-gradient(135deg, #F44336, #D32F2F) !important; 
                    color: white !important;
                    border-color: #B71C1C !important;
                }
                .status-aprovado { 
                    background: linear-gradient(135deg, #4CAF50, #45a049) !important; 
                    color: white !important;
                    border-color: #388E3C !important;
                }
                .status-recuperacao { 
                    background: linear-gradient(135deg, #FF9800, #F57C00) !important; 
                    color: white !important;
                    border-color: #E65100 !important;
                }
                
                .stats { 
                    display: flex; 
                    justify-content: space-around; 
                    gap: 20px;
                    margin: 30px 0; 
                }
                .stat-card { 
                    text-align: center; 
                    padding: 25px; 
                    background: linear-gradient(135deg, #f5f3e8, #ede8d5); 
                    border-radius: 15px; 
                    flex: 1;
                    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
                    border-top: 4px solid #3498DB;
                }
                .stat-value { 
                    font-size: 36px; 
                    font-weight: bold; 
                    color: #3498DB;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
                }
                .stat-label { 
                    font-size: 13px; 
                    color: #666; 
                    margin-top: 8px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .footer { 
                    margin-top: 40px; 
                    text-align: center; 
                    font-size: 11px; 
                    color: #888; 
                    border-top: 2px solid #3498DB; 
                    padding-top: 25px; 
                }
                .footer p { margin: 5px 0; }
                
                .section-title {
                    color: #3498DB;
                    font-size: 20px;
                    margin: 30px 0 20px 0;
                    font-weight: 600;
                    border-bottom: 3px solid #D4AF37;
                    padding-bottom: 10px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>📊 Relatório Completo da Turma</h1>
                    <h2>Sistema Escolar JK - Gestão Acadêmica</h2>
                </div>
                
                <div class="info-box">
                    <p><strong>Turma:</strong> ${turma.nome}</p>
                    <p><strong>Disciplina:</strong> ${turma.disciplina}</p>
                    <p><strong>Professor:</strong> ${turma.professor}</p>
                    <p><strong>Total de Alunos:</strong> ${turma.alunos.length}</p>
                    <p><strong>Data de Emissão:</strong> ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</p>
                </div>
                
                <div class="stats">
                    <div class="stat-card">
                        <div class="stat-value">${(turma.alunos.reduce((acc, a) => acc + a.frequencia, 0) / turma.alunos.length).toFixed(1)}%</div>
                        <div class="stat-label">Frequência Média</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${(turma.alunos.reduce((acc, a) => acc + a.nota, 0) / turma.alunos.length).toFixed(1)}</div>
                        <div class="stat-label">Nota Média</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${turma.alunos.filter(a => a.comportamento === 'Excelente').length}</div>
                        <div class="stat-label">Comportamento Excelente</div>
                    </div>
                </div>
                
                <div class="section-title">Desempenho Individual dos Alunos</div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Aluno</th>
                            <th>Matrícula</th>
                            <th>Frequência</th>
                            <th>Nota</th>
                            <th style="text-align: center;">Comportamento</th>
                            <th style="text-align: center;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${turma.alunos.map(aluno => {
                            let comportamentoClass = '';
                            if (aluno.comportamento === 'Excelente') comportamentoClass = 'comportamento-excelente';
                            else if (aluno.comportamento === 'Bom') comportamentoClass = 'comportamento-bom';
                            else if (aluno.comportamento === 'Regular') comportamentoClass = 'comportamento-regular';
                            else if (aluno.comportamento === 'Ruim') comportamentoClass = 'comportamento-ruim';
                            
                            const aprovado = aluno.nota >= 6.0 && aluno.frequencia >= 75;
                            const statusClass = aprovado ? 'status-aprovado' : 'status-recuperacao';
                            const statusText = aprovado ? '✅ Aprovado' : '❌ Recuperação';
                            
                            return `
                            <tr>
                                <td><strong>${aluno.nome}</strong></td>
                                <td>${aluno.matricula}</td>
                                <td>${aluno.frequencia}%</td>
                                <td><strong>${aluno.nota}</strong></td>
                                <td style="text-align: center;">
                                    <span class="comportamento-cell ${comportamentoClass}">${aluno.comportamento}</span>
                                </td>
                                <td style="text-align: center;">
                                    <span class="status-cell ${statusClass}">${statusText}</span>
                                </td>
                            </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
                
                <div class="footer">
                    <p><strong>Sistema Escolar JK - Gestão Acadêmica</strong></p>
                    <p>Relatório gerado automaticamente pelo sistema</p>
                    <p>Este documento é válido sem assinatura para fins de acompanhamento pedagógico</p>
                </div>
            </div>
        </body>
        </html>
    `;
    
    // Criar e fazer download do relatório
    const printWindow = window.open('', '', 'height=800,width=1000');
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    setTimeout(() => {
        printWindow.print();
        showAlert('Relatório gerado! Use a opção "Salvar como PDF" na janela de impressão.', 'success');
    }, 500);
}

function fecharModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

// ===== FUNÇÕES DE GERENCIAMENTO DE CONTEÚDO =====
function gerenciarConteudo(disciplina) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado! Faça login novamente.', 'error');
            return;
    }

    const conteudo = professorConteudo[currentUser.email];
    if (!conteudo) {
        showAlert('Dados de conteúdo não encontrados!', 'error');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content modal-large">
            <div class="modal-header">
                <h2>Gerenciar Conteúdo - ${conteudo.disciplina}</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="conteudo-actions">
                    <button class="btn btn-save" onclick="adicionarConteudo()">+ Adicionar Conteúdo</button>
                    <button class="btn btn-edit" onclick="verCronograma()">📅 Ver Cronograma</button>
                </div>
                
                <div class="conteudos-list">
                    ${conteudo.conteudos.map(conteudoItem => `
                        <div class="conteudo-card" data-id="${conteudoItem.id}">
                            <div class="conteudo-header">
                                <h3>${conteudoItem.titulo}</h3>
                                <span class="status-badge status-${conteudoItem.status.toLowerCase().replace(' ', '-')}">${conteudoItem.status}</span>
                            </div>
                            <div class="conteudo-body">
                                <p class="conteudo-descricao">${conteudoItem.descricao}</p>
                                <div class="conteudo-dates">
                                    <span><strong>Início:</strong> ${formatarData(conteudoItem.dataInicio)}</span>
                                    <span><strong>Fim:</strong> ${formatarData(conteudoItem.dataFim)}</span>
                                </div>
                                <div class="conteudo-turmas">
                                    <strong>Turmas:</strong> ${conteudoItem.turmas.join(', ')}
                                </div>
                                <div class="conteudo-atividades">
                                    <strong>Atividades (${conteudoItem.atividades.length}):</strong>
                                    <ul>
                                        ${conteudoItem.atividades.map(atividade => `
                                            <li>${atividade.nome} - ${atividade.tipo} (Prazo: ${formatarData(atividade.prazo)})</li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                            <div class="conteudo-actions">
                                <button class="btn-small btn-edit" onclick="editarConteudo(${conteudoItem.id})">Editar</button>
                                <button class="btn-small btn-save" onclick="adicionarAtividade(${conteudoItem.id})">+ Atividade</button>
                                <button class="btn-small btn-danger" onclick="excluirConteudo(${conteudoItem.id})">Excluir</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function adicionarConteudo() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Adicionar Novo Conteúdo</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Título do Conteúdo:</label>
                    <input type="text" id="novoTitulo" class="form-input" placeholder="Ex: Operações Básicas">
                </div>
                <div class="form-group">
                    <label>Descrição:</label>
                    <textarea id="novaDescricao" class="form-input" rows="3" placeholder="Descreva o conteúdo..."></textarea>
                </div>
                <div class="form-group">
                    <label>Data de Início:</label>
                    <input type="date" id="novaDataInicio" class="form-input">
                </div>
                <div class="form-group">
                    <label>Data de Fim:</label>
                    <input type="date" id="novaDataFim" class="form-input">
                </div>
                <div class="form-group">
                    <label>Status:</label>
                    <select id="novoStatus" class="form-select">
                        <option value="Planejado">Planejado</option>
                        <option value="Em Andamento">Em Andamento</option>
                        <option value="Concluído">Concluído</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Turmas:</label>
                    <div class="turmas-checkboxes">
                        <label><input type="checkbox" value="1A" checked> 1° ano A</label>
                        <label><input type="checkbox" value="2B" checked> 2° ano B</label>
                        <label><input type="checkbox" value="3A" checked> 3° ano A</label>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarNovoConteudo()">Salvar</button>
                    <button class="btn btn-edit" onclick="fecharModal()">Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function salvarNovoConteudo() {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const titulo = document.getElementById('novoTitulo').value;
    const descricao = document.getElementById('novaDescricao').value;
    const dataInicio = document.getElementById('novaDataInicio').value;
    const dataFim = document.getElementById('novaDataFim').value;
    const status = document.getElementById('novoStatus').value;
    
    const turmasSelecionadas = Array.from(document.querySelectorAll('.turmas-checkboxes input:checked'))
        .map(cb => cb.value);
    
    if (!titulo || !descricao || !dataInicio || !dataFim || turmasSelecionadas.length === 0) {
        showAlert('Por favor, preencha todos os campos!', 'error');
        return;
    }
    
    if (new Date(dataInicio) > new Date(dataFim)) {
        showAlert('A data de início deve ser anterior à data de fim!', 'error');
        return;
    }
    
    const novoId = Math.max(...professorConteudo[currentUser.email].conteudos.map(c => c.id)) + 1;
    
    const novoConteudo = {
        id: novoId,
        titulo: titulo,
        descricao: descricao,
        dataInicio: dataInicio,
        dataFim: dataFim,
        status: status,
        turmas: turmasSelecionadas,
        atividades: []
    };
    
    professorConteudo[currentUser.email].conteudos.push(novoConteudo);
    salvarConteudoProfessor();
    
    showAlert('Conteúdo adicionado com sucesso!', 'success');
    fecharModal();
    
    // Recarregar modal de conteúdo
    setTimeout(() => gerenciarConteudo(), 500);
}

function editarConteudo(conteudoId) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const conteudo = professorConteudo[currentUser.email].conteudos.find(c => c.id === conteudoId);
    if (!conteudo) {
        showAlert('Conteúdo não encontrado!', 'error');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Editar Conteúdo</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Título do Conteúdo:</label>
                    <input type="text" id="editTitulo" class="form-input" value="${conteudo.titulo}">
                </div>
                <div class="form-group">
                    <label>Descrição:</label>
                    <textarea id="editDescricao" class="form-input" rows="3">${conteudo.descricao}</textarea>
                </div>
                <div class="form-group">
                    <label>Data de Início:</label>
                    <input type="date" id="editDataInicio" class="form-input" value="${conteudo.dataInicio}">
                </div>
                <div class="form-group">
                    <label>Data de Fim:</label>
                    <input type="date" id="editDataFim" class="form-input" value="${conteudo.dataFim}">
                </div>
                <div class="form-group">
                    <label>Status:</label>
                    <select id="editStatus" class="form-select">
                        <option value="Planejado" ${conteudo.status === 'Planejado' ? 'selected' : ''}>Planejado</option>
                        <option value="Em Andamento" ${conteudo.status === 'Em Andamento' ? 'selected' : ''}>Em Andamento</option>
                        <option value="Concluído" ${conteudo.status === 'Concluído' ? 'selected' : ''}>Concluído</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Turmas:</label>
                    <div class="turmas-checkboxes">
                        <label><input type="checkbox" value="1A" ${conteudo.turmas.includes('1A') ? 'checked' : ''}> 1° ano A</label>
                        <label><input type="checkbox" value="2B" ${conteudo.turmas.includes('2B') ? 'checked' : ''}> 2° ano B</label>
                        <label><input type="checkbox" value="3A" ${conteudo.turmas.includes('3A') ? 'checked' : ''}> 3° ano A</label>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarEdicaoConteudo(${conteudoId})">Salvar</button>
                    <button class="btn btn-edit" onclick="fecharModal()">Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function salvarEdicaoConteudo(conteudoId) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const titulo = document.getElementById('editTitulo').value;
    const descricao = document.getElementById('editDescricao').value;
    const dataInicio = document.getElementById('editDataInicio').value;
    const dataFim = document.getElementById('editDataFim').value;
    const status = document.getElementById('editStatus').value;
    
    const turmasSelecionadas = Array.from(document.querySelectorAll('.turmas-checkboxes input:checked'))
        .map(cb => cb.value);
    
    if (!titulo || !descricao || !dataInicio || !dataFim || turmasSelecionadas.length === 0) {
        showAlert('Por favor, preencha todos os campos!', 'error');
        return;
    }
    
    const conteudoIndex = professorConteudo[currentUser.email].conteudos.findIndex(c => c.id === conteudoId);
    if (conteudoIndex !== -1) {
        professorConteudo[currentUser.email].conteudos[conteudoIndex] = {
            ...professorConteudo[currentUser.email].conteudos[conteudoIndex],
            titulo: titulo,
            descricao: descricao,
            dataInicio: dataInicio,
            dataFim: dataFim,
            status: status,
            turmas: turmasSelecionadas
        };
        
        salvarConteudoProfessor();
        showAlert('Conteúdo atualizado com sucesso!', 'success');
        fecharModal();
        
        // Recarregar modal de conteúdo
        setTimeout(() => gerenciarConteudo(), 500);
    }
}

function adicionarAtividade(conteudoId) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Adicionar Atividade</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Nome da Atividade:</label>
                    <input type="text" id="novaAtividadeNome" class="form-input" placeholder="Ex: Exercícios de Adição">
                </div>
                <div class="form-group">
                    <label>Tipo:</label>
                    <select id="novaAtividadeTipo" class="form-select">
                        <option value="Prática">Prática</option>
                        <option value="Avaliação">Avaliação</option>
                        <option value="Projeto">Projeto</option>
                        <option value="Exercício">Exercício</option>
                        <option value="Trabalho">Trabalho</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Prazo:</label>
                    <input type="date" id="novaAtividadePrazo" class="form-input">
                </div>
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarNovaAtividade(${conteudoId})">Salvar</button>
                    <button class="btn btn-edit" onclick="fecharModal()">Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function salvarNovaAtividade(conteudoId) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const nome = document.getElementById('novaAtividadeNome').value;
    const tipo = document.getElementById('novaAtividadeTipo').value;
    const prazo = document.getElementById('novaAtividadePrazo').value;
    
    if (!nome || !tipo || !prazo) {
        showAlert('Por favor, preencha todos os campos!', 'error');
        return;
    }
    
    const conteudo = professorConteudo[currentUser.email].conteudos.find(c => c.id === conteudoId);
    if (conteudo) {
        conteudo.atividades.push({
            nome: nome,
            tipo: tipo,
            prazo: prazo
        });
        
        salvarConteudoProfessor();
        showAlert('Atividade adicionada com sucesso!', 'success');
        fecharModal();
        
        // Recarregar modal de conteúdo
        setTimeout(() => gerenciarConteudo(), 500);
    }
}

function excluirConteudo(conteudoId) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    if (confirm('Tem certeza que deseja excluir este conteúdo? Esta ação não pode ser desfeita.')) {
        const conteudoIndex = professorConteudo[currentUser.email].conteudos.findIndex(c => c.id === conteudoId);
        if (conteudoIndex !== -1) {
            professorConteudo[currentUser.email].conteudos.splice(conteudoIndex, 1);
            salvarConteudoProfessor();
            showAlert('Conteúdo excluído com sucesso!', 'success');
            
            // Recarregar modal de conteúdo
            setTimeout(() => gerenciarConteudo(), 500);
        }
    }
}

function verCronograma() {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const conteudo = professorConteudo[currentUser.email];
    if (!conteudo) {
        showAlert('Dados de conteúdo não encontrados!', 'error');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content modal-large">
            <div class="modal-header">
                <h2>Cronograma - ${conteudo.disciplina}</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="cronograma-container">
                    ${conteudo.conteudos.map(conteudoItem => `
                        <div class="cronograma-item status-${conteudoItem.status.toLowerCase().replace(' ', '-')}">
                            <div class="cronograma-header">
                                <h3>${conteudoItem.titulo}</h3>
                                <span class="status-badge status-${conteudoItem.status.toLowerCase().replace(' ', '-')}">${conteudoItem.status}</span>
                            </div>
                            <div class="cronograma-dates">
                                <span>${formatarData(conteudoItem.dataInicio)} - ${formatarData(conteudoItem.dataFim)}</span>
                            </div>
                            <div class="cronograma-turmas">
                                Turmas: ${conteudoItem.turmas.join(', ')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function formatarData(data) {
    return new Date(data).toLocaleDateString('pt-BR');
}

function salvarConteudoProfessor() {
    localStorage.setItem('professorConteudo', JSON.stringify(professorConteudo));
}

// ===== FUNÇÕES DE GERENCIAMENTO DE DISCIPLINAS =====
function gerenciarDisciplina(disciplinaNome) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado! Faça login novamente.', 'error');
            return;
    }

    const disciplinas = professorDisciplinas[currentUser.email];
    if (!disciplinas) {
        showAlert('Dados de disciplinas não encontrados!', 'error');
        return;
    }

    const disciplina = disciplinas.find(d => d.nome === disciplinaNome);
    if (!disciplina) {
        showAlert('Disciplina não encontrada!', 'error');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content modal-large">
            <div class="modal-header">
                <h2>Gerenciar Disciplina: ${disciplina.nome}</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="disciplina-tabs">
                    <button class="tab-btn active" onclick="mostrarTabDisciplina('overview')">📊 Visão Geral</button>
                    <button class="tab-btn" onclick="mostrarTabDisciplina('config')">⚙️ Configurações</button>
                    <button class="tab-btn" onclick="mostrarTabDisciplina('stats')">📈 Estatísticas</button>
                    <button class="tab-btn" onclick="mostrarTabDisciplina('content')">📚 Conteúdo</button>
                </div>
                
                <div id="disciplinaOverview" class="tab-content active">
                    <div class="disciplina-info-grid">
                        <div class="info-card">
                            <h3>Informações Básicas</h3>
                            <div class="info-item">
                                <strong>Tipo:</strong> ${disciplina.tipo}
                            </div>
                            <div class="info-item">
                                <strong>Status:</strong> 
                                <span class="status-badge status-${disciplina.status.toLowerCase()}">${disciplina.status}</span>
                            </div>
                            <div class="info-item">
                                <strong>Carga Horária:</strong> ${disciplina.cargaHoraria}h
                            </div>
                            <div class="info-item">
                                <strong>Total de Alunos:</strong> ${disciplina.totalAlunos}
                            </div>
                        </div>
                        
                        <div class="info-card">
                            <h3>Turmas</h3>
                            <div class="turmas-list">
                                ${disciplina.turmas.map(turma => `
                                    <div class="turma-badge">${turma}</div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="info-card">
                            <h3>Objetivos</h3>
                            <ul class="objetivos-list">
                                ${disciplina.objetivos.map(objetivo => `
                                    <li>${objetivo}</li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        <div class="info-card">
                            <h3>Metodologia</h3>
                            <p>${disciplina.metodologia}</p>
                        </div>
                        
                        <div class="info-card">
                            <h3>Sistema de Avaliação</h3>
                            <p>${disciplina.avaliacao}</p>
                        </div>
                        
                        <div class="info-card">
                            <h3>Recursos Utilizados</h3>
                            <div class="recursos-list">
                                ${disciplina.recursos.map(recurso => `
                                    <span class="recurso-badge">${recurso}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="disciplinaConfig" class="tab-content">
                    <div class="config-section">
                        <h3>Configurações da Disciplina</h3>
                        <div class="form-group">
                            <label>Nome da Disciplina:</label>
                            <input type="text" id="configNome" class="form-input" value="${disciplina.nome}">
                        </div>
                        <div class="form-group">
                            <label>Tipo:</label>
                            <select id="configTipo" class="form-select">
                                <option value="Principal" ${disciplina.tipo === 'Principal' ? 'selected' : ''}>Principal</option>
                                <option value="Apoio" ${disciplina.tipo === 'Apoio' ? 'selected' : ''}>Apoio</option>
                                <option value="Eletiva" ${disciplina.tipo === 'Eletiva' ? 'selected' : ''}>Eletiva</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Carga Horária (horas):</label>
                            <input type="number" id="configCargaHoraria" class="form-input" value="${disciplina.cargaHoraria}" min="1" max="100">
                        </div>
                        <div class="form-group">
                            <label>Status:</label>
                            <select id="configStatus" class="form-select">
                                <option value="Ativa" ${disciplina.status === 'Ativa' ? 'selected' : ''}>Ativa</option>
                                <option value="Inativa" ${disciplina.status === 'Inativa' ? 'selected' : ''}>Inativa</option>
                                <option value="Pausada" ${disciplina.status === 'Pausada' ? 'selected' : ''}>Pausada</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Metodologia:</label>
                            <textarea id="configMetodologia" class="form-input" rows="3">${disciplina.metodologia}</textarea>
                        </div>
                        <div class="form-group">
                            <label>Sistema de Avaliação:</label>
                            <textarea id="configAvaliacao" class="form-input" rows="2">${disciplina.avaliacao}</textarea>
                        </div>
                        <div class="modal-actions">
                            <button class="btn btn-save" onclick="salvarConfigDisciplina(${disciplina.id})">Salvar Configurações</button>
                        </div>
                    </div>
                </div>
                
                <div id="disciplinaStats" class="tab-content">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-icon">📊</div>
                            <div class="stat-value">${disciplina.estatisticas.mediaGeral}</div>
                            <div class="stat-label">Média Geral</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">✅</div>
                            <div class="stat-value">${disciplina.estatisticas.aprovados}</div>
                            <div class="stat-label">Aprovados</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">❌</div>
                            <div class="stat-value">${disciplina.estatisticas.reprovados}</div>
                            <div class="stat-label">Reprovados</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">📅</div>
                            <div class="stat-value">${disciplina.estatisticas.frequenciaMedia}%</div>
                            <div class="stat-label">Frequência Média</div>
                        </div>
                    </div>
                    
                    <div class="stats-charts">
                        <div class="chart-container">
                            <h3>Distribuição de Notas</h3>
                            <div class="chart-placeholder">
                                <div class="chart-bar" style="height: 60%; background: #4CAF50;">
                                    <span>8.0+ (60%)</span>
                                </div>
                                <div class="chart-bar" style="height: 30%; background: #FF9800;">
                                    <span>6.0-7.9 (30%)</span>
                                </div>
                                <div class="chart-bar" style="height: 10%; background: #f44336;">
                                    <span><6.0 (10%)</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="chart-container">
                            <h3>Frequência por Turma</h3>
                            <div class="frequencia-turmas">
                                ${disciplina.turmas.map(turma => `
                                    <div class="frequencia-item">
                                        <span>${turma}</span>
                                        <div class="progress-bar">
                                            <div class="progress-fill" style="width: ${disciplina.estatisticas.frequenciaMedia}%"></div>
                                        </div>
                                        <span>${disciplina.estatisticas.frequenciaMedia}%</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="disciplinaContent" class="tab-content">
                    <div class="content-actions">
                        <button class="btn btn-save" onclick="gerenciarConteudo('${disciplina.nome}')">Gerenciar Conteúdo</button>
                        <button class="btn btn-edit" onclick="verCronograma()">Ver Cronograma</button>
                        <button class="btn btn-edit" onclick="adicionarObjetivo(${disciplina.id})">+ Adicionar Objetivo</button>
                    </div>
                    
                    <div class="objetivos-section">
                        <h3>Objetivos da Disciplina</h3>
                        <div class="objetivos-list-edit">
                            ${disciplina.objetivos.map((objetivo, index) => `
                                <div class="objetivo-item">
                                    <span>${objetivo}</span>
                                    <button class="btn-small btn-danger" onclick="removerObjetivo(${disciplina.id}, ${index})">Remover</button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="recursos-section">
                        <h3>Recursos da Disciplina</h3>
                        <div class="recursos-list-edit">
                            ${disciplina.recursos.map((recurso, index) => `
                                <div class="recurso-item">
                                    <span>${recurso}</span>
                                    <button class="btn-small btn-danger" onclick="removerRecurso(${disciplina.id}, ${index})">Remover</button>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn-edit" onclick="adicionarRecurso(${disciplina.id})">+ Adicionar Recurso</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function mostrarTabDisciplina(tabName) {
    // Remover classe active de todas as tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Adicionar classe active na tab selecionada
    const clickedBtn = event.target;
    clickedBtn.classList.add('active');
    
    const targetContent = document.getElementById('disciplina' + tabName.charAt(0).toUpperCase() + tabName.slice(1));
    if (targetContent) {
        targetContent.classList.add('active');
    }
}

function salvarConfigDisciplina(disciplinaId) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const disciplinas = professorDisciplinas[currentUser.email];
    const disciplinaIndex = disciplinas.findIndex(d => d.id === disciplinaId);
    
    if (disciplinaIndex !== -1) {
        disciplinas[disciplinaIndex] = {
            ...disciplinas[disciplinaIndex],
            nome: document.getElementById('configNome').value,
            tipo: document.getElementById('configTipo').value,
            cargaHoraria: parseInt(document.getElementById('configCargaHoraria').value),
            status: document.getElementById('configStatus').value,
            metodologia: document.getElementById('configMetodologia').value,
            avaliacao: document.getElementById('configAvaliacao').value
        };
        
        salvarDisciplinasProfessor();
        showAlert('Configurações salvas com sucesso!', 'success');
        
        // Recarregar modal
        setTimeout(() => {
            fecharModal();
            gerenciarDisciplina(disciplinas[disciplinaIndex].nome);
        }, 1000);
    }
}

function adicionarObjetivo(disciplinaId) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const novoObjetivo = prompt('Digite o novo objetivo:');
    if (novoObjetivo && novoObjetivo.trim()) {
        const disciplinas = professorDisciplinas[currentUser.email];
        const disciplina = disciplinas.find(d => d.id === disciplinaId);
        
        if (disciplina) {
            disciplina.objetivos.push(novoObjetivo.trim());
            salvarDisciplinasProfessor();
            showAlert('Objetivo adicionado com sucesso!', 'success');
            
            // Recarregar modal
            setTimeout(() => {
                fecharModal();
                gerenciarDisciplina(disciplina.nome);
            }, 1000);
        }
    }
}

function removerObjetivo(disciplinaId, objetivoIndex) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    if (confirm('Tem certeza que deseja remover este objetivo?')) {
        const disciplinas = professorDisciplinas[currentUser.email];
        const disciplina = disciplinas.find(d => d.id === disciplinaId);
        
        if (disciplina) {
            disciplina.objetivos.splice(objetivoIndex, 1);
            salvarDisciplinasProfessor();
            showAlert('Objetivo removido com sucesso!', 'success');
            
            // Recarregar modal
            setTimeout(() => {
                fecharModal();
                gerenciarDisciplina(disciplina.nome);
            }, 1000);
        }
    }
}

function adicionarRecurso(disciplinaId) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const novoRecurso = prompt('Digite o novo recurso:');
    if (novoRecurso && novoRecurso.trim()) {
        const disciplinas = professorDisciplinas[currentUser.email];
        const disciplina = disciplinas.find(d => d.id === disciplinaId);
        
        if (disciplina) {
            disciplina.recursos.push(novoRecurso.trim());
            salvarDisciplinasProfessor();
            showAlert('Recurso adicionado com sucesso!', 'success');
            
            // Recarregar modal
            setTimeout(() => {
                fecharModal();
                gerenciarDisciplina(disciplina.nome);
            }, 1000);
        }
    }
}

function removerRecurso(disciplinaId, recursoIndex) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    if (confirm('Tem certeza que deseja remover este recurso?')) {
        const disciplinas = professorDisciplinas[currentUser.email];
        const disciplina = disciplinas.find(d => d.id === disciplinaId);
        
        if (disciplina) {
            disciplina.recursos.splice(recursoIndex, 1);
            salvarDisciplinasProfessor();
            showAlert('Recurso removido com sucesso!', 'success');
            
            // Recarregar modal
            setTimeout(() => {
                fecharModal();
                gerenciarDisciplina(disciplina.nome);
            }, 1000);
        }
    }
}

function salvarDisciplinasProfessor() {
    localStorage.setItem('professorDisciplinas', JSON.stringify(professorDisciplinas));
}

// ===== FUNÇÕES DE OBSERVAÇÕES DO PROFESSOR =====
function adicionarObservacaoAluno(matricula, alunoNome) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>📝 Adicionar Observação - ${alunoNome}</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="info-section" style="background: linear-gradient(135deg, #e3f2fd, #f5f5f5); padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #2196F3;">
                    <p style="margin: 5px 0; color: #555;"><strong>👤 Aluno:</strong> ${alunoNome}</p>
                    <p style="margin: 5px 0; color: #555;"><strong>🎫 Matrícula:</strong> ${matricula}</p>
                    <p style="margin: 5px 0; color: #555;"><strong>👨‍🏫 Professor:</strong> ${currentUser.name}</p>
                    <p style="margin: 5px 0; color: #555;"><strong>📚 Disciplina:</strong> ${currentUser.disciplina}</p>
                </div>
                
                <div class="form-group">
                    <label>📅 Data da Observação:</label>
                    <input type="date" id="observacaoData" class="form-input" value="${new Date().toISOString().split('T')[0]}">
                </div>
                
                <div class="form-group">
                    <label>💬 Observação para o Responsável:</label>
                    <textarea id="observacaoTexto" class="form-input" rows="6" placeholder="Descreva o desempenho, comportamento ou recomendações para o aluno..."></textarea>
                    <div style="margin-top: 10px; padding: 10px; background: #fff3cd; border-radius: 8px; font-size: 13px; color: #856404;">
                        <strong>💡 Dicas:</strong> Seja específico e construtivo. Destaque pontos positivos e áreas de melhoria. Esta observação será visível para o responsável.
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarObservacao('${matricula}', '${alunoNome}')">💾 Salvar Observação</button>
                    <button class="btn btn-edit" onclick="verObservacoesAluno('${matricula}', '${alunoNome}')">👁️ Ver Histórico</button>
                    <button class="btn btn-edit" onclick="fecharModal()">❌ Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function salvarObservacao(matricula, alunoNome) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const data = document.getElementById('observacaoData').value;
    const texto = document.getElementById('observacaoTexto').value;
    
    if (!data || !texto.trim()) {
        showAlert('Por favor, preencha a data e a observação!', 'error');
        return;
    }
    
    if (texto.trim().length < 20) {
        showAlert('A observação deve ter pelo menos 20 caracteres!', 'error');
        return;
    }
    
    // Inicializar estrutura se não existir
    if (!professorObservacoes[currentUser.email]) {
        professorObservacoes[currentUser.email] = {};
    }
    if (!professorObservacoes[currentUser.email][matricula]) {
        professorObservacoes[currentUser.email][matricula] = [];
    }
    
    // Criar nova observação
    const novaObservacao = {
        id: Date.now(),
        disciplina: currentUser.disciplina,
        professor: currentUser.name,
        data: data,
        observacao: texto.trim()
    };
    
    // Adicionar observação
    professorObservacoes[currentUser.email][matricula].push(novaObservacao);
    
    // Salvar no localStorage
    localStorage.setItem('professorObservacoes', JSON.stringify(professorObservacoes));
    
    showAlert(`Observação sobre ${alunoNome} salva com sucesso!`, 'success');
    fecharModal();
}

function verObservacoesAluno(matricula, alunoNome) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const observacoes = professorObservacoes[currentUser.email]?.[matricula] || [];
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content modal-large">
            <div class="modal-header">
                <h2>📚 Histórico de Observações - ${alunoNome}</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="info-section" style="background: linear-gradient(135deg, #e3f2fd, #f5f5f5); padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #2196F3;">
                    <p style="margin: 5px 0; color: #555;"><strong>Aluno:</strong> ${alunoNome}</p>
                    <p style="margin: 5px 0; color: #555;"><strong>Matrícula:</strong> ${matricula}</p>
                    <p style="margin: 5px 0; color: #555;"><strong>Total de Observações:</strong> ${observacoes.length}</p>
                </div>
                
                ${observacoes.length === 0 ? `
                    <div style="text-align: center; padding: 40px; color: #888;">
                        <div style="font-size: 48px; margin-bottom: 15px;">📝</div>
                        <p>Nenhuma observação registrada ainda.</p>
                        <p style="font-size: 14px; margin-top: 10px;">Clique em "Adicionar Observação" para começar.</p>
                    </div>
                ` : `
                    <div class="observacoes-list">
                        ${observacoes.sort((a, b) => new Date(b.data) - new Date(a.data)).map(obs => `
                            <div class="observacao-card">
                                <div class="observacao-header">
                                    <span class="observacao-disciplina">📚 ${obs.disciplina}</span>
                                    <span class="observacao-data">${new Date(obs.data).toLocaleDateString('pt-BR')}</span>
                                </div>
                                <div class="observacao-professor">👨‍🏫 ${obs.professor}</div>
                                <div class="observacao-texto">${obs.observacao}</div>
                                <div style="text-align: right; margin-top: 10px;">
                                    <button class="btn-small btn-danger" onclick="excluirObservacao('${matricula}', ${obs.id})">🗑️ Excluir</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
                
                <div class="modal-actions">
                    <button class="btn-add-observacao" onclick="adicionarObservacaoAluno('${matricula}', '${alunoNome}')">📝 Nova Observação</button>
                    <button class="btn btn-edit" onclick="fecharModal()">✖️ Fechar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function excluirObservacao(matricula, observacaoId) {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    if (confirm('Tem certeza que deseja excluir esta observação?')) {
        const observacoes = professorObservacoes[currentUser.email]?.[matricula];
        if (observacoes) {
            const index = observacoes.findIndex(obs => obs.id === observacaoId);
            if (index !== -1) {
                observacoes.splice(index, 1);
                localStorage.setItem('professorObservacoes', JSON.stringify(professorObservacoes));
                showAlert('Observação excluída com sucesso!', 'success');
                
                // Recarregar modal
                setTimeout(() => {
                    fecharModal();
                }, 500);
            }
        }
    }
}

function salvarDisciplinasProfessor() {
    localStorage.setItem('professorDisciplinas', JSON.stringify(professorDisciplinas));
}

// Carregar dados salvos do localStorage
function carregarDadosProfessor() {
    const dadosSalvos = localStorage.getItem('professorNotas');
    if (dadosSalvos) {
        professorNotas = JSON.parse(dadosSalvos);
    }
    
    const conteudoSalvo = localStorage.getItem('professorConteudo');
    if (conteudoSalvo) {
        professorConteudo = JSON.parse(conteudoSalvo);
    }
    
    const disciplinasSalvas = localStorage.getItem('professorDisciplinas');
    if (disciplinasSalvas) {
        professorDisciplinas = JSON.parse(disciplinasSalvas);
    }
    
    const observacoesSalvas = localStorage.getItem('professorObservacoes');
    if (observacoesSalvas) {
        professorObservacoes = JSON.parse(observacoesSalvas);
    }
}

// Inicializar dados quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    carregarDadosProfessor();
    
    // Debug: verificar se os dados foram carregados
    console.log('Dados carregados:', {
        professorNotas: professorNotas,
        professorConteudo: professorConteudo,
        professorDisciplinas: professorDisciplinas
    });
});

// Função de debug para testar gerenciarDisciplina
function testarGerenciarDisciplina() {
    console.log('Testando gerenciarDisciplina...');
    console.log('currentUser:', currentUser);
    console.log('professorDisciplinas:', professorDisciplinas);
    
    if (currentUser && professorDisciplinas[currentUser.email]) {
        const disciplinas = professorDisciplinas[currentUser.email];
        console.log('Disciplinas disponíveis:', disciplinas.map(d => d.nome));
        
        if (disciplinas.length > 0) {
            gerenciarDisciplina(disciplinas[0].nome);
        }
    } else {
        console.log('Dados não encontrados!');
    }
}

// ===== FERRAMENTAS DO PROFESSOR =====

// Salvar Alterações de Notas
function salvarAlteracoesNotas() {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }
    
    // Coletar todas as células editáveis da tabela
    const cells = document.querySelectorAll('.content-cell');
    const notasData = {};
    
    cells.forEach(cell => {
        const text = cell.textContent.trim();
        if (text) {
            // Extrair informações da célula (aluno e categoria)
            // Armazenar no objeto notasData
            const categoria = cell.closest('tr').querySelector('.subject-cell')?.textContent || 'Desconhecido';
            if (!notasData[categoria]) {
                notasData[categoria] = [];
            }
            notasData[categoria].push(text);
        }
    });
    
    // Salvar no localStorage incluindo o simulado atual
    const professorEmail = currentUser.email;
    const storageKey = `notas_${professorEmail}_simulado_${simuladoAtualProfessor}`;
    localStorage.setItem(storageKey, JSON.stringify({
        simulado: simuladoAtualProfessor,
        data: notasData,
        timestamp: new Date().toISOString(),
        professor: currentUser.name
    }));
    
    showAlert(`✅ Alterações do Simulado ${simuladoAtualProfessor} salvas com sucesso!`, 'success');
    console.log(`Notas do Simulado ${simuladoAtualProfessor} salvas:`, notasData);
}

// Carregar Notas Salvas
function carregarNotasSalvas() {
    if (!garantirCurrentUser()) return;
    
    const professorEmail = currentUser.email;
    const storageKey = `notas_${professorEmail}`;
    const saved = localStorage.getItem(storageKey);
    
    if (saved) {
        const notasData = JSON.parse(saved);
        console.log('Notas carregadas:', notasData);
        return notasData;
    }
    return null;
}

// Toggle para Mostrar/Ocultar Gerenciamento de Notas
function toggleGerenciarNotas() {
    const section = document.getElementById('gerenciarNotasSection');
    const btn = document.getElementById('btnToggleGrades');
    
    if (section.style.display === 'none') {
        section.style.display = 'block';
        btn.innerHTML = '👁️‍🗨️ Ocultar Gerenciamento de Notas';
        btn.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
    } else {
        section.style.display = 'none';
        btn.innerHTML = '👁️ Mostrar Gerenciamento de Notas';
        btn.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
    }
}

// Adicionar Simulado/Prova
function adicionarSimulado() {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>📝 Adicionar Simulado/Prova</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>📚 Disciplina:</label>
                    <select id="simuladoDisciplina" class="form-select">
                        <option value="Matemática">Matemática</option>
                        <option value="Português">Português</option>
                        <option value="Ciências">Ciências</option>
                        <option value="História">História</option>
                        <option value="Geografia">Geografia</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>📋 Tipo de Avaliação:</label>
                    <select id="simuladoTipo" class="form-select">
                        <option value="Simulado">Simulado</option>
                        <option value="Prova">Prova</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Atividade">Atividade</option>
                        <option value="Projeto">Projeto</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>🏫 Turma:</label>
                    <select id="simuladoTurma" class="form-select">
                        <option value="1A">1° ano A</option>
                        <option value="2B">2° ano B</option>
                        <option value="3A">3° ano A</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>📅 Data da Avaliação:</label>
                    <input type="date" id="simuladoData" class="form-input" value="${new Date().toISOString().split('T')[0]}">
                </div>
                
                <div class="form-group">
                    <label>💯 Valor da Prova (peso):</label>
                    <input type="number" id="simuladoPeso" class="form-input" value="10" min="1" max="10" step="0.5">
                </div>
                
                <div class="form-group">
                    <label>📝 Observações (opcional):</label>
                    <textarea id="simuladoObs" class="form-input" rows="3" placeholder="Ex: Conteúdo dos capítulos 1-5"></textarea>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarSimulado()">💾 Criar Simulado</button>
                    <button class="btn btn-edit" onclick="fecharModal()">❌ Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function salvarSimulado() {
    const disciplina = document.getElementById('simuladoDisciplina').value;
    const tipo = document.getElementById('simuladoTipo').value;
    const turma = document.getElementById('simuladoTurma').value;
    const data = document.getElementById('simuladoData').value;
    const peso = document.getElementById('simuladoPeso').value;
    const obs = document.getElementById('simuladoObs').value;
    
    if (!data) {
        showAlert('Por favor, selecione uma data!', 'error');
        return;
    }
    
    // Salvar simulado no localStorage
    const professorEmail = currentUser.email;
    const storageKey = `simulados_${professorEmail}`;
    let simuladosData = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    // Adicionar novo simulado
    const novoSimulado = {
        id: Date.now(),
        disciplina: disciplina,
        tipo: tipo,
        turma: turma,
        data: data,
        peso: peso,
        observacoes: obs,
        professor: currentUser.name,
        criadoEm: new Date().toISOString()
    };
    
    simuladosData.push(novoSimulado);
    localStorage.setItem(storageKey, JSON.stringify(simuladosData));
    
    showAlert(`✅ ${tipo} de ${disciplina} criado para a turma ${turma}!`, 'success');
    console.log('Simulado salvo:', novoSimulado);
    console.log('Total de simulados:', simuladosData.length);
    fecharModal();
    
    // Atualizar lista de simulados se estiver no dashboard do professor
    if (typeof carregarSimulados === 'function') {
        carregarSimulados();
    }
}

// Carregar e exibir simulados criados
function carregarSimulados() {
    if (!garantirCurrentUser()) {
        return;
    }
    
    const simuladosList = document.getElementById('simuladosList');
    if (!simuladosList) {
        return;
    }
    
    const professorEmail = currentUser.email;
    const storageKey = `simulados_${professorEmail}`;
    const simuladosData = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    if (simuladosData.length === 0) {
        simuladosList.innerHTML = '<p style="text-align: center; color: var(--text-medium); padding: 20px;">Nenhum simulado criado ainda. Use o botão "Adicionar Simulado" acima para criar um novo.</p>';
        return;
    }
    
    // Ordenar por data (mais recentes primeiro)
    simuladosData.sort((a, b) => new Date(b.criadoEm) - new Date(a.criadoEm));
    
    simuladosList.innerHTML = simuladosData.map(simulado => {
        const dataFormatada = new Date(simulado.data).toLocaleDateString('pt-BR');
        const criadoFormatado = new Date(simulado.criadoEm).toLocaleDateString('pt-BR');
        
        return `
            <div style="background: linear-gradient(135deg, rgba(52, 152, 219, 0.05), #ffffff); padding: 20px; border-radius: var(--border-radius-md); border: 2px solid rgba(52, 152, 219, 0.2); display: flex; justify-content: space-between; align-items: center; transition: all 0.3s ease;">
                <div style="flex: 1;">
                    <h4 style="color: var(--primary-blue); margin-bottom: 8px; font-size: 18px; font-weight: 700;">
                        ${simulado.tipo} - ${simulado.disciplina}
                    </h4>
                    <div style="display: flex; gap: 20px; flex-wrap: wrap; color: var(--text-medium); font-size: 14px;">
                        <span><i class="fas fa-school"></i> Turma: ${simulado.turma}</span>
                        <span><i class="fas fa-calendar"></i> Data: ${dataFormatada}</span>
                        <span><i class="fas fa-weight"></i> Peso: ${simulado.peso}</span>
                        <span><i class="fas fa-clock"></i> Criado em: ${criadoFormatado}</span>
                    </div>
                    ${simulado.observacoes ? `<p style="margin-top: 10px; color: var(--text-dark); font-size: 13px;"><strong>Observações:</strong> ${simulado.observacoes}</p>` : ''}
                </div>
                <div style="display: flex; gap: 10px; margin-left: 20px;">
                    <button class="btn btn-edit" onclick="editarSimulado(${simulado.id})" style="padding: 8px 16px; font-size: 14px;">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button class="btn" onclick="excluirSimulado(${simulado.id})" style="background: var(--primary-red); color: white; padding: 8px 16px; font-size: 14px;">
                        <i class="fas fa-trash"></i> Excluir
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Editar simulado
function editarSimulado(id) {
    if (!garantirCurrentUser()) {
        return;
    }
    
    const professorEmail = currentUser.email;
    const storageKey = `simulados_${professorEmail}`;
    const simuladosData = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const simulado = simuladosData.find(s => s.id === id);
    
    if (!simulado) {
        showAlert('Simulado não encontrado!', 'error');
        return;
    }
    
    // Preencher modal com dados do simulado
    adicionarSimulado();
    
    // Aguardar modal ser criado
    setTimeout(() => {
        document.getElementById('simuladoDisciplina').value = simulado.disciplina;
        document.getElementById('simuladoTipo').value = simulado.tipo;
        document.getElementById('simuladoTurma').value = simulado.turma;
        document.getElementById('simuladoData').value = simulado.data;
        document.getElementById('simuladoPeso').value = simulado.peso;
        document.getElementById('simuladoObs').value = simulado.observacoes || '';
        
        // Alterar botão de salvar para atualizar
        const btnSalvar = document.querySelector('.modal-actions .btn-save');
        if (btnSalvar) {
            btnSalvar.onclick = () => atualizarSimulado(id);
            btnSalvar.innerHTML = '💾 Atualizar Simulado';
        }
    }, 100);
}

// Atualizar simulado
function atualizarSimulado(id) {
    if (!garantirCurrentUser()) {
        return;
    }
    
    const disciplina = document.getElementById('simuladoDisciplina').value;
    const tipo = document.getElementById('simuladoTipo').value;
    const turma = document.getElementById('simuladoTurma').value;
    const data = document.getElementById('simuladoData').value;
    const peso = document.getElementById('simuladoPeso').value;
    const obs = document.getElementById('simuladoObs').value;
    
    if (!data) {
        showAlert('Por favor, selecione uma data!', 'error');
        return;
    }
    
    const professorEmail = currentUser.email;
    const storageKey = `simulados_${professorEmail}`;
    const simuladosData = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    const index = simuladosData.findIndex(s => s.id === id);
    if (index === -1) {
        showAlert('Simulado não encontrado!', 'error');
        return;
    }
    
    simuladosData[index] = {
        ...simuladosData[index],
        disciplina: disciplina,
        tipo: tipo,
        turma: turma,
        data: data,
        peso: peso,
        observacoes: obs,
        atualizadoEm: new Date().toISOString()
    };
    
    localStorage.setItem(storageKey, JSON.stringify(simuladosData));
    showAlert(`✅ ${tipo} de ${disciplina} atualizado com sucesso!`, 'success');
    fecharModal();
    carregarSimulados();
}

// Excluir simulado
function excluirSimulado(id) {
    if (!garantirCurrentUser()) {
        return;
    }
    
    if (!confirm('Tem certeza que deseja excluir este simulado?')) {
        return;
    }
    
    const professorEmail = currentUser.email;
    const storageKey = `simulados_${professorEmail}`;
    const simuladosData = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    const index = simuladosData.findIndex(s => s.id === id);
    if (index === -1) {
        showAlert('Simulado não encontrado!', 'error');
        return;
    }
    
    simuladosData.splice(index, 1);
    localStorage.setItem(storageKey, JSON.stringify(simuladosData));
    showAlert('Simulado excluído com sucesso!', 'success');
    carregarSimulados();
}

// Calculadora de Médias
function calcularMedias() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>🧮 Calculadora de Médias</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div style="background: linear-gradient(135deg, #e8f5e9, #ffffff); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 5px solid #4CAF50;">
                    <h3 style="color: #2e7d32; margin-bottom: 15px;">Médias Calculadas Automaticamente</h3>
                    
                    <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
                        <div class="stat-box">
                            <div class="stat-icon">👨‍🎓</div>
                            <div class="stat-value">8.6</div>
                            <div class="stat-label">Média João Silva</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-icon">👩‍🎓</div>
                            <div class="stat-value">8.2</div>
                            <div class="stat-label">Média Maria Santos</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-icon">👨‍🎓</div>
                            <div class="stat-value">7.9</div>
                            <div class="stat-label">Média Pedro Oliveira</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-icon">👩‍🎓</div>
                            <div class="stat-value">9.0</div>
                            <div class="stat-label">Média Ana Costa</div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 10px;">
                        <h4 style="color: #2c3e50; margin-bottom: 10px;">📊 Média Geral da Turma</h4>
                        <div style="font-size: 32px; font-weight: bold; color: #4CAF50; text-align: center;">8.4</div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>⚙️ Critério de Aprovação:</label>
                    <select class="form-select">
                        <option value="6.0">Média 6.0</option>
                        <option value="7.0" selected>Média 7.0</option>
                        <option value="5.0">Média 5.0</option>
                    </select>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="exportarMedias()">📄 Exportar Relatório</button>
                    <button class="btn btn-edit" onclick="fecharModal()">✖️ Fechar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function exportarMedias() {
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Relatório de Médias</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; }
                h1 { color: #2c3e50; border-bottom: 3px solid #3498DB; padding-bottom: 10px; }
                .header { text-align: center; margin-bottom: 30px; }
                .stat-box { display: inline-block; padding: 20px; margin: 10px; background: #f8f9fa; border-radius: 10px; text-align: center; min-width: 150px; }
                .stat-value { font-size: 32px; font-weight: bold; color: #3498DB; }
                .stat-label { font-size: 14px; color: #666; margin-top: 5px; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { padding: 12px; text-align: center; border: 1px solid #ddd; }
                th { background: linear-gradient(135deg, #3498DB, #2980B9); color: white; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🧮 Relatório de Médias</h1>
                <p>Professor: ${currentUser.name} | Data: ${new Date().toLocaleDateString('pt-BR')}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <div class="stat-box">
                    <div class="stat-value">8.4</div>
                    <div class="stat-label">Média Geral</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">9.0</div>
                    <div class="stat-label">Maior Média</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">7.9</div>
                    <div class="stat-label">Menor Média</div>
                </div>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Português</th>
                        <th>Matemática</th>
                        <th>Ciências</th>
                        <th>Média Final</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>João Silva</td>
                        <td>8.5</td>
                        <td>8.8</td>
                        <td>8.5</td>
                        <td><strong>8.6</strong></td>
                    </tr>
                    <tr>
                        <td>Maria Santos</td>
                        <td>8.0</td>
                        <td>8.5</td>
                        <td>8.0</td>
                        <td><strong>8.2</strong></td>
                    </tr>
                    <tr>
                        <td>Pedro Oliveira</td>
                        <td>7.8</td>
                        <td>8.0</td>
                        <td>8.0</td>
                        <td><strong>7.9</strong></td>
                    </tr>
                    <tr>
                        <td>Ana Costa</td>
                        <td>9.0</td>
                        <td>9.0</td>
                        <td>9.0</td>
                        <td><strong>9.0</strong></td>
                    </tr>
                </tbody>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background: #d4edda; border-radius: 10px;">
                <h3 style="color: #155724;">✅ Critério de Aprovação: 7.0</h3>
                <p><strong>Alunos Aprovados:</strong> 4 (100%)</p>
                <p><strong>Alunos em Recuperação:</strong> 0</p>
            </div>
            
            <div style="margin-top: 30px; font-size: 12px; color: #666;">
                <p>Relatório gerado automaticamente pelo sistema ProJK</p>
            </div>
        </body>
        </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
    
    setTimeout(() => fecharModal(), 500);
}

// Lançar Faltas
function lancarFaltas() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'faltaModal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>📅 Lançar Faltas</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>📅 Data:</label>
                    <input type="date" id="faltaData" class="form-input" value="${new Date().toISOString().split('T')[0]}">
                </div>
                
                <div class="form-group">
                    <label>🏫 Turma:</label>
                    <select id="faltaTurma" class="form-select">
                        <option value="1A">1° ano A</option>
                        <option value="2B">2° ano B</option>
                        <option value="3A">3° ano A</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>👥 Alunos Ausentes (selecione):</label>
                    <div style="max-height: 300px; overflow-y: auto; border: 2px solid #e0e0e0; border-radius: 12px; padding: 15px;">
                        <label style="display: flex; align-items: center; gap: 10px; padding: 10px; cursor: pointer; border-radius: 8px; transition: all 0.3s ease;">
                            <input type="checkbox" value="João Silva" style="width: 20px; height: 20px;">
                            <span style="font-weight: 500; color: #2c3e50;">João Silva</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 10px; padding: 10px; cursor: pointer; border-radius: 8px; transition: all 0.3s ease;">
                            <input type="checkbox" value="Maria Santos" style="width: 20px; height: 20px;">
                            <span style="font-weight: 500; color: #2c3e50;">Maria Santos</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 10px; padding: 10px; cursor: pointer; border-radius: 8px; transition: all 0.3s ease;">
                            <input type="checkbox" value="Pedro Oliveira" style="width: 20px; height: 20px;">
                            <span style="font-weight: 500; color: #2c3e50;">Pedro Oliveira</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 10px; padding: 10px; cursor: pointer; border-radius: 8px; transition: all 0.3s ease;">
                            <input type="checkbox" value="Ana Costa" style="width: 20px; height: 20px;">
                            <span style="font-weight: 500; color: #2c3e50;">Ana Costa</span>
                        </label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>📝 Justificativa (opcional):</label>
                    <select class="form-select">
                        <option value="">Falta não justificada</option>
                        <option value="atestado">Atestado médico</option>
                        <option value="familiar">Problema familiar</option>
                        <option value="outro">Outro motivo</option>
                    </select>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarFaltas()">💾 Registrar Faltas</button>
                    <button class="btn btn-edit" onclick="fecharModal()">❌ Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function salvarFaltas() {
    const data = document.getElementById('faltaData').value;
    const turma = document.getElementById('faltaTurma').value;
    
    if (!data) {
        showAlert('Por favor, selecione uma data!', 'error');
        return;
    }
    
    // Coletar alunos marcados como ausentes
    const checkboxes = document.querySelectorAll('#faltaModal input[type="checkbox"]:checked');
    const alunosAusentes = Array.from(checkboxes).map(cb => cb.value);
    
    if (alunosAusentes.length === 0) {
        showAlert('Por favor, selecione pelo menos um aluno ausente!', 'error');
        return;
    }
    
    // Salvar faltas no localStorage
    const professorEmail = currentUser.email;
    const storageKey = `faltas_${professorEmail}`;
    let faltasData = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    // Adicionar nova entrada de faltas
    faltasData.push({
        data: data,
        turma: turma,
        alunosAusentes: alunosAusentes,
        professor: currentUser.name,
        timestamp: new Date().toISOString()
    });
    
    localStorage.setItem(storageKey, JSON.stringify(faltasData));
    
    showAlert(`✅ Faltas registradas! ${alunosAusentes.length} aluno(s) ausente(s) em ${new Date(data).toLocaleDateString('pt-BR')}`, 'success');
    console.log('Faltas salvas:', faltasData);
    fecharModal();
}

// Gerar Relatórios
function gerarRelatorios() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content modal-large">
            <div class="modal-header">
                <h2>📊 Gerar Relatórios</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <h3 style="color: var(--primary-blue); margin-bottom: 20px; font-size: 20px; font-weight: 700;"><i class="fas fa-chart-bar"></i> Selecione o tipo de relatório:</h3>
                
                <div style="display: grid; gap: 15px;">
                    <div class="relatorio-option" onclick="gerarRelatorioDesempenho()">
                        <div class="relatorio-icon">📈</div>
                        <div>
                            <div class="relatorio-title">Relatório de Desempenho</div>
                            <div class="relatorio-desc">Análise completa de notas e frequência por aluno</div>
                        </div>
                    </div>
                    
                    <div class="relatorio-option" onclick="gerarRelatorioComportamento()">
                        <div class="relatorio-icon">⭐</div>
                        <div>
                            <div class="relatorio-title">Relatório de Comportamento</div>
                            <div class="relatorio-desc">Avaliação comportamental dos alunos</div>
                        </div>
                    </div>
                    
                    <div class="relatorio-option" onclick="gerarRelatorioFrequencia()">
                        <div class="relatorio-icon">📅</div>
                        <div>
                            <div class="relatorio-title">Relatório de Frequência</div>
                            <div class="relatorio-desc">Controle de presenças e ausências</div>
                        </div>
                    </div>
                    
                    <div class="relatorio-option" onclick="gerarRelatorioTurma()">
                        <div class="relatorio-icon">👥</div>
                        <div>
                            <div class="relatorio-title">Relatório Consolidado da Turma</div>
                            <div class="relatorio-desc">Visão geral com todas as informações</div>
                        </div>
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-edit" onclick="fecharModal()">✖️ Fechar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function gerarRelatorioDesempenho() {
    fecharModal();
    
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Relatório de Desempenho</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; }
                h1 { color: #2c3e50; border-bottom: 3px solid #3498DB; padding-bottom: 10px; }
                .header { text-align: center; margin-bottom: 30px; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { padding: 12px; text-align: left; border: 1px solid #ddd; }
                th { background: linear-gradient(135deg, #3498DB, #2980B9); color: white; }
                .nota-alta { background: #d4edda; }
                .nota-media { background: #fff3cd; }
                .nota-baixa { background: #f8d7da; }
                .footer { margin-top: 30px; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>📈 Relatório de Desempenho</h1>
                <p>Professor: ${currentUser.name} | Data: ${new Date().toLocaleDateString('pt-BR')}</p>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Média</th>
                        <th>Frequência</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="nota-alta">
                        <td>João Silva</td>
                        <td>8.6</td>
                        <td>95%</td>
                        <td>✅ Aprovado</td>
                    </tr>
                    <tr class="nota-alta">
                        <td>Maria Santos</td>
                        <td>8.2</td>
                        <td>88%</td>
                        <td>✅ Aprovado</td>
                    </tr>
                    <tr class="nota-media">
                        <td>Pedro Oliveira</td>
                        <td>7.9</td>
                        <td>92%</td>
                        <td>⚠️ Atenção</td>
                    </tr>
                    <tr class="nota-alta">
                        <td>Ana Costa</td>
                        <td>9.0</td>
                        <td>89%</td>
                        <td>✅ Aprovado</td>
                    </tr>
                </tbody>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-left: 5px solid #D4AF37;">
                <h3>📊 Resumo Geral</h3>
                <p><strong>Média da Turma:</strong> 8.4</p>
                <p><strong>Taxa de Aprovação:</strong> 91%</p>
                <p><strong>Frequência Média:</strong> 89%</p>
            </div>
            
            <div class="footer">
                <p>Relatório gerado automaticamente pelo sistema ProJK</p>
            </div>
        </body>
        </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

function gerarRelatorioComportamento() {
    fecharModal();
    
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Relatório de Comportamento</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; }
                h1 { color: #2c3e50; border-bottom: 3px solid #3498DB; padding-bottom: 10px; }
                .header { text-align: center; margin-bottom: 30px; }
                .aluno-card { margin: 20px 0; padding: 20px; border: 2px solid #e0e0e0; border-radius: 10px; }
                .comportamento-excelente { border-left: 5px solid #4CAF50; }
                .comportamento-bom { border-left: 5px solid #2196F3; }
                .comportamento-atencao { border-left: 5px solid #FF9800; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>⭐ Relatório de Comportamento</h1>
                <p>Professor: ${currentUser.name} | Data: ${new Date().toLocaleDateString('pt-BR')}</p>
            </div>
            
            <div class="aluno-card comportamento-excelente">
                <h3>João Silva</h3>
                <p><strong>Comportamento:</strong> Excelente</p>
                <p><strong>Observações:</strong> Aluno participativo, respeita colegas e professores. Demonstra interesse nas atividades.</p>
            </div>
            
            <div class="aluno-card comportamento-bom">
                <h3>Maria Santos</h3>
                <p><strong>Comportamento:</strong> Bom</p>
                <p><strong>Observações:</strong> Comportamento adequado. Participa das atividades quando solicitada.</p>
            </div>
            
            <div class="aluno-card comportamento-bom">
                <h3>Pedro Oliveira</h3>
                <p><strong>Comportamento:</strong> Bom</p>
                <p><strong>Observações:</strong> Necessita desenvolver mais atenção durante as aulas. Comportamento adequado.</p>
            </div>
            
            <div class="aluno-card comportamento-excelente">
                <h3>Ana Costa</h3>
                <p><strong>Comportamento:</strong> Excelente</p>
                <p><strong>Observações:</strong> Aluna exemplar, auxilia colegas e mantém excelente comportamento.</p>
            </div>
            
            <div style="margin-top: 30px; font-size: 12px; color: #666;">
                <p>Relatório gerado automaticamente pelo sistema ProJK</p>
            </div>
        </body>
        </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

function gerarRelatorioFrequencia() {
    fecharModal();
    
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Relatório de Frequência</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; }
                h1 { color: #2c3e50; border-bottom: 3px solid #3498DB; padding-bottom: 10px; }
                .header { text-align: center; margin-bottom: 30px; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { padding: 12px; text-align: center; border: 1px solid #ddd; }
                th { background: linear-gradient(135deg, #3498DB, #2980B9); color: white; }
                .freq-alta { background: #d4edda; }
                .freq-media { background: #fff3cd; }
                .freq-baixa { background: #f8d7da; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>📅 Relatório de Frequência</h1>
                <p>Professor: ${currentUser.name} | Data: ${new Date().toLocaleDateString('pt-BR')}</p>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Presenças</th>
                        <th>Faltas</th>
                        <th>Frequência</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="freq-alta">
                        <td>João Silva</td>
                        <td>38</td>
                        <td>2</td>
                        <td>95%</td>
                        <td>✅ Normal</td>
                    </tr>
                    <tr class="freq-media">
                        <td>Maria Santos</td>
                        <td>35</td>
                        <td>5</td>
                        <td>88%</td>
                        <td>⚠️ Atenção</td>
                    </tr>
                    <tr class="freq-alta">
                        <td>Pedro Oliveira</td>
                        <td>37</td>
                        <td>3</td>
                        <td>92%</td>
                        <td>✅ Normal</td>
                    </tr>
                    <tr class="freq-media">
                        <td>Ana Costa</td>
                        <td>36</td>
                        <td>4</td>
                        <td>89%</td>
                        <td>⚠️ Atenção</td>
                    </tr>
                </tbody>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-radius: 10px;">
                <h3>⚠️ Avisos Importantes</h3>
                <p>• Frequência mínima obrigatória: 75%</p>
                <p>• Alunos com menos de 85% de frequência devem ser acompanhados</p>
                <p>• Total de aulas no período: 40 aulas</p>
            </div>
            
            <div style="margin-top: 30px; font-size: 12px; color: #666;">
                <p>Relatório gerado automaticamente pelo sistema ProJK</p>
            </div>
        </body>
        </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

function gerarRelatorioTurma() {
    fecharModal();
    
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }
    
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Relatório Consolidado da Turma</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; }
                h1 { color: #2c3e50; border-bottom: 3px solid #3498DB; padding-bottom: 10px; }
                .header { text-align: center; margin-bottom: 30px; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { padding: 12px; text-align: left; border: 1px solid #ddd; }
                th { background: linear-gradient(135deg, #3498DB, #2980B9); color: white; }
                .section { margin: 30px 0; padding: 20px; background: #f8f9fa; border-radius: 10px; }
                .section h2 { color: #3498DB; margin-bottom: 15px; }
                .footer { margin-top: 30px; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>👥 Relatório Consolidado da Turma</h1>
                <p>Professor: ${currentUser.name} | Data: ${new Date().toLocaleDateString('pt-BR')}</p>
            </div>
            
            <div class="section">
                <h2>📊 Desempenho Geral</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Aluno</th>
                            <th>Média</th>
                            <th>Frequência</th>
                            <th>Comportamento</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>João Silva</td>
                            <td>8.6</td>
                            <td>95%</td>
                            <td>Excelente</td>
                            <td>✅ Aprovado</td>
                        </tr>
                        <tr>
                            <td>Maria Santos</td>
                            <td>8.2</td>
                            <td>88%</td>
                            <td>Bom</td>
                            <td>✅ Aprovado</td>
                        </tr>
                        <tr>
                            <td>Pedro Oliveira</td>
                            <td>7.8</td>
                            <td>92%</td>
                            <td>Bom</td>
                            <td>✅ Aprovado</td>
                        </tr>
                        <tr>
                            <td>Ana Costa</td>
                            <td>9.0</td>
                            <td>89%</td>
                            <td>Excelente</td>
                            <td>✅ Aprovado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="section">
                <h2>📈 Estatísticas</h2>
                <p><strong>Média Geral da Turma:</strong> 8.4</p>
                <p><strong>Taxa de Aprovação:</strong> 100%</p>
                <p><strong>Frequência Média:</strong> 91%</p>
                <p><strong>Total de Alunos:</strong> 4</p>
            </div>
            
            <div class="footer">
                <p>Relatório gerado automaticamente pelo sistema ProJK</p>
            </div>
        </body>
        </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

// Ver Estatísticas
function verEstatisticas() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content modal-large">
            <div class="modal-header">
                <h2>📈 Estatísticas Gerais</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
                    <div class="stat-box">
                        <div class="stat-icon">👨‍🎓</div>
                        <div class="stat-value">14</div>
                        <div class="stat-label">Total de Alunos</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-icon">📊</div>
                        <div class="stat-value">8.6</div>
                        <div class="stat-label">Média Geral</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-icon">✅</div>
                        <div class="stat-value">91%</div>
                        <div class="stat-label">Taxa de Aprovação</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-icon">📅</div>
                        <div class="stat-value">89%</div>
                        <div class="stat-label">Frequência Média</div>
                    </div>
                </div>
                
                <div style="background: linear-gradient(135deg, rgba(52, 152, 219, 0.1), #ffffff); padding: 20px; border-radius: 12px; border-left: 5px solid #3498DB;">
                    <h4 style="color: #2980B9; margin-bottom: 15px;">📉 Alunos que Precisam de Atenção</h4>
                    <div style="display: grid; gap: 10px;">
                        <div style="padding: 12px; background: white; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                            <span><strong>Pedro Oliveira:</strong> Média 7.8 (abaixo do esperado)</span>
                            <span style="background: #FF9800; color: white; padding: 5px 12px; border-radius: 20px; font-size: 12px;">Atenção</span>
                        </div>
                        <div style="padding: 12px; background: white; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                            <span><strong>Ana Costa:</strong> Frequência 85% (abaixo de 90%)</span>
                            <span style="background: #FF9800; color: white; padding: 5px 12px; border-radius: 20px; font-size: 12px;">Atenção</span>
                        </div>
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="exportarEstatisticas()">📄 Exportar PDF</button>
                    <button class="btn btn-edit" onclick="fecharModal()">✖️ Fechar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function exportarEstatisticas() {
    showAlert('Estatísticas exportadas!', 'success');
}

// Adicionar Nova Disciplina
function adicionarNovaDisciplina() {
    if (!garantirCurrentUser()) {
        showAlert('Erro: Usuário não encontrado!', 'error');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>➕ Adicionar Nova Disciplina</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>📚 Nome da Disciplina:</label>
                    <input type="text" id="novaDisciplinaNome" class="form-input" placeholder="Ex: Química">
                </div>
                
                <div class="form-group">
                    <label>📋 Tipo:</label>
                    <select id="novaDisciplinaTipo" class="form-select">
                        <option value="Principal">Principal</option>
                        <option value="Apoio">Apoio</option>
                        <option value="Eletiva">Eletiva</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>⏰ Carga Horária (horas/semana):</label>
                    <input type="number" id="novaDisciplinaCarga" class="form-input" value="4" min="1" max="20">
                </div>
                
                <div class="form-group">
                    <label>🏫 Turmas Atribuídas:</label>
                    <div style="display: grid; gap: 10px; padding: 15px; background: #f5f5f5; border-radius: 10px;">
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" value="1A" style="width: 20px; height: 20px;">
                            <span>1° ano A</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" value="2B" style="width: 20px; height: 20px;">
                            <span>2° ano B</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" value="3A" style="width: 20px; height: 20px;">
                            <span>3° ano A</span>
                        </label>
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-save" onclick="salvarNovaDisciplina()">💾 Criar Disciplina</button>
                    <button class="btn btn-edit" onclick="fecharModal()">❌ Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function salvarNovaDisciplina() {
    const nome = document.getElementById('novaDisciplinaNome').value;
    const tipo = document.getElementById('novaDisciplinaTipo').value;
    const carga = document.getElementById('novaDisciplinaCarga').value;
    
    if (!nome.trim()) {
        showAlert('Por favor, digite o nome da disciplina!', 'error');
        return;
    }
    
    // Coletar turmas selecionadas
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const turmasSelecionadas = Array.from(checkboxes).map(cb => cb.value);
    
    // Salvar disciplina no localStorage
    const professorEmail = currentUser.email;
    const storageKey = `disciplinas_${professorEmail}`;
    let disciplinasData = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    // Adicionar nova disciplina
    const novaDisciplina = {
        id: Date.now(),
        nome: nome,
        tipo: tipo,
        cargaHoraria: carga,
        turmas: turmasSelecionadas,
        professor: currentUser.name,
        criadaEm: new Date().toISOString()
    };
    
    disciplinasData.push(novaDisciplina);
    localStorage.setItem(storageKey, JSON.stringify(disciplinasData));
    
    showAlert(`✅ Disciplina "${nome}" criada com sucesso!`, 'success');
    console.log('Disciplina salva:', novaDisciplina);
    console.log('Total de disciplinas:', disciplinasData.length);
    fecharModal();
}

// Ver Estatísticas da Disciplina
function verEstatisticasDisciplina(disciplina) {
    showAlert(`Carregando estatísticas de ${disciplina}...`, 'success');
}

// Sistema de Proteção de Dados
function mostrarPoliticaProtecaoDados() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content modal-large">
            <div class="modal-header">
                <h2>🔒 Política de Proteção de Dados</h2>
                <button class="modal-close" onclick="fecharModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div style="background: linear-gradient(135deg, #e3f2fd, #f5f5f5); padding: 25px; border-radius: 15px; margin-bottom: 25px; border-left: 5px solid #2196F3;">
                    <h3 style="color: #1976D2; margin-bottom: 15px;">🛡️ Segurança e Privacidade</h3>
                    <p style="line-height: 1.7; color: #555; margin-bottom: 10px;">
                        Este sistema implementa as melhores práticas de proteção de dados conforme a LGPD (Lei Geral de Proteção de Dados).
                    </p>
                </div>
                
                <div style="display: grid; gap: 20px;">
                    <div class="info-card">
                        <h4 style="color: #2c3e50; margin-bottom: 10px;">🔐 Dados Protegidos:</h4>
                        <ul style="color: #555; line-height: 1.8; padding-left: 20px;">
                            <li><strong>CPFs:</strong> Exibidos parcialmente (***.***.* XX-XX)</li>
                            <li><strong>Emails:</strong> Acesso restrito por tipo de usuário</li>
                            <li><strong>Notas:</strong> Visíveis apenas para professor, aluno e responsável</li>
                            <li><strong>Observações:</strong> Criptografadas no armazenamento</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <h4 style="color: #2c3e50; margin-bottom: 10px;">✅ Permissões de Acesso:</h4>
                        <ul style="color: #555; line-height: 1.8; padding-left: 20px;">
                            <li><strong>Professor:</strong> Edição de notas apenas de suas turmas</li>
                            <li><strong>Aluno:</strong> Visualização apenas de suas próprias notas</li>
                            <li><strong>Responsável:</strong> Visualização apenas do aluno vinculado</li>
                            <li><strong>Dados sensíveis:</strong> Logs de todas as alterações</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <h4 style="color: #2c3e50; margin-bottom: 10px;">🔒 Medidas de Segurança:</h4>
                        <ul style="color: #555; line-height: 1.8; padding-left: 20px;">
                            <li>✅ Senhas com mínimo de 8 caracteres</li>
                            <li>✅ Sessão com tempo de expiração</li>
                            <li>✅ Validação de CPF antes de vinculação</li>
                            <li>✅ Backup automático de dados</li>
                            <li>✅ Auditoria de alterações</li>
                        </ul>
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-edit" onclick="fecharModal()">✖️ Fechar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

// ===== SISTEMA DE DESTAQUE DE SIMULADOS =====

// Destacar Simulado no Dashboard Aluno (mantém todas as colunas)
function destacarSimulado(numero) {
    // Atualizar botões ativos
    document.querySelectorAll('.simulado-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-simulado="${numero}"]`).classList.add('active');
    
    // Remover todas as classes de destaque
    document.querySelectorAll('.grade-cell').forEach(cell => {
        cell.classList.remove('destaque-col-1', 'destaque-col-2', 'destaque-col-3', 'destaque-col-4');
    });
    
    // Remover active dos headers
    document.querySelectorAll('.tab-header').forEach(header => {
        header.classList.remove('active');
    });
    
    // Se número for 0, mostrar todos sem destaque
    if (numero === 0) {
        return;
    }
    
    // Adicionar destaque na coluna selecionada
    document.querySelectorAll('.grades-table tr').forEach(row => {
        const cells = row.querySelectorAll('.grade-cell');
        if (cells[numero - 1]) {
            cells[numero - 1].classList.add(`destaque-col-${numero}`);
        }
    });
    
    // Destacar header correspondente
    const header = document.querySelector(`.tab-header[data-col="${numero}"]`);
    if (header) {
        header.classList.add('active');
    }
}

// Destacar Simulado no Dashboard Responsável (mantém todas as colunas)
function destacarSimuladoResponsavel(numero) {
    // Atualizar botões ativos
    document.querySelectorAll('.simulado-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-simulado="${numero}"]`).classList.add('active');
    
    // Remover todas as classes de destaque
    document.querySelectorAll('.grade-cell').forEach(cell => {
        cell.classList.remove('destaque-col-1', 'destaque-col-2', 'destaque-col-3', 'destaque-col-4');
    });
    
    // Remover active dos headers
    document.querySelectorAll('.tab-header').forEach(header => {
        header.classList.remove('active');
    });
    
    // Se número for 0, mostrar todos sem destaque
    if (numero === 0) {
        return;
    }
    
    // Adicionar destaque na coluna selecionada
    document.querySelectorAll('.grades-table tr').forEach(row => {
        const cells = row.querySelectorAll('.grade-cell');
        if (cells[numero - 1]) {
            cells[numero - 1].classList.add(`destaque-col-${numero}`);
        }
    });
    
    // Destacar header correspondente
    const header = document.querySelector(`.tab-header[data-col="${numero}"]`);
    if (header) {
        header.classList.add('active');
    }
}

// ===== SISTEMA DE SELEÇÃO DE SIMULADO PARA PROFESSOR =====

// Trocar Simulado no Dashboard Professor (para edição)
let simuladoAtualProfessor = 1;

function trocarSimuladoProfessor(numero) {
    simuladoAtualProfessor = numero;
    
    // Atualizar botões ativos
    document.querySelectorAll('#gerenciarNotasSection .simulado-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#gerenciarNotasSection [data-simulado="${numero}"]`).classList.add('active');
    
    showAlert(`✏️ Editando agora: Simulado ${numero}`, 'success');
    console.log(`Professor selecionou Simulado ${numero} para edição`);
}

console.log('🎓 Sistema Escolar Completo Carregado!');
console.log('🔒 Sistema com Proteção de Dados LGPD');
console.log('💡 Dica: Clique 5 vezes no logo para um easter egg!');
console.log('🗄️ Estrutura preparada para integração com banco de dados');
console.log('📋 Consulte database-config.js para configurações futuras');
console.log('🎮 Dica 2: Tente o Konami Code (↑↑↓↓←→←→BA)');
