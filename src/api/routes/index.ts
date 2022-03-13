import { Application } from 'express'
import hello from './hello'

// TODO: Automate the routes. like forEach
function addApiRoutes (app: Application): void {
  app.use('/', hello)
}

export default addApiRoutes
