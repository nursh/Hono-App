import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";
import { pinoLogger } from "./middlewares/pino-logger.js";
import type { PinoLogger } from "hono-pino";


interface AppBindings {
  Variables: {
    logger: PinoLogger
  }
}

const app = new OpenAPIHono<AppBindings>();
app.use(pinoLogger());

app.get('/', (c) => {
  return c.text('Hello Hono!');
})

app.get('/error', (c) => {
  c.status(422);
  throw new Error("Something bad happened here")
})

app.notFound(notFound)
app.onError(onError);

export default app;