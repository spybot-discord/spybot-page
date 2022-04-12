<script context="module">
	export const load = ({ params: { name } }) => ({ props: { name } });
</script>

<script lang="ts">
	import OptionCard from '../../components/OptionCard.svelte';
	import botData from '../../bot.json';
	export let name: string;
	const command: Command =
		botData.commands.find((item) => item.name === name) ||
		botData.moderation.find((item) => item.name === name);
</script>

<svelte:head>
	<title>SpyBot Docs: {name}</title>
</svelte:head>

<header class="p-8">
	<h1 class="inline-block font-title p-4 mb-6 text-6xl border-2 rounded-xl">{command.name}</h1>
	<p>{command.description}</p>
</header>

<OptionCard title="Subcommands" options={command.subcommands} />
<OptionCard title="Args" options={command.args} />
