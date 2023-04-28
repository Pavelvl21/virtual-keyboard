dev:
			npx webpack serve

build:
			NODE_ENV=production npx webpack

lint:
			npx eslint .