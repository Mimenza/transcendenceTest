# Este archivo define comandos útiles para manejar los contenedores Docker.

.PHONY: react react-ts down

react:
	docker-compose up --build react

react-ts:
	docker-compose up --build react-ts

down:
	docker-compose down

logs:
	docker-compose logs
