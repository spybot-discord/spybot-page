<script>
	import CommandCard from '../../components/CommandCard.svelte';
	import botData from '../../bot.json';
</script>

<svelte:head>
	<title>SpyBot Docs</title>
</svelte:head>

<CommandCard title="Commands" list={botData.commands} />
<CommandCard title="Moderating" list={botData.moderation} />
