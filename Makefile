.PHONY: rust build

rust:
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --profile minimal -y
	${HOME}/.cargo/bin/rustup --version
	${HOME}/.cargo/bin/rustc --version
	${HOME}/.cargo/bin/cargo --version

build:
	mkdir -p functions
	cd rust && cargo build --release --target x86_64-unknown-linux-musl && cp target/release/rusttest ../functions/rusttest
	cp functions/rusttest functions/rusttest2.go
	cd go && go build -o ../functions/gotest.go ./...
	npm run build:svelte
	rm -f public/_redirects