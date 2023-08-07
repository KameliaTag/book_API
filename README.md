
## Requirements

- Docker
- Docker Compose
- Node js
- Vue js
- postgreSQL
- Prisma

## Project setup

### Docker Compose Startup

```sh
docker-compose up -d
```

### Install Node Dependencies

```sh
docker-compose exec server npm install
```

### Install Vue Dependencies

```sh
docker-compose exec client npm install
```

## Lunch client

```sh
docker-compose exec client npm run dev
```

## Lunch server

```sh
docker-compose exec server npm run start
```

## Migration

```sh
docker-compose exec server npm run p:d:m
```

## Run Fixture

```sh
docker-compose exec server npm run seed
```

