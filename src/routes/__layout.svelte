<script>
	import '../app.css';
	import { base } from '$app/paths';
	let hidden = true;
</script>

<svelte:head>
	<meta property="og:image" content="{base}/spy-bot.png" />
	<meta name="description" content="Page for the spybot discord bot!" />
	<title>Spy Bot</title>
</svelte:head>

<nav class="fixed w-full top-0 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<a href="{base}">
			<img src="{base}/spy-bot.png" class="mr-3 h-16 rounded-full inline-block" alt="Spy Bot" />
			<p class="inline-block text-2xl font-title">Spy Bot</p>
		</a>
		<button
			data-collapse-toggle="mobile-menu"
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="mobile-menu"
			aria-expanded="false"
			on:click="{() => (hidden = !hidden)}"
		>
			<span class="sr-only">Open main menu</span>
			<svg class:hidden="{!hidden}" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"></path></svg
			>
			<svg class:hidden class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"></path></svg
			>
		</button>
		<div class:hidden class="w-full md:block md:w-auto" id="mobile-menu">
			<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
				<li>
					<a
						href="{base}/"
						class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="https://eldiplayz.gitbook.io/spy-bot-docs/"
						target="_blank"
						class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white"
						aria-current="page">Docs</a
					>
				</li>
				<li>
					<a
						href="{base}/commands"
						class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						>Commands</a
					>
				</li>
				<li>
					<a
						href="{base}/dashboard"
						class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						>Dashboard</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<div class="mt-28">
	<slot />
</div>
