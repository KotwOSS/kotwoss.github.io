<script lang="ts">
	export let expand: boolean = false;

	export function toggle() {
		expand = !expand;
	}
</script>

<div class="expandable" on:click={toggle}>
	{#if expand}
		<slot />
	{:else}
		<slot name="before" />
	{/if}
</div>

<style>
	.expandable {
		cursor: pointer;
	}
</style>
