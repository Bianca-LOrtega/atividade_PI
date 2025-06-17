-- Criar o banco de dados
create database livemed;
use livemed;

-- Tabela de empresas
create table empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50) not null,
	cnpj CHAR(14) not null,
	codigo_ativacao VARCHAR(50)
);

-- Tabela de usuários
create table usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(80) NOT NULL,
	email VARCHAR(100) NOT NULL,
	senha VARCHAR(40) NOT NULL,
	fk_empresa INT NOT NULL,
	foreign key (fk_empresa) references empresa(id)
);

-- Tabela de lotes
create table lote (
	id INT PRIMARY KEY AUTO_INCREMENT,
	codigo VARCHAR(50) NOT NULL,
	produto VARCHAR(80) NOT NULL,
	dataFabricacao DATE NOT NULL,
	dataValidade DATE NOT NULL,
	fk_empresa INT NOT NULL,
	foreign key (fk_empresa) references empresa(id)
);

-- Tabela de verificações (resultado geral da verificação do lote)
create table verificacao (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_lote INT NOT NULL,
	dataVerificacao DATETIME DEFAULT CURRENT_TIMESTAMP,
	status VARCHAR(20) NOT NULL, -- 'Aprovado' ou 'Reprovado'
	motivo VARCHAR(100), -- Ex.: 'Falta de Rótulo', 'Selagem Incorreta', etc.
	foreign key (fk_lote) references lote(id)
);

-- Tabela de leituras do sensor óptico
create table sensor (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_verificacao INT NOT NULL,
	leitura VARCHAR(20) NOT NULL, -- 'Detecção Ok' ou 'Falha na Detecção'
    constraint chk_leitura check (leitura in ('Ok', 'Falha na Detecção')),
	intensidade_reflexao DECIMAL(5,2) NOT NULL, -- Valor entre 0.00 a 100.00
	timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
	foreign key (fk_verificacao) references verificacao(id)
);

insert into empresa (razao_social, cnpj, codigo_ativacao) values
('PharmaTech LTDA', '12345678000199', 'ATV123'),
('Vida Farma', '98765432000188', 'ATV456');

insert into usuario (nome, email, senha, tipo, fk_empresa) values
('João Silva', 'joao@pharmatech.com', '123456', 'Operador', 1),
('Ana Souza', 'ana@pharmatech.com', '123456', 'Supervisor', 1),
('Carlos Lima', 'carlos@vidafarma.com', '123456', 'Operador', 2);

insert into lote (codigo, produto, dataFabricacao, dataValidade, fk_empresa) values
('LT001', 'Paracetamol 500mg', '2025-01-10', '2027-01-10', 1),
('LT002', 'Ibuprofeno 400mg', '2025-02-15', '2027-02-15', 1),
('LT003', 'Dipirona 1g', '2025-03-01', '2027-03-01', 2);

insert into verificacao (fk_lote, status, motivo) values
(1, 'Aprovado', null),
(1, 'Reprovado', 'Falta de Rótulo'),
(2, 'Aprovado', null),
(3, 'Reprovado', 'Selagem Incorreta'),
(3, 'Aprovado', null);

insert into sensor (fk_verificacao, leitura, intensidade_reflexao) values
(1, 'Ok', 85.50),
(2, 'Falha na Detecção', 20.10),
(3, 'Ok', 92.75),
(4, 'Falha na Detecção', 15.80),
(5, 'Ok', 88.65);




