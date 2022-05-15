<script context="module">
	export const load = ({ error, status }) => ({
		props: {
			status,
			message: error.message
		}
	});
</script>

<script>
	export let status;
	export let message;
</script>

<main class="text-center">
	<h1 class="text-red-500 font-title text-9xl font-bold my-8">{status}</h1>
	<p class="text-xl">{message}</p>
</main>
