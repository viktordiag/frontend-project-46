lint:
	npx eslint --fix .
test-coverage:
	npm test -- --coverage --coverageProvider=v8
test:
	npm test
