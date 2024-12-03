
import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { pinoLogger } from "../middlewares/pino-logger.js";
import type { AppBindings } from "./types.js";


export function createRouter() {
  return new OpenAPIHono<AppBindings>({ strict: false });
}

export default function createApp() {

  const app = createRouter();
  app.use(pinoLogger());
  app.use(serveEmojiFavicon('🙈'));
  
  app.notFound(notFound)
  app.onError(onError);

  return app;
}
