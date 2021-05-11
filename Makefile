.PHONY: up down

# Start the Docker Compose stack.
up:
	docker-compose up

# Stop the Docker Compose stack.
down:
	docker-compose down

app:
	docker-compose exec app bash