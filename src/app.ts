import createApp from "./lib/create-app.js";

const app = createApp();

app.get('/', (c) => {
  return c.text('Hello Hono!');
})

app.get('/error', (c) => {
  c.status(422);
  throw new Error("Something bad happened here")
})

export default app;