#
Nome do projeto: 
🚀 Desafio Técnico


<h2>Telas</h2>
<h4>Login</h4>
<img src="https://raw.githubusercontent.com/hllmweb/desafio/main/login.PNG" />

<h4>Cadastre-se</h4>
<img src="https://raw.githubusercontent.com/hllmweb/desafio/main/cadastre-se.PNG" />

<h4>Dashboard</h4>
<img src="https://raw.githubusercontent.com/hllmweb/desafio/main/dashboard.PNG" />


<h4>Adicionar</h4>
<img src="https://raw.githubusercontent.com/hllmweb/desafio/main/adicionar.PNG" />

<h4>Editar</h4>
<img src="https://raw.githubusercontent.com/hllmweb/desafio/main/edit.PNG" />



### Funções: 
✔️ Listar usuário <br />
✔️ Adicionar usuário <br />
✔️ Editar usuário <br />
✔️ Deletar usuário <br />
❌ Carregamento infinito dos usuários <br />
❌ Permissão de acesso separada em nível (administrador e usuário comum) <br />

## Siga as etapas para execução do projeto


# Para Baixar as dependências 
- Nas pastas 
/back
/front

Digite o comando

npm i


Observação: será baixado as dependências utilizadas no back e front, abra dois terminais para realizar o download.

# Criando as tabelas do banco
- Na pasta
/back


Observação: foi utilizado o banco postgres, para o funcionamento das migrates, é importante criar a base de dados;
nome da base: desafio_indt

Digite o comando

npx sequelize-cli db:migrate

Será criado a tabela do banco




# Iniciando o projeto
npm run start
ou
yarn run start