<script lang="ts">
	export let title: string;
	export let img: string | string[];
	export let imgAlt: string;
</script>

<section class="mb-8 mt-8 p-6 rounded-3xl">
	<h3 class="text-4xl font-text font-bold mb-3">{title}</h3>
	<p class="text-lg mb-4"><slot /></p>
	{#if typeof img === 'string'}
		<img class="rounded-lg" src={img} alt={imgAlt} />
	{:else}
		{#each img as image}
			<img class="rounded-lg mb-2" src={image} alt={imgAlt} />
		{/each}
	{/if}
</section>
