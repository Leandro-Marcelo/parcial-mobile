build:
	rm -rf www
	rm -rf ios
	rm -rf android
	ionic build
	ionic cap add ios
	ionic cap add android

build-web:
	rm -rf www
	ionic build

open: build
	ionic cap open ios
	ionic cap open android

run: open
	ionic serve --port 3001

start-dev:
	ionic serve --port 3001
