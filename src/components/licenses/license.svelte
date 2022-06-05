<script lang="ts">
	import Expandable from "$components/expandable.svelte";
	import type { License } from "$lib/licenses";

	export let license: License;

	let copy: string | undefined;
	license.fetchCopy().then((c) => (copy = c));
</script>

<div class="license">
	<div class="title">
		<h2>{license.name}</h2>
		<h3>{license.short}</h3>
	</div>
	<p class="short">{@html license.description}</p>

	<div class="terms">
		<div class="permissions">
			<h4>Permissions</h4>
			<ul>
				{#each license.permissions as permission}
					<li>
						<Expandable>
							<p slot="before">{permission.short}</p>
							<p>{permission.description}</p>
						</Expandable>
					</li>
				{/each}
			</ul>
		</div>
		<div class="conditions">
			<h4>Conditions</h4>
			<ul>
				{#each license.conditions as condition}
					<li>
						<Expandable>
							<p slot="before">{condition.short}</p>
							<svelte:fragment>
								<p>{condition.description}</p>
							</svelte:fragment>
						</Expandable>
					</li>
				{/each}
			</ul>
		</div>
		<div class="limitations">
			<h4>Limitations</h4>
			<ul>
				{#each license.limitations as limitation}
					<li>
						<Expandable>
							<p slot="before">{limitation.short}</p>
							<p>{limitation.description}</p>
						</Expandable>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<textarea
		class="raw"
		disabled={true}
		spellcheck="false"
		value={copy ? copy : "Downloading copy..."}
	/>
</div>

<style>
	.raw {
		margin-top: 20px;
		border: var(--license-raw-border);
		background-color: var(--license-raw-background);
		padding: 10px 10px;
		font-size: 14px;
		border-radius: 10px;
		color: var(--color-secondary);
		height: 500px;
		min-height: 500px;
		overflow-y: scroll;
		overflow-x: scroll;
		white-space: pre;
		word-break: keep-all;
		max-width: 100%;
		min-width: 100%;
		outline: none;
	}

	.title > h3 {
		color: var(--color-secondary);
		font-size: min(5vw, 24px);
	}

	.title > h2 {
		font-size: min(5vw, 26px);
	}

	.license {
		padding: 20px 30px;
		font-size: 18px;
		font-weight: 400;
		display: flex;
		flex-direction: column;
		row-gap: 10px;
	}

	.terms {
		margin-top: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		row-gap: 25px;
		column-gap: 10px;
	}

	.terms > div {
		max-width: 200px;
	}

	.terms > div h4 {
		margin-bottom: 5px;
	}

	.terms > div ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		row-gap: 10px;
	}

	.terms > div ul > li {
		display: flex;
		align-items: center;
	}

	.terms > div ul > li > :global(div.expandable) {
		line-height: 0px;
		max-width: calc(100% - 20px);
	}

	.terms > div ul > li > :global(div.expandable > p) {
		font-size: 16px;
		line-height: normal;
	}

	.terms > div ul > li::before {
		content: "";
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 20px;
		margin-right: 7px;
		background-color: var(--bullet-color);
	}

	.permissions {
		--bullet-color: rgb(0, 219, 0);
	}

	.conditions {
		--bullet-color: rgb(0, 81, 255);
	}

	.limitations {
		--bullet-color: rgb(255, 38, 0);
	}
</style>
