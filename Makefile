build-prod:
	npm run build -- --prod --base-href /

start:
	npm start

test:
	npm run test -- --code-coverage

test-integration:
	npm run e2e
