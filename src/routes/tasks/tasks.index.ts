import { createRouter } from "@/lib/create-app.js";
import * as handlers from './tasks.handlers.js';
import * as routes from './tasks.routes.js';

const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)

export default router;