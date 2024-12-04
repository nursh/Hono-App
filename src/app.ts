import configureOpenAPI from "./lib/configure-open-api.js";
import createApp from "./lib/create-app.js";
import index from '@/routes/index.routes.js';

const app = createApp();

const routes = [
  index
];

configureOpenAPI(app);
routes.forEach((route) => {
  app.route('/', route);
})

export default app;