import cors from 'cors'
import express, { Application } from 'express'
import addApiRoutes from './api/routes'


function buildApp(): Application {
  const app = express()

  app.use(cors())

  addApiRoutes(app)

  return app
}

export default buildApp()
