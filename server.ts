import {fastify} from 'fastify'
import {fastifyCors} from '@fastify/cors'
import {serializerCompiler, validatorCompiler, jsonSchemaTransform, ZodTypeProvider} from 'fastify-type-provider-zod'
import {fastifySwagger} from '@fastify/swagger'
import {fastifySwaggerUi} from '@fastify/swagger-ui'
import z from 'zod'
import { subscribeToEvent } from './src/routes/subscribe-to-event'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
    origin: 'http://localhost:3000'
})

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Events Subs',
            version: '0.0.1'
        }
    },
    transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {routePrefix: '/docs'})

app.register(subscribeToEvent)

app.listen({port: 3333,host: '0.0.0.0'}).then(() => {
    console.log('HTTP server running on port 3333!')
})