import 'dotenv/config'
import app from './app'

function bootServer(port: number) {
  return app.listen(port, () => {
    console.log(`[server] running on port ${port}`)
  })
}

const PORT = 3333

bootServer(PORT)
