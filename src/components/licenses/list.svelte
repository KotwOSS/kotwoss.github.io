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
		flex-direction: column;
		row-gap: 20px;
	}
</style>
