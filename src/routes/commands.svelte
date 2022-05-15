<script>
	import botData from '../bot.json';
</script>

<svelte:head>
	<title>SpyBot Docs</title>
</svelte:head>

{#each botData as command}
	{#if command.subcommands?.length}
		<h3 class="inline-block font-title p-4 mb-2 text-3xl">{command.section}</h3>
		{#each command.subcommands as subcommand}
			<section class="m-4 rounded-md bg-gray-800">
				<h3 class="inline-block px-4 py-2 text-xl font-bold">
					{command.section.toLocaleLowerCase()}
					{subcommand.name}
				</h3>
				<p class="inline-block">{subcommand.description}</p>
				<br />
			</section>
		{/each}
	{:else}
		<section class="m-4 bg-gray-800 rounded-xl">
			<h3 class="inline-block font-title p-4 text-2xl">{command.name}</h3>
			<p class="p-2 inline-block">{command.description}</p>
		</section>
	{/if}
{/each}
