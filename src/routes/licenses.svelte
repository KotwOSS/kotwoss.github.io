<script lang="ts">
	import { afterNavigate } from "$app/navigation";

	import Header from "$components/header.svelte";
	import Navbar from "$components/navbar.svelte";
	import Typer from "$components/typer.svelte";

	import LicenseList from "$components/licenses/list.svelte";
	import LicenseComponent from "$components/licenses/license.svelte";

	import { licenses_texts } from "$lib/config";

	import { fade } from "svelte/transition";

	import { License, licenses } from "$lib/licenses";

	let search = window.location.search;
	$: params = new URLSearchParams(search);
	$: licenseId = params.get("id");

	let license: License | undefined;
	$: license = licenseId ? licenses.find((p) => p.descriptor === licenseId) : undefined;

	afterNavigate(function ({ to }) {
		search = to.search;
	});
</script>

<main>
	<Navbar />
	<Header>
		<h1 class="header">Licenses</h1>
		<p class="header">A list of <span><Typer texts={licenses_texts} /></span> Licenses</p>
	</Header>

	<div class="content" in:fade={{ duration: 200 }}>
		{#if license}
			<LicenseComponent bind:license />
		{:else}
			<LicenseList {licenses} />
		{/if}
	</div>
</main>

<style>
	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.content {
		padding: 40px 0;
		margin: auto;
		max-width: 600px;
	}

	main {
		min-height: 100vh;
		animation: 0.5s show 1 ease;
	}

	span {
		font-weight: 600;
		color: var(--header-color);
	}
</style>
