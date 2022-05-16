<script>
	import botData from '../commands.json';
</script>

<svelte:head>
	<title>Spy Bot: Commands</title>
</svelte:head>

{#each botData as command}
	{#if command.subcommands?.length}
		<h3 class="inline-block font-title p-4 mb-2 text-3xl">{command.section}</h3>
		<section class="m-4 rounded-2xl border-2 bg-gray-800">
			{#each command.subcommands as subcommand}
				<h3 class="rounded-full m-2 text-gray-800 bg-white inline-block px-4 py-2 text-xl font-bold">
					{command.section.toLocaleLowerCase()}
					{subcommand.name}
				</h3>
				<p class="inline-block">{subcommand.description}</p>
				<br />
			{/each}
		</section>
	{:else}
		<section class="m-4 border-2 bg-gray-800 rounded-xl">
			<h3 class="text-gray-800 rounded-lg bg-white inline-block font-title p-4 text-2xl">{command.name}</h3>
			<p class="p-2 inline-block">{command.description}</p>
		</section>
	{/if}
{/each}
