.PHONY: rust build

rust:
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs > rustup
	chmod +x rustup
	rustup --profile minimal -y
	rustup target add x86_64-unknown-linux-musl
	${HOME}/.cargo/bin/rustc --version
	${HOME}/.cargo/bin/cargo --version

build:
	cd rust && cargo build --release --target x86_64-unknown-linux-musl && cp target/release/rusttest ../functions/rusttest
	cp functions/rusttest functions/rusttest2.go
	rm -f public/_redirects
	npm run build:svelte
	mkdir -p functions
	cd go && go build -o ../functions/gotest.go ./...