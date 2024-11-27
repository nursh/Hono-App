import env from "@/env.js";
import { pinoLogger as logger } from "hono-pino";


export function pinoLogger() {

  return logger({
    pino: {
      level: env.LOG_LEVEL || 'info',
    }
  });
}
  