# Este archivo define comandos útiles para manejar los contenedores Docker.

.PHONY: react react-ts down

react:
	docker-compose up --build react

react-ts:
	docker-compose up --build react-ts

sqLite:
	docker-compose up --build docker-sqlite

adminer:
	docker-compose up --build docker-adminer

down:
	docker-compose down

logs:
	docker-compose logs
