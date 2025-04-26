FROM oven/bun:1

WORKDIR /app

# Add bun to PATH
ENV PATH="/root/.bun/bin:${PATH}"

# Install dependencies
COPY package.json .
COPY bun.lock .
RUN bun install

# Copy the rest of the application code
COPY . .

# Start the application
CMD ["bun", "run", "src/index.ts"]
