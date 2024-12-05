import { selectTasksSchema } from "@/db/schema.js";
import { createRoute, z } from "@hono/zod-openapi";
import  * as HttpStatusCodes from 'stoker/http-status-codes';
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

const tags = ["Tasks"];

export const list = createRoute({
  path: '/tasks',
  method: 'get',
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(selectTasksSchema),
      'The list of tasks')
  }
})

export const create = createRoute({
  path: '/tasks',
  method: 'post',
  request: {
    // body: jsonContentRequired()
  },
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      selectTasksSchema,
      'The created task')
  }
});

export type ListRoute = typeof list;