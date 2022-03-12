import cors from 'cors'
import express, { Application } from 'express'
import addApiRoutes from '@routes/index'

function buildApp (): Application {
  const app = express()

  app.use(cors())

  addApiRoutes(app)

  return app
}

export default buildApp()
