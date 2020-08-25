.PHONY: rust svelte netlify vercel

rust:
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --profile minimal -y
	${HOME}/.cargo/bin/rustup --version
	${HOME}/.cargo/bin/rustc --version
	${HOME}/.cargo/bin/cargo --version
	${HOME}/.cargo/bin/rustup target add x86_64-unknown-linux-musl
	cd rust && ${HOME}/.cargo/bin/cargo build --release --target x86_64-unknown-linux-musl && cp target/x86_64-unknown-linux-musl/release/rusttest ../functions/rusttest
	cp functions/rusttest functions/rusttest2.go

go:
	mkdir -p functions
	cd go && go build -o ../functions/gotest.go ./...

svelte:
	npm run build:svelte
	rm -f public/_redirects

netlify: go svelte

vercel: svelte