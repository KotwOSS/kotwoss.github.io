<script lang="ts">
	import type { License } from "$lib/licenses";

	export let license: License;
</script>

<a class="license" href="/licenses/?id={license.descriptor}">
	<div class="title">
		<h2>{license.name}</h2>
		<h3>{license.short}</h3>
	</div>
	<p class="short">{@html license.description}</p>
</a>

<style>
	.title > h3 {
		color: var(--color-secondary);
		font-size: min(5vw, 24px);
		margin-bottom: 10px;
	}

	.title > h2 {
		font-size: min(5vw, 26px);
	}

	.license {
		padding: 20px 30px;
		border: var(--license-border);
		border-radius: 10px;
		transition: all 0.3s ease;
		font-size: 18px;
		font-weight: 400;
	}
</style>
