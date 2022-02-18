
#***********************CRIA DATABASE**************************
#create database db_c_libras_syss;
use db_c_libras_syss;
#drop database db_c_libras_syss;

#***************CRIACAO DAS TABELAS*******************


#******************TBL_EMPRESAS**************************

create table tbl_empresas(
cnpj varchar(20) primary key not null unique,
empresa varchar(150) not null,
responsavel varchar(80) not null,
cep varchar(10) not null, 
logradouro varchar(70) not null, 
numero varchar(7) not null,
bairro varchar(50) not null,
cidade varchar(50) not null, 
estado char(2) not null,
dt_criacao date default now(),
fk_plano varchar(50), 
estatus varchar(10) not null default 'ATIVO',
foreign key fk_plano (fk_plano) references tbl_planos (plano)
);

select * from tbl_empresas;


#*******************************************************


#****************TBL_CONTATO_EMPRESAS*****************

create table tbl_contato_empresa(
cnpj varchar(20) primary key not null unique,
telefone varchar(17) not null,
telefone2 varchar(17),
celular varchar(17) not null,
celular2 varchar(17),
email varchar(70) not null unique,
email2 varchar(70) not null unique,
contato varchar(80) not null

);

select * from tbl_contato_empresa;	





#*****************TBL_PLANOS*********************
create table tbl_planos(

    plano varchar(50) not null unique,
    descricao varchar(80) not null, 
    valor_unitario decimal(9,2) not null,
    minutos time,
    valor_minutos_extra decimal(9,2) not null, 
    valor_login_extra decimal(9,2) not null,
    dt_criacao date default now(),
    estatus varchar(10) not null default 'ATIVO',
    primary key(plano)
);

select * from tbl_planos;		
desc tbl_planos;	
desc tbl_planos;



#**************	TBL_PLANOS_EMPRESA****************
#******Caso a regra de negocio se amplie, (Uma Empresa pode contratar diversos Planos => 1:N)*******


create table tbl_planos_empresas(

	cod_plano_empresa int primary key auto_increment not null, 
	fk_id_plano int, 
    fk_cnpj varchar(20),
    estatus_pagamento varchar(15) not null default '',
    dt_pagamento timestamp default current_timestamp, 
	foreign key id_plano (fk_id_plano) references tbl_planos (id_plano),
    foreign key fk_cnpj (fk_cnpj) references tbl_empresas (cnpj)

);

select * from tbl_planos_empresas;





#******************TBL_ADM_SYSTEM********************
create table tbl_adm_system(
	id_administrador int auto_increment primary key not null,
    nome varchar(100) not null,
    usuario varchar(50) not null unique,
    senha varchar(50) not null, 
    foto varchar(150),
    dt_criacao  date default now(),
    estatus varchar(10) default 'ATIVO'
);

select * from tbl_adm_system;
desc tbl_adm_system;




#*********************TBL_USUÁRIOS***********************
create table tbl_clientes(
id_cliente  int auto_increment primary key not null, 
nome varchar(80) not null, 
usuario varchar(50) not null unique,
senha varchar(50) not null,
foto varchar(150),
fk_empresa varchar(20) not null,
dt_criacao date default now(), 
estatus varchar(10) default 'ATIVO',
foreign key fk_empresa (fk_empresa) references tbl_empresas (cnpj)

);

select * from tbl_clientes;



#--------------------TABELA DE USUARIOS_EMPRESAS***********

#** Quantos Usuários a empresa X possui? *****

create table tbl_clientes_empresas(
	id_cliente_empresa int primary key auto_increment not null, 
	fk_id_cliente int not null, 
    fk_cnpj varchar(20) not null,
	foreign key(fk_id_cliente) references tbl_clientes (id_cliente),
	foreign key (fk_cnpj) references tbl_empresas (cnpj)
);

select * from tbl_clientes_empresas;






#------------TABELA OPERADORES-----------

create table tbl_operadores(
	id_operador int auto_increment primary key not null,
    nome varchar(100) not null, 
    usuario varchar(50) not null unique, 
    senha varchar(50) not null,
    foto varchar(500), 
    dt_criacao date default now(),
    estatus varchar(10)  default 'ATIVO'
);

select * from tbl_operadores;
desc tbl_operadores;




#----------------TABELA DE ATENDIMENTOS--------------

create table tbl_atendimentos(
	id_atendimento int auto_increment primary key not null,
    dt_inicio timestamp not null, 
    dt_termino datetime not null, 
    valor decimal(4,2) not null, 
    FK_id_operador int not null, 
    FK_id_empresa int not null, 
    FK_id_usuarios_empresas int not null, 
    foreign key(FK_id_operador) references tbl_operadores (id_operador),
	foreign key (FK_id_empresa) references tbl_empresas (id_empresa),
    foreign key (FK_id_usuarios_empresas) references tbl_usuarios_empresas (fk_id_usuarios),
	estatus varchar(50) not null
);

select * from tbl_atendimentos;

desc tbl_atendimentos;


