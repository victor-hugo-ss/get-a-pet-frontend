# 🐾 Get a Pet — Frontend

Interface web para a plataforma de adoção de animais. Consome a API REST do backend para permitir que usuários cadastrem pets, gerenciem perfis e realizem solicitações de adoção.

---

## 🚀 Tecnologias

- **[React v19](https://react.dev/)** — Biblioteca de interface
- **[React Router DOM v7](https://reactrouter.com/)** — Navegação entre páginas
- **[Axios](https://axios-http.com/)** — Requisições HTTP
- **[React Icons](https://react-icons.github.io/react-icons/)** — Ícones
- **[Create React App](https://create-react-app.dev/)** — Tooling do projeto

---

## 📁 Estrutura do Projeto

```
├── 📁 public
│   └── 🌐 index.html
├── 📁 src
│   ├── 📁 assets
│   │   └── 📁 img
│   ├── 📁 components
│   ├── 📁 context
│   ├── 📁 hooks
│   ├── 📁 utils
│   ├── 📄 App.js
│   ├── 🎨 index.css
│   └── 📄 index.js
├── ⚙️ .gitignore
├── ⚙️ .prettierrc
├── 📝 README.md
├── ⚙️ package-lock.json
└── ⚙️ package.json
```

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v18+
- Backend do projeto rodando — [get-a-pet-backend](https://github.com/victor-hugo-ss/get-a-pet-backend)

---

## 🛠️ Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/victor-hugo-ss/get-a-pet-frontend.git
cd get-a-pet-frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Inicie o servidor de desenvolvimento
npm start
```

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
REACT_APP_API=http://localhost:5000
```

---

## 🔗 Repositórios do Projeto

| Repositório | Link                                                                       |
| ----------- | -------------------------------------------------------------------------- |
| Backend     | [get-a-pet-backend](https://github.com/victor-hugo-ss/get-a-pet-backend)   |
| Frontend    | [get-a-pet-frontend](https://github.com/victor-hugo-ss/get-a-pet-frontend) |

---

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">Feito para conectar pets e pessoas</p>
