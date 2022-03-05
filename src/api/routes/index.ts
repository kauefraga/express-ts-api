import hello from './hello'
import {
  Application/*,
  Request, 
  Response, 
  NextFunction */
} from 'express'

// const BASE_ROUTE = process.env.BASE_URL



// const API_ROUTE_MAP = {
//   "/": hello
// }

// TODO: Automate the routes. like forEach
function addApiRoutes(app: Application): void {
  app.use('/', hello)
}

export default addApiRoutes
