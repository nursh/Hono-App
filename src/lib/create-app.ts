
import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { pinoLogger } from "../middlewares/pino-logger.js";
import type { AppBindings, AppOpenAPI } from "./types.js";
import { defaultHook } from "stoker/openapi";


export function createRouter() {
  return new OpenAPIHono<AppBindings>({ strict: false, defaultHook: defaultHook });
}

export default function createApp() {

  const app = createRouter();
  app.use(pinoLogger());
  app.use(serveEmojiFavicon('🙈'));
  
  app.notFound(notFound)
  app.onError(onError);

  return app;
}

export function createTestApp(router: AppOpenAPI) {
  const testApp = createApp();
  testApp.route('/', router);
  return testApp;
}
