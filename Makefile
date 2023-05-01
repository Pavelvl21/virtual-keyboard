dev:
			npx webpack serve

build:
			NODE_ENV=production npx webpack

lint:
			npx eslint .
fix:
			npx eslint . --fix

install:
			npm ci