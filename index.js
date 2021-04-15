const fastify = require('fastify')({ logger: true });

fastify.register(require('fastify-static'), require('./config/static').public);
fastify.register(require('fastify-static'), require('./config/static').assets);
fastify.register(require('fastify-static'), require('./config/static').forms);

// Declare a route
//fastify.get('/', async (request, reply) => {
//  return { Hello: 'world' }
//})

// Declare a route
//fastify.get('/process', async (request, reply) => {
//  return { loading: 'process' }
//})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()