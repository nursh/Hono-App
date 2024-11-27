import { z, ZodError } from 'zod'
import { config } from "dotenv";
import { expand } from "dotenv-expand";

expand(config());

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(9999),
  LOG_LEVEL: z.enum(['fatal', 'error', 'debug', 'warn', 'trace']) 
})

export type Env = z.infer<typeof EnvSchema>
let env: Env;

try {
  env = EnvSchema.parse(process.env);
} catch(e) {
  const error = e as ZodError;
  console.error('Invalid env file')
  console.error(error.flatten().fieldErrors);
  process.exit(1);
}
export default env