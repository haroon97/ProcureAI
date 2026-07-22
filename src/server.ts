import Fastify from "fastify";

const app = Fastify({
  logger: true
});

app.get('/health', async function handler (request, reply) {
  return { ok: true }
});

try {
  app.listen({ port: 3000 })
} catch (error) {
  app.log.error(error);
  process.exit(1);
}