<script lang="ts">
	import type { Project } from "$lib/projects";
	import ShortProject from "$components/projects/short.svelte";

	export let projects: Project[];
</script>

<div class="projects">
	{#each projects as project}
		<ShortProject bind:project />
	{/each}
</div>

<style>
	.projects {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		row-gap: 20px;
		column-gap: 20px;
		width: 100%;
	}

	.projects > :global(*) {
		width: min(600px, 100%);
	}
</style>
