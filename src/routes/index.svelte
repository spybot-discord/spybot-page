<script>
	import FeatureSection from '../components/FeatureSection.svelte';
</script>

<main class="p-10">
	<header class="text-center">
		<h1 class="text-4xl font-title">One Bot, One Community</h1>
		<button class="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 my-4 px-4 rounded">
			<a target="_blank" href="https://discord.gg/gjezsDb3EY">🔗 Join our Discord Support Server</a>
		</button>
		<button class="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 my-4 px-4 rounded">
			<a target="_blank" href="https://discord.com/api/oauth2/authorize?client_id=939629038178295828&permissions=8&scope=bot%20applications.commands"
				>🎉 Invite</a
			>
		</button>
	</header>
	<div class="grid grid-cols-2 content-center">
		<FeatureSection
			title="Verification"
			img="https://cdn.discordapp.com/attachments/968151394488057916/975457278704644106/unknown.png"
			imgAlt="Verification Showcase Image"
			>You can easily set <b>CAPTCHA</b> verification, users will get <b>CAPTCHA</b> message to verify themselves and Spy Bot will want them to enter the
			code they got in order to be verified.
		</FeatureSection>
		<FeatureSection
			title="Whitelist"
			img="https://cdn.discordapp.com/attachments/968151394488057916/975461091331174520/unknown.png"
			imgAlt="Whitelist Showcase Image"
		>
			There are some people that should not be affected by the logging system, you can easily add them to the whitelist where they are not affected.
		</FeatureSection>
		<FeatureSection
			title="Logging System"
			img="https://cdn.discordapp.com/attachments/940689101517119488/975465631329710090/unknown.png"
			imgAlt="Logging System Showcase Image"
			>Some actions are best to keep track of, like creation of channels, kicks, removal of roles, etc..., Spy Bot has a logging system that will log
			every action like this and will punish the user once it gets to a configured limit.
		</FeatureSection>
		<FeatureSection
			title="Suggestions"
			img="{[
				'https://media.discordapp.net/attachments/940689084349833267/975469471126941777/unknown.png',
				'https://media.discordapp.net/attachments/940689084349833267/975469923310637116/unknown.png',
			]}"
			imgAlt="Suggestions Showcase Image"
			>Users may want to help you grow your server and give you awesome ideas!, that's where Spy Bot's suggestions come in. They allow you to send a
			suggestion to a certain channel and people can upvote it or downvote it.
		</FeatureSection>
		<FeatureSection
			title="Quarantine"
			img="https://media.discordapp.net/attachments/940689101517119488/975794889382055947/unknown.png?width=352&height=424"
			imgAlt="Quarantine Showcase Image"
			><b>Users/Bots</b> may be trying to raid your servers, that's where quarantine comes in, it will prevent users from doing anything that may cause
			harm to your server.
		</FeatureSection>
		<FeatureSection
			title="Moderation"
			img="https://cdn.discordapp.com/attachments/940689101517119488/975481957020483744/unknown.png"
			imgAlt="Moderation Commands Showcase Image"
		>
			Act fast! If a user is being harmful to your server, you can use commands such as kick or ban to moderate
		</FeatureSection>
	</div>
</main>
