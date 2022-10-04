#
Nome do projeto: 
🚀 Desafio Técnico

### Funções: 
✔️ Listar usuário <br />
✔️ Adicionar usuário <br />
✔️ Editar usuário <br />
✔️ Deletar usuário <br />
✔️ Carregamento infinito dos usuários <br />
✔️ Permissão de acesso separada em nível (administrador e usuário comum) <br />



# Cria a estrutura de tabelas do banco
yarn sequelize migration:create --name=create-users

# Atualiza e cria as tabelas do banco
yarn sequelize db:migrate

ou

npx sequelize-cli db:migrate



# Remove as tebelas do banco
yarn sequelize db:migrate:undo:all