/**
 * CONFIGURAÇÃO DO BANCO DE DADOS - Sistema Escolar ProJK
 * 
 * Este arquivo contém a estrutura preparada para integração futura
 * com um banco de dados real (MySQL, PostgreSQL, MongoDB, etc.)
 */

// Configurações do Banco de Dados
const DB_CONFIG = {
    // Configurações para diferentes tipos de banco
    mysql: {
        host: 'localhost',
        port: 3306,
        database: 'projk_escolar',
        username: 'projk_user',
        password: 'projk_password',
        charset: 'utf8mb4',
        timezone: 'America/Sao_Paulo'
    },
    
    postgresql: {
        host: 'localhost',
        port: 5432,
        database: 'projk_escolar',
        username: 'projk_user',
        password: 'projk_password',
        schema: 'public'
    },
    
    mongodb: {
        uri: 'mongodb://localhost:27017',
        database: 'projk_escolar',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};

// Estrutura das Tabelas/Collections
const DB_SCHEMA = {
    // Tabela de Usuários
    users: {
        table: 'usuarios',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            email: { type: 'VARCHAR(255)', unique: true, not_null: true },
            password: { type: 'VARCHAR(255)', not_null: true },
            type: { type: 'ENUM', values: ['aluno', 'professor', 'responsavel'], not_null: true },
            name: { type: 'VARCHAR(255)', not_null: true },
            created_at: { type: 'TIMESTAMP', default: 'CURRENT_TIMESTAMP' },
            updated_at: { type: 'TIMESTAMP', default: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' },
            active: { type: 'BOOLEAN', default: true }
        }
    },
    
    // Tabela de Alunos (específica)
    students: {
        table: 'alunos',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            user_id: { type: 'INT', foreign_key: 'usuarios(id)', not_null: true },
            matricula: { type: 'VARCHAR(50)', unique: true, not_null: true },
            serie: { type: 'INT', not_null: true },
            turma: { type: 'CHAR(1)', not_null: true },
            birth_date: { type: 'DATE' },
            phone: { type: 'VARCHAR(20)' },
            address: { type: 'TEXT' }
        }
    },
    
    // Tabela de Professores (específica)
    teachers: {
        table: 'professores',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            user_id: { type: 'INT', foreign_key: 'usuarios(id)', not_null: true },
            matricula: { type: 'VARCHAR(50)', unique: true, not_null: true },
            cpf: { type: 'VARCHAR(14)', unique: true },
            disciplines: { type: 'JSON' }, // Array de disciplinas
            formation: { type: 'VARCHAR(255)' },
            experience_years: { type: 'INT' },
            phone: { type: 'VARCHAR(20)' },
            address: { type: 'TEXT' }
        }
    },
    
    // Tabela de Responsáveis (específica)
    guardians: {
        table: 'responsaveis',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            user_id: { type: 'INT', foreign_key: 'usuarios(id)', not_null: true },
            cpf: { type: 'VARCHAR(14)', unique: true, not_null: true },
            phone: { type: 'VARCHAR(20)' },
            address: { type: 'TEXT' },
            relationship: { type: 'VARCHAR(50)' } // pai, mãe, avô, etc.
        }
    },
    
    // Tabela de Relacionamento Responsável-Aluno
    guardian_student: {
        table: 'responsavel_aluno',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            guardian_id: { type: 'INT', foreign_key: 'responsaveis(id)', not_null: true },
            student_id: { type: 'INT', foreign_key: 'alunos(id)', not_null: true },
            relationship: { type: 'VARCHAR(50)', not_null: true },
            is_primary: { type: 'BOOLEAN', default: false }
        }
    },
    
    // Tabela de Disciplinas
    subjects: {
        table: 'disciplinas',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            name: { type: 'VARCHAR(255)', not_null: true },
            code: { type: 'VARCHAR(20)', unique: true },
            description: { type: 'TEXT' },
            active: { type: 'BOOLEAN', default: true }
        }
    },
    
    // Tabela de Turmas
    classes: {
        table: 'turmas',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            name: { type: 'VARCHAR(100)', not_null: true },
            serie: { type: 'INT', not_null: true },
            year: { type: 'INT', not_null: true },
            teacher_id: { type: 'INT', foreign_key: 'professores(id)' },
            active: { type: 'BOOLEAN', default: true }
        }
    },
    
    // Tabela de Simulados
    exams: {
        table: 'simulados',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            name: { type: 'VARCHAR(255)', not_null: true },
            description: { type: 'TEXT' },
            date: { type: 'DATE', not_null: true },
            time_start: { type: 'TIME' },
            time_end: { type: 'TIME' },
            subject_id: { type: 'INT', foreign_key: 'disciplinas(id)', not_null: true },
            teacher_id: { type: 'INT', foreign_key: 'professores(id)', not_null: true },
            class_id: { type: 'INT', foreign_key: 'turmas(id)' },
            total_questions: { type: 'INT' },
            max_score: { type: 'DECIMAL(5,2)' },
            active: { type: 'BOOLEAN', default: true }
        }
    },
    
    // Tabela de Notas/Resultados
    grades: {
        table: 'notas',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            student_id: { type: 'INT', foreign_key: 'alunos(id)', not_null: true },
            exam_id: { type: 'INT', foreign_key: 'simulados(id)', not_null: true },
            score: { type: 'DECIMAL(5,2)' },
            grade: { type: 'VARCHAR(50)' }, // Excelente, Bom, Regular, Insatisfatório
            answers: { type: 'JSON' }, // Respostas do aluno
            time_spent: { type: 'INT' }, // Tempo em minutos
            submitted_at: { type: 'TIMESTAMP' },
            graded_at: { type: 'TIMESTAMP' },
            graded_by: { type: 'INT', foreign_key: 'professores(id)' }
        }
    },
    
    // Tabela de Conquistas
    achievements: {
        table: 'conquistas',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            name: { type: 'VARCHAR(255)', not_null: true },
            description: { type: 'TEXT' },
            icon: { type: 'VARCHAR(100)' },
            type: { type: 'VARCHAR(50)' }, // academic, attendance, behavior
            criteria: { type: 'JSON' }, // Critérios para conquistar
            points: { type: 'INT', default: 0 },
            active: { type: 'BOOLEAN', default: true }
        }
    },
    
    // Tabela de Conquistas do Aluno
    student_achievements: {
        table: 'aluno_conquistas',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            student_id: { type: 'INT', foreign_key: 'alunos(id)', not_null: true },
            achievement_id: { type: 'INT', foreign_key: 'conquistas(id)', not_null: true },
            earned_at: { type: 'TIMESTAMP', default: 'CURRENT_TIMESTAMP' },
            progress: { type: 'JSON' } // Progresso para conquistas em andamento
        }
    },
    
    // Tabela de Eventos/Calendário
    events: {
        table: 'eventos',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            title: { type: 'VARCHAR(255)', not_null: true },
            description: { type: 'TEXT' },
            date: { type: 'DATE', not_null: true },
            time_start: { type: 'TIME' },
            time_end: { type: 'TIME' },
            type: { type: 'VARCHAR(50)' }, // exam, meeting, holiday, etc.
            class_id: { type: 'INT', foreign_key: 'turmas(id)' },
            subject_id: { type: 'INT', foreign_key: 'disciplinas(id)' },
            created_by: { type: 'INT', foreign_key: 'professores(id)' },
            active: { type: 'BOOLEAN', default: true }
        }
    },
    
    // Tabela de Frequência
    attendance: {
        table: 'frequencia',
        fields: {
            id: { type: 'INT', primary: true, auto_increment: true },
            student_id: { type: 'INT', foreign_key: 'alunos(id)', not_null: true },
            class_id: { type: 'INT', foreign_key: 'turmas(id)', not_null: true },
            date: { type: 'DATE', not_null: true },
            present: { type: 'BOOLEAN', not_null: true },
            justification: { type: 'TEXT' },
            created_by: { type: 'INT', foreign_key: 'professores(id)' }
        }
    }
};

