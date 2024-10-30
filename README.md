# Gerenciador de Tarefas - Frontend

É uma aplicação web intuitiva desenvolvida em React que permite aos usuários organizar suas tarefas diárias de forma eficiente. Com uma interface responsiva, os usuários podem adicionar, visualizar e remover tarefas facilmente, recebendo feedback imediato sobre suas ações. A aplicação foi projetada para oferecer uma experiência fluida e centrada no usuário.

## Tecnologias Utilizadas

- React
- Axios
- CSS Modules
- React Router DOM

## Pré-requisitos

- Node.js
- npm ou yarn
- IDE (recomendado: VS Code)

## Configuração do Ambiente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/gerenciador-tarefas-frontend.git
cd gerenciador-tarefas-frontend
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure o arquivo `.env` na raiz do projeto:
```env
REACT_APP_API_URL=http://localhost:8080/api
```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:
```bash
npm start
# ou
yarn start
```

2. A aplicação estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
src/
├── icons/
└── App.js
└── App.css
└── App.test.js
└── index.js
└── index.css
└── Tarefas.js
└── setupTests.js
```

## Funcionalidades

- Listagem de tarefas
- Criação de novas tarefas
- Marcação de tarefas como concluídas
- Exclusão de tarefas
- Interface responsiva

## Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm build` - Cria a versão de produção
- `npm test` - Executa os testes
- `npm run eject` - Ejeta as configurações do Create React App

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Autor

Nícolas Bággio

<div align="center">
  <h2>⭐ Se este repositório foi útil para você, não se esqueça de deixar uma estrela! ⭐</h2>

  <a href="mailto:nicolasbbaggio@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red">
  </a>
  <a href="https://www.linkedin.com/in/nicolasbaggio/">
    <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a> 
</div>
