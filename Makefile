rust:
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
	${HOME}/.cargo/bin/rustc --version
	${HOME}/.cargo/bin/cargo --version

build:
	rm -f public/_redirects
	npm run build:svelte
	mkdir -p functions
	cd go && go build -o ../functions/gotest.go ./...