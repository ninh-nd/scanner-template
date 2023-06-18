const fastify = require("fastify")({ logger: true });
import { post } from "axios";
import "dotenv/config";
import { spawnSync } from "child_process";

function replaceUnicodeEscapeSequences(text) {
  let decodedText = text.replace(/\\u[0-9a-z]{4}/, (match, p1) =>
    String.fromCharCode(parseInt(p1, 16))
  );
  return decodedText;
}

<code_placeholder>

fastify.get("/", (request, reply) => {
  return reply.send({ message: "Hello World" });
});

fastify.get("/image", async (request, reply) => {
  const { name } = request.query;
  if (!name) {
    return reply.code(400).send({ error: "Missing image name" });
  }
  reply.code(200).send({ message: `Scanning image ${name}` });
  try {
    await processImageScan(name);
  } catch (err) {
    fastify.log.error(err);
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
