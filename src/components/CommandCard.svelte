<script lang="ts">
	import { base } from '$app/paths';

	export let title: string;
	export let list: Command[] | Option[];
</script>

<div class="max-w-sm rounded shadow-2xl m-5">
	<div class="px-6 p-4">
		<h3 class="font-bold font-title text-2xl mb-2">{title}</h3>
		{#each list as { name }}
			<a href="{base}/docs/{name}" class="text-gray-400 hover:text-white text-base"> - {name}</a>
			<br />
		{/each}
	</div>
</div>
