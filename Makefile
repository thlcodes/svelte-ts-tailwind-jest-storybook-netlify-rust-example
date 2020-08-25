.PHONY: rust svelte netlify vercel

svelte:
	npm run build:svelte

vercel: svelte