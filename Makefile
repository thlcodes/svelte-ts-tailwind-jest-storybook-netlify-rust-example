.PHONY: rust build

rust:
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --profile minimal -y
	${HOME}/.cargo/bin/rustup --version
	${HOME}/.cargo/bin/rustc --version
	${HOME}/.cargo/bin/cargo --version
	#rustup target add x86_64-unknown-linux-musl

build:
	mkdir -p functions
	cd rust && ${HOME}/.cargo/bin/cargo build --release && cp target/release/rusttest ../functions/rusttest
	cp functions/rusttest functions/rusttest2.go
	cd go && go build -o ../functions/gotest.go ./...
	npm run build:svelte
	rm -f public/_redirects