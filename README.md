<div align="center">
  <h1>
    <code>Express Typescript API</code>
  </h1>

  <p>
    <strong>
      🍃 A simple Expressjs boilerplate with Typescript. Ready for your APIs! 🍃
    </strong>
  </p>

  <p>
    <img
      alt="GitHub top language"
      src="https://img.shields.io/github/languages/top/kauefraga/express-ts-api.svg"
    />
    <img
      alt="Repository size"
      src="https://img.shields.io/github/repo-size/kauefraga/express-ts-api.svg"
    />
    <a href="https://github.com/kauefraga/express-ts-api/commits/main">
      <img
        alt="GitHub last commit"
        src="https://img.shields.io/github/last-commit/kauefraga/express-ts-api.svg"
      />
    </a>
    <img
      alt="GitHub LICENSE"
      src="https://img.shields.io/github/license/kauefraga/express-ts-api.svg"
    />
  </p>
</div>

## ✨ Features

- **Boilerplate**: Ready for use! Just install it and code!!
- **Architecture**: [Monolithic](https://en.wikipedia.org/wiki/monolithic_application).
- **Linting**: We are using the [Airbnb Style Guide](https://www.npmjs.com/package/eslint-config-airbnb-typescript) to Typescript.
- **Nice Developer Experience**: code with typescript while reloading with tsx.
- **Fast compilation**: Using esbuild everything becomes faster.
- **API production-quality**:
  - [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) configured and Dotenv out of the box.
  - Vitest set up as our test runner.
  - [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) (Date format).
  - Simple versioning implemented (`/v1/examples...`).
  - [Mitigation of DDoS attacks](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack) using request limitations.

## ⬇️ How to download and use it

1. Clone the repository and change the name
2. Copy the environment variables
3. Install the dependencies
4. Build and start
5. Now you can access it at http://localhost:3333/v1

```bash
git clone https://github.com/kauefraga/express-ts-api.git {your-project-name}
cd {your-project-name}

cp .env.example .env

pnpm i --frozen-lockfile

pnpm build
pnpm start

curl http://localhost:3333/v1
```
We are using [PNPM](https://pnpm.io) however feel free to change it to one of your preference.

## 🐳 How to configure a database

This tutorial will use docker because it is the simplest way to configure a database.

1. Install the [Docker](https://www.docker.com).
2. Select the database you want to connect to.
3. Search for an image of that database. (ex.: [redis](https://hub.docker.com/r/bitnami/redis), [postgresql](https://hub.docker.com/r/bitnami/postgresql), [cassandra](https://hub.docker.com/r/bitnami/cassandra)...).
4. Follow the documentation of the image... However, if it is not available try to create a `docker-compose.yml` like [this one](https://gist.github.com/kauefraga/3074c770c789e9faff46b31ff23e8d8d).

Finally, insert the DATABASE URL and the DATABASE PASSWORD into .env
```bash
# Probably the database documentation will has an example of the database string.
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB"

# We recommend you to change DATABASE for the name of your database.
DATABASE_PASSWORD="whatever_password_you_want"
```

## 🛠 Technologies

- 🔥 [CORS](https://npm.im/cors) - Required when we need to control who can access our endpoints.
- 🤫 [Dotenv](https://npm.im/dotenv) - We must hide our secret keys, with dotenv we can load env variables into `process.env` more easily.
- 🔮 [Express](https://expressjs.com) - "Fast, minimalist web framework for Nodejs..."
- 🚓 [Express Rate Limit](https://npm.im/express-rate-limit) - Basic rate-limiting middleware for Express.
- ⚗️ [Vitest](https://vitest.dev) - Implements Jest but with its own ESbuider (out of box typescript, esmodules...).
- 💄 Code styling with [Eslint](https://eslint.org)
  - https://www.npmjs.com/package/eslint-config-airbnb-base
  - https://www.npmjs.com/package/eslint-config-airbnb-typescript
- 🐳 [Docker](https://www.docker.com) - Use virtualization/containerize to turn your "work on my machine" into "our machine".
- 🧑‍💻 [Typescript](https://typescriptlang.org), [tsx](https://www.npmjs.com/package/tsx) and [tsup](https://www.npmjs.com/package/tsup) - Improve the DX by adding type safety and a blazingly fast execution/build provided by esbuild.

# 🗺 Routes View

```bash
# Returns Hello World
GET /v1

# Returns an User
POST /v1/users/create <name>
```

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/express-ts-api/blob/main/LICENSE) for more information.

---

<div align="center">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
