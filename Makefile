.PHONY: rust build

rust:
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --profile minimal -y
	export PATH="${HOME}/.cargo/bin:${PATH}"
	rustup --version
	rustc --version
	cargo --version
	#rustup target add x86_64-unknown-linux-musl

build:
	mkdir -p functions
	cd rust && cargo build --release && cp target/release/rusttest ../functions/rusttest
	cp functions/rusttest functions/rusttest2.go
	cd go && go build -o ../functions/gotest.go ./...
	npm run build:svelte
	rm -f public/_redirectsmake