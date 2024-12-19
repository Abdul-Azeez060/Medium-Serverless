import { Hono } from "hono";
import { createBlogInput, updateBlogInput } from "@abdulazeez060/common2/dist";

const blog = new Hono<{
  Variables: {
    userId: string | any;
    prisma: any;
  };
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blog.post("/", async (c) => {
  try {
    const prisma = c.get("prisma");
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
      return c.json({
        message: "Incorrect inputs",
      });
    }
    const userId = c.get("userId");
    console.log("this is the start of creating post in db");
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({
      post,
    });
  } catch (error) {
    return c.json({
      error: "error in type",
    });
  }
});

blog.put("/", async (c) => {
  try {
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
      return c.json({
        message: "Incorrect inputs",
      });
    }
    const prisma = c.get("prisma");
    const userId = c.get("userId");
    const post = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      updatedPost: post,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      error: "there is error",
    });
  }
});

blog.get("/bulk", async (c) => {
  try {
    const prisma = c.get("prisma");
    const posts = await prisma.post.findMany({
      select: {
        content: true,
        id: true,
        title: true,
        published: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log(posts);
    return c.json({
      posts,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      error,
    });
  }
});

blog.get("/:id", async (c) => {
  try {
    let id = c.req.param("id");
    const prisma = c.get("prisma");
    console.log(id, "this is the post id");
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      select: {
        content: true,
        id: true,
        title: true,
        published: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      post,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      error: "something went wrong",
    });
  }
});

export default blog;
