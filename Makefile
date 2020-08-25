rust:
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
	source $HOME/.cargo/env
	rustc --version
	cargo --version

build:
	rm -f public/_redirects
	npm run build:svelte
	mkdir -p functions
	cd go && go build -o ../functions/gotest.go ./...