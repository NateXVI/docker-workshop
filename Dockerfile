FROM oven/bun:1

WORKDIR /app

# Install dependencies
COPY package.json .
COPY bun.lock .
RUN bun install

# Copy the rest of the application code
COPY . .

# Start the application
CMD ["bun", "run", "src/index.ts"]
