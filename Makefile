
start: 
	docker compose up -d
	docker-compose exec server npm run p:d:m
	docker-compose exec server npm run seed
	docker-compose exec server npm run start

server-start: 
	docker-compose exec server npm run start

client-start:
	docker-compose exec client npm run dev

stop: 
	docker compose down

stop-remove: 
	docker compose down --remove-orphans --volumes --timeout 0

db: 
	docker-compose exec server npm run p:d:m

restart: stop start

.PHONY: start stop
