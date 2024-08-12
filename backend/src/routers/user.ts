import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@abdulazeez060/common2/dist";

const user = new Hono<{
  Variables: {
    userId: string | any;
    prisma: any;
  };
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// signup route
user.post("/signup", async (c) => {
  const prisma = c.get("prisma");
  try {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);

    if (!success) {
      return c.json({
        error: "incorrect inputs",
      });
    }
    const user = await prisma.user.create({
      data: {
        email: body.username,
        password: body.password,
        name: body.name,
      },
    });
    console.log(user);
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    c.header("Authorization", jwt);
    return c.json({ jwt });
  } catch (error) {
    c.status(403);
    return c.json("db error");
  }
});

user.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    return c.json({
      message: "Incorrect inputs",
    });
  }
  const prisma = c.get("prisma");
  const user = await prisma.user.findUnique({
    where: {
      email: body.username,
    },
  });
  if (!user) {
    c.status(403);
    return c.json("Email does not exits");
  }
  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  c.header("Authorization", jwt);
  return c.json({ jwt });
});

export default user;
