import z from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  POSTGRES_URL: z.string().url(),
  REDIS_URL: z.string().url(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Environment validation error:', _env.error.format())

  throw new Error('Environment validation error')
}

export const env = _env.data