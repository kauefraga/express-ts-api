<h1 align="center">Server "boilerplate"</h1>

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

<h4 align="center">I'm building a "template" for server with express</h4>

## ⬇️ How to download

```bash
git clone https://github.com/kauefraga/server-boilerplate.git
cd server-boilerplate
npm install
npm run dev
```

Or downloading with yarn? `yarn && yarn dev`
<br/>
Sincerely, i prefer pnpm so: `pnpm i && pnpm dev`

## ✨ Features

- **Architecture**: [Monolithic](https://en.wikipedia.org/wiki/Monolithic_application)
- **Linters**: Prettier
- Ready to create tests
- CORS and Dotenv setup
- Nice developer experience with **Typescript** and **Path Mapping**
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
- ⚗️ Running tests on [Jest](https://jestjs.io) + [SWC](https://swc.rs)
  > Jest is a simple testing framework for JavaScript
- 💄 Code styling with [Prettier](https://prettier.io)
  > "...opinionated code formatter"
- 🗺️ Path mapping with [Tsconfig-paths](https://npmjs.com/package/tsconfig-paths)
  > Add import path alias making importations shorter (i.e. `../../../` to `@something/`)
- 🧑‍💻 Developed on [Typescript](https://typescriptlang.org) + [TS-Node-Dev](https://npmjs.com/package/ts-node-dev)
  > Improve dev experience by adding type safety

## 🗃️ Project tree view

```bash
# last change - 22:56 09/09/2022
.
├─ __tests__
├─ LICENSE
├─ package.json
├─ README.md
├─ src
│  ├─ controllers
│  ├─ middlewares
│  ├─ types
│  ├─ app.ts
│  ├─ routes.ts
│  ├─ server.ts
├─ .prettierrc.json
├─ jest.config.ts
└─ tsconfig.json
```

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/server-structure/blob/main/LICENSE) for more information.

---

<div align="center">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
