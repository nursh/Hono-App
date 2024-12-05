import { describe, expect, expectTypeOf, it } from 'vitest';
import { testClient } from 'hono/testing';

import router from './tasks.index.js';
import createApp, { createTestApp } from '@/lib/create-app.js';

describe('tasks list', () => {
  it('responds with an array', async () => {
    const testRouter = createTestApp(router);
    const response = await testRouter.request('/tasks');
    const result = await response.json();
    console.log(result);
    // @ts-expect-error
    expectTypeOf(result).toBeArray(); 
  })

  it('responds with an array too', async () => {
    const client = testClient(createApp().route('/', router));
    const response = await client.tasks.$get();
    const json = await response.json();
    expectTypeOf(json).toBeArray(); 
  })
  
  it("get /tasks/{id} validates the id param", async () => {
    const client = testClient(createApp().route('/', router));
    const response = await client.tasks[":id"].$get({
      param: {
        // @ts-expect-error
        id: "wat",
      },
    });
    expect(response.status).toBe(422);
  });
})