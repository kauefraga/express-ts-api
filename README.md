<h1 align="center">Server Structure</h1>

<p align="center">
  <img
    alt="GitHub top language"
    src="https://img.shields.io/github/languages/top/kauefraga/server-structure.svg"
  />
  <img
    alt="Repository size"
    src="https://img.shields.io/github/repo-size/kauefraga/server-structure.svg"
  />
  <a href="https://github.com/kauefraga/server-structure/commits/main">
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/kauefraga/server-structure.svg"
    />
  </a>
  <img
    alt="GitHub LICENSE"
    src="https://img.shields.io/github/license/kauefraga/server-structure.svg"
  />
</p>

<h4 align="center">I'm building a "template" for server with Expressjs framework</h4>

## ⬇️ How to download

```bash
git clone https://github.com/kauefraga/server-structure.git
cd server-structure

npm install
npm run build
npm run start
```

Or downloading with yarn? `yarn && yarn build && yarn start`
<br/>
Sincerely, i prefer pnpm so: `pnpm i && pnpm build && pnpm start`

## ✨ Features

- **Architecture**: [Monolithic](https://en.wikipedia.org/wiki/Monolithic_application)
- **Linters**: Eslint airbnb typescript
- Ready to create tests
- CORS and Dotenv setup
- Nice developer experience with **Typescript**
- API production-quality with:
  - ISO 8601 (Date format)
  - Version like _`GET /v1`_
  - Request limitations

## 💻 Technologies

- 🔥 [CORS](https://npmjs.com/package/cors)
  > Required when we need to control who can access our endpoints
- 🤫 [Dotenv](https://npmjs.com/package/dotenv)
  > We must hide our secret keys, with dotenv we can load env variables into `process.env` more easily
- 🔮 [Express](https://expressjs.com)
  > "Fast, minimalist web framework for Nodejs..."
- ⚗️ Running tests on [Vitest](https://vitest.dev)
  > Implements Jest but with its own ESbuider (out of box typescript, esmodules...)
<<<<<<< HEAD
- 💄 Code styling with [Eslint](https://eslint.org)
  - https://www.npmjs.com/package/eslint-config-airbnb-base
  - https://www.npmjs.com/package/eslint-config-airbnb-typescript
=======
- 💄 Code ruling with [Eslint](https://eslint.org)
  > "...statically analyzes your code to quickly find problems"
>>>>>>> 07fb3cf7c0ada1993f416e9049a375cbcf4b103f
- 🧑‍💻 Developed on [Typescript](https://typescriptlang.org) + [TS-Node-Dev](https://npmjs.com/package/ts-node-dev)
  > Improve dev experience by adding type safety

## 🗃️ Project tree view

```bash
.
├─ src
│  ├─ core
<<<<<<< HEAD
│    ├─ entities
│    ├─ repositories
=======
>>>>>>> 07fb3cf7c0ada1993f416e9049a375cbcf4b103f
│  ├─ http
│    ├─ controllers
│    ├─ middlewares
│    ├─ types
│    ├─ app.ts
│    ├─ routes.ts
│    ├─ server.ts
│  ├─ infra
<<<<<<< HEAD
│    ├─ db.ts # in memory
├─ .eslintrc.json
├─ vite.config.ts
=======
├─ .eslintrc.json
├─ vitest.config.ts
>>>>>>> 07fb3cf7c0ada1993f416e9049a375cbcf4b103f
└─ tsconfig.json
```

```bash
# Available http routes
GET /v1 -> Hello World
POST /v1/users/create <name> -> User
```

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/server-structure/blob/main/LICENSE) for more information.

---

<div align="center">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
