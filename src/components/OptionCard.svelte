<script lang="ts">
	export let title: string;
	export let options: Option[];
</script>

{#if options}
	<div class="max-w-lg rounded shadow-2xl m-5">
		<h2 class="pl-8 text-2xl font-bold">{title}</h2>
		<ul class="p-8">
			{#each options as option}
				<li class="p-2 flex">
					<h3 class="font-bold underline">{option.name}:&nbsp</h3>
					<p>{option.description}</p>
				</li>
			{/each}
		</ul>
	</div>
{/if}
