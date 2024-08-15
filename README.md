# 🎬 Ratio Movies

Este projeto é uma aplicação frontend desenvolvida utilizando [Vite](https://vitejs.dev/) com [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Zustand](https://zustand-demo.pmnd.rs/), [Axios](https://axios-http.com/ptbr/docs/intro) e [Styled-components](https://styled-components.com/). A aplicação permite listar filmes e celebridades consumindo uma API de terceiros, além de fornecer funcionalidades de autenticação de usuário, como registro, login, atualização de dados e exclusão de conta. A aplicação é totalmente responsiva, proporcionando uma ótima experiência de usuário em dispositivos móveis e desktops.

## 📋 Índice

- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [API Externa](#api-externa)
- [Autenticação e Validação](#autenticação-e-validação)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🚀 Instalação

### Pré-requisitos

- Node.js
- npm ou yarn

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/VictorParizio/orquestre-ratio-frontend.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd orquestre-ratio-frontend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## 📖 Como Usar

Após iniciar o servidor, você pode navegar pela aplicação para:

- Ver a lista de filmes e celebridades.
- Registrar uma nova conta.
- Logar em uma conta existente.
- Atualizar informações da conta.
- Excluir a conta.

## 📁 Estrutura de Pastas

Aqui está uma visão geral da estrutura de pastas do projeto:

```
├── public
├── src
│   ├── assets          # Arquivos estáticos como imagens, fontes, etc.
│   ├── components      # Componentes reutilizáveis
│   ├── hooks           # Custom hooks
|   ├── http            # Configuração do Axios e chamadas à API
│   ├── pages           # Páginas principais da aplicação
│   ├── store           # Configuração do Zustand para gerenciamento de estado
│   ├── styles          # Estilos globais
│   ├── theme           # Tema com styled-components
│   ├── utils           # Funções utilitárias
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Ponto de entrada do React
├── index.html
├── package.json
└── README.md
```

## 🌟 Funcionalidades

- **Listagem de Filmes e Celebridades**: Exibe uma lista de filmes e celebridades consumindo dados de uma API externa.
- **Autenticação de Usuário**: Registro, login, atualização de dados e exclusão de conta.
- **Responsividade**: Interface adaptável para diferentes tamanhos de tela, desde dispositivos móveis até desktops.
- **Gerenciamento de Estado**: Utilização do Zustand para gerenciar o estado global da aplicação.
- **Estilização**: Componentes estilizados utilizando styled-components, facilitando a manutenção e a personalização de temas.

## 🛠️ Tecnologias Utilizadas

- **Vite**: Ferramenta de build rápida para projetos com React.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Zustand**: Gerenciador de estado global para React.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **Styled-components**: Biblioteca para estilização de componentes em React com suporte a temas.

## 🌐 API Externa

Este projeto consome uma API externa para obter informações sobre filmes e celebridades.

API disponível em [themoviedb](https://developer.themoviedb.org/docs/getting-started).

## 🔒 Autenticação e Validação

A aplicação inclui um sistema de autenticação que permite aos usuários registrar, logar e gerenciar suas contas. A validação dos dados é realizada tanto no frontend quanto no backend para garantir a segurança e integridade dos dados.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Autor

**Victor Parizio**

## Contato

Se tiver alguma dúvida, entre em contato

- [Hotmail](victorparizio@hotmail.com)
- [LinkedIn](https://www.linkedin.com/in/victorpariziobackend/)
- [GitHub](https://github.com/VictorParizio)
- [Portifólio](https://portfolio-victor-parizio.vercel.app/)
