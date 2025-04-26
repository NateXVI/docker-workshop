import { serve } from "bun";
import index from "./index.html";
import { sql } from "bun";

// set up the database
await sql`
  CREATE TABLE IF NOT EXISTS views (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    count INT DEFAULT 0 NOT NULL
  );

  INSERT INTO views (name, count)
  VALUES ('index.html', 0)
  ON CONFLICT (name) DO NOTHING;
`.simple();

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/view": {
      async GET(req) {
        const [views] = await sql`
          UPDATE views
          SET count = count + 1
          WHERE name = 'index.html'
          RETURNING count;
        `;
        console.log(views);
        return Response.json({ count: views.count });
      },
    },

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async (req) => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
