# Docker Workshop

## Running the app

### Install Bun

```bash
# Linux & macOS
curl -fsSL https://bun.sh/install | bash

# Windows
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Install dependencies

```bash
bun install
```

### Run the app

```bash
bun start
```

## Building Docker image and running it manually

### Build the image

```bash
# Build the docker image with the name "example-app"
# that we can be used later to run the app.
docker build -t example-app .
```

### Run the container

```bash
# Run the app with:
# - Container port 4321 mapped to host port 3000
# - PORT environment variable set to "4321"
# - The new container name "my-app"
# - The image "example-app" that we created before
# - The container detached from the shell
docker run -p 3000:4321 -e PORT=4321 --name my-app -d example-app
```

Going to the browser and opening `http://localhost:3000` should show the app running.

### List running containers

```bash
docker ps
# IMAGE        COMMAND               CREATED        STATUS        PORTS                   NAMES
# example-app  bun run src/index...  7 seconds ago  Up 7 seconds  0.0.0.0:3000->4321/tcp  my-app
```

### Stopping the container

```bash
docker stop my-app
```

### Removing the container

```bash
docker rm my-app
```

## Building Docker image and running it with Docker Compose

Docker Compose allows you to declare services and their configuration, which makes it so you can rebuild and run one or more images/containers with one short command. Port mappings, environment variables, and other configurations can be declared in a `compose.yml` file.

Example compose:

```yaml
# compose.yml
services:
  my-app:
    build:
      context: .
      dockerfile: Dockerfile
    environment:
      PORT: 4321
    ports:
      - "3000:4321"
```

### Build and run the container

```bash
docker compose up -d --build
```

### Remove all the created resources (besides volumes)

```bash
docker compose down
```