// Queries SQL de exemplo para migração futura
const MIGRATION_QUERIES = {
    // Criar tabela de usuários
    createUsersTable: `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            type ENUM('aluno', 'professor', 'responsavel') NOT NULL,
            name VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            active BOOLEAN DEFAULT TRUE
        );
    `,
    
    // Criar tabela de alunos
    createStudentsTable: `
        CREATE TABLE IF NOT EXISTS alunos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            matricula VARCHAR(50) UNIQUE NOT NULL,
            serie INT NOT NULL,
            turma CHAR(1) NOT NULL,
            birth_date DATE,
            phone VARCHAR(20),
            address TEXT,
            FOREIGN KEY (user_id) REFERENCES usuarios(id) ON DELETE CASCADE
        );
    `,
    
    // Inserir dados de exemplo
    insertSampleData: `
        INSERT INTO usuarios (email, password, type, name) VALUES
        ('aluno@teste.com', '12345678', 'aluno', 'João da Silva'),
        ('prof@teste.com', '12345678', 'professor', 'Prof. Carlos Silva'),
        ('resp@teste.com', '12345678', 'responsavel', 'Maria Santos');
        
        INSERT INTO alunos (user_id, matricula, serie, turma) VALUES
        (1, '2025001', 3, 'A');
        
        INSERT INTO professores (user_id, matricula, cpf, disciplines) VALUES
        (2, 'PROF001', '123.456.789-00', '["Matemática", "Física"]');
    `
};

// Funções auxiliares para integração futura
const DB_HELPERS = {
    // Conectar ao banco de dados
    connect: async function(dbType = 'mysql') {
        console.log(`Conectando ao banco de dados ${dbType}...`);
        // Implementação futura com bibliotecas como mysql2, pg, mongodb
    },
    
    // Migrar dados do localStorage para o banco
    migrateFromLocalStorage: async function() {
        console.log('Migrando dados do localStorage para o banco...');
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        // Implementação futura para migrar dados
    },
    
    // Sincronizar dados com o banco
    syncWithDatabase: async function() {
        console.log('Sincronizando dados com o banco...');
        // Implementação futura para sincronização
    }
};

// Exportar configurações (para uso futuro com módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DB_CONFIG,
        DB_SCHEMA,
        MIGRATION_QUERIES,
        DB_HELPERS
    };
}

// Log de inicialização
console.log('📊 Configuração do banco de dados ProJK carregada');
console.log('🗄️ Estrutura preparada para integração futura');
console.log('📋 Tabelas definidas:', Object.keys(DB_SCHEMA).length);
