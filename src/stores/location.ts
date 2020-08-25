import { writable, Writable } from 'svelte/store';

export const location: Writable<string> = writable(window.location.pathname)