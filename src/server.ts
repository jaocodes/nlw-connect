import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env'
import { acessInviteLinkRoute } from './routes/acess-invite-link'
import { getSubscriberInviteClicksRoute } from './routes/get-subscriber-invite-clicks'
import { getSubscriberInvitesCountRoute } from './routes/get-subscriber-invites-count'
import { subscribeToEventRoute } from './routes/subscribe-to-event'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
  origin: 'http://localhost:3000',
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Events Subs',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, { routePrefix: '/docs' })

app.register(subscribeToEventRoute)
app.register(acessInviteLinkRoute)
app.register(getSubscriberInviteClicksRoute)
app.register(getSubscriberInvitesCountRoute)

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP server running on port 3333!')
  })
