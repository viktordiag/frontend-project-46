lint:
	npx eslint --fix .
test-coverage:
	npm test -- --coverage --coverageProvider=v8
test:
	npm test
run:
	gendiff __fixtures__/file1.json __fixtures__/file2.json	 
