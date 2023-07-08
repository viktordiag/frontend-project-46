lint:
	npx eslint --fix .
test-coverage:
	npm test -- --coverage --coverageProvider=v8
test:
	npm test
run:
	gendiff __fixtures__/file1.json __fixtures__/file2.json	 
runYaml:
		gendiff __fixtures__/file3.yaml __fixtures__/file4.yaml

install:
	npx ci
say-hello:
	echo Hello!
