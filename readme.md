# Aplicação - API Restfull

## Principais tecnologias utilizadas

- linguagens:
  - ReactJS
  - Express.js
- ferramentas:
  - Git
  - GitHub
- dependências:
  - express
  - mongoose
  - bcrypt
  - jsonwebtoken
  - dotenv
  - nodemon


## Requisitos:

- Instale as depênndencias com o comando `npm install`;
- Inicie a aplicação com o comando `npm run start`;
- url da aplicação: `http://localhost:300`;
- Eu utilizei a ferramenta `Postman` para realizar meus testes, ultilize a ferramenta que achar melhor;
- Rotas: `/`, `/user/:id`, `/auth/register` e `/auth/login`

## Observações

● Retirei o arquivo `.env` do `.gitignore` para que ele fosse upado para o repositório, pois nele contêm informações para a geração e verificação do token e também contêm informações da conecção com o banco que está na nuvem(`MongoDB Atlas`)