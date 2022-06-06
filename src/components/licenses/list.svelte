<script lang="ts">
	import type { License } from "$lib/licenses";
	import ShortLicense from "$components/licenses/short.svelte";

	export let licenses: License[];
</script>

<div class="licenses">
	{#each licenses as license}
		<ShortLicense bind:license />
	{/each}
</div>

<style>
	.licenses {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		row-gap: 20px;
		column-gap: 20px;
		width: 100%;
	}

	.licenses > :global(*) {
		width: min(600px, 100%);
	}
</style>
