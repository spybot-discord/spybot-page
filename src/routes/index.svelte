<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>SpyBot Intro</title>
</svelte:head>

<main class="p-16">
	<header class="flex border-2 rounded-xl shadow-2xl p-4">
		<img src="{base}/spy-bot.png" alt="Spy-bot" width="100" height="100" />
		<h1 class="ml-6 text-6xl self-center font-medium font-title">Spy Bot</h1>
	</header>
	<p class="pt-6 text-lg">
		Spy Bot is an AntiNuke, AntiRaiders and server management server to keep a nice and clean
		community
	</p>
	<button class="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 my-4 px-4 rounded">
		<a target="_blank" href="https://discord.gg/gjezsDb3EY">🔗 Join our Discord Support Server</a>
	</button>
	<button class="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 my-4 px-4 rounded">
		<a
			target="_blank"
			href="https://discord.com/api/oauth2/authorize?client_id=939629038178295828&permissions=8&scope=bot%20applications.commands"
			>🎉 Invite</a
		>
	</button>
</main>
