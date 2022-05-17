<script context="module">
	export const load = ({ error, status }) => ({
		props: {
			status,
			message: error.message,
		},
	});
</script>

<script lang="ts">
	export let status: number;
	export let message: string;
</script>

<svelte:head>
	<title>Spy Bot: {status}</title>
</svelte:head>

<main class="text-center">
	<h1 class="text-red-500 font-title text-9xl font-bold my-8">{status}</h1>
	<p class="text-2xl font-semibold">{message}</p>
</main>
