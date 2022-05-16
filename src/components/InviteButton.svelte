<script lang="ts">
	export let url: string;
</script>

<button class="bg-slate-700 transition-all hover:bg-slate-800 text-white font-bold py-2 my-4 px-4 rounded">
	<a target="_blank" href="{url}"><slot /></a>
</button>
