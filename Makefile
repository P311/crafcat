build: 
	npm install
	npm run build
	if [ -d docs ]; then rm -rf docs; fi
	cp -rf ./dist/crafcat/browser docs

format:
	npx prettier . --write

check_format:
	npx prettier . --check