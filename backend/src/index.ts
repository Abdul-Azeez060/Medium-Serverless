import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import user from "./routers/user";
import blog from "./routers/blog";
import { cors } from "hono/cors";
// userid, prisma all are context variables
export const app = new Hono<{
  Variables: {
    userId: string | any;
    prisma: any;
  };
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
app.use("/*", cors());

app.use("*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  await next();
});

app.use("/api/v1/blog/*", async (c, next) => {
  const jwt = c.req.header("Authorization");
  console.log(jwt);
  if (!jwt) {
    c.status(401);
    return c.json({
      error: "not authorized, please sign in",
    });
  }
  const payload = await verify(jwt, c.env?.JWT_SECRET);
  console.log(payload.id, "this is jwt payload");
  c.set("userId", payload.id);
  await next();
});

app.get("/", (c) => {
  return c.json({
    message: "Hey welcome to the serverless backend",
  });
});

app.route("/api/v1/user", user);
app.route("/api/v1/blog", blog);

export default app;
