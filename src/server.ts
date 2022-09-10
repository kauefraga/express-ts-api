import 'dotenv/config';
import app from './app';

function bootServer(port: string | number) {
  return app.listen(port, () => {
    console.log(
      `[server] running on port http://localhost:${port}/v1/docs`
    );
  });
}

const PORT = process.env.PORT || 3333;

bootServer(PORT);
