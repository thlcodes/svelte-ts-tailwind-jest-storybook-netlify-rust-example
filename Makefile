build:
	npm run build:svelte
	mkdir -p functions
	cd go && go build -o ../functions/gotest ./...