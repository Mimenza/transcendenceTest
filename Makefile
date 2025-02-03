# Este archivo define comandos útiles para manejar los contenedores Docker.

react:
	docker-compose build
	docker-compose down --remove-orphans
	docker-compose up -d
	docker exec -it react /bin/bash

down:
	docker-compose down

logs:
	docker-compose logs
