/// <reference types="@sveltejs/kit" />

interface Option {
	name: string;
	description: string;
}

interface Command {
	name: string;
	description: string;
	subcommands?: Option[];
	args?: Option[];
}

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
