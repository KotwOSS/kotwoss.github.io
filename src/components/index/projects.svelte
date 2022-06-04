<script lang="ts">
	import { goto } from '$app/navigation';

	import { Triggers } from '$lib/triggers';

	let scrollY: number;
	let innerHeight: number;

	const triggers = new Triggers();

	$: anim = scrollY / innerHeight - 3.085;
	$: if (scrollY < 10 + innerHeight * 2) triggers.resetTriggers();

	$: pinDown = scrollY - 80 < innerHeight * 4;
	$: pin = scrollY - 80 > innerHeight * 3 && pinDown;

	function gotoProjects() {
		goto('/projects');
	}

	function gotoGithub() {
		window.location.assign('https://github.com/orgs/KotwOSS/repositories');
	}
</script>

<svelte:window bind:scrollY bind:innerHeight />

{#if !pinDown}
	<div style:height="100vh" />
{/if}

<main style:position={pin ? 'fixed' : 'relative'}>
	<h1 class:show={triggers.trigger(0, anim > 0)}>Projects</h1>
	<p class:show={triggers.trigger(1, anim > 0.2)}>You can find our projects on here</p>
	<div class="buttons">
		<button class:show={triggers.trigger(2, anim > 0.4)} on:click={gotoProjects}> Projects </button>
		<button class:show={triggers.trigger(3, anim > 0.6)} on:click={gotoGithub}> Github </button>
	</div>
</main>

{#if pinDown}
	<div style:height={pin ? '200vh' : '100vh'} />
{/if}

<style>
	main {
		top: 0;
		left: 0;
		padding: 40px 50px;
		position: fixed;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	@keyframes show {
		from {
			transform: translate(-50px);
		}
		to {
			opacity: 1;
		}
	}

	.show {
		animation: show 0.5s ease forwards;
	}

	main > * {
		opacity: 0;
	}

	h1 {
		font-size: 40px;
		margin-bottom: 10px;
	}

	p {
		font-size: 25px;
        text-align: center;
	}

	.buttons {
		margin-top: 20px;
		display: flex;
		column-gap: 15px;
		opacity: 1;
	}

	.buttons > * {
		opacity: 0;
	}

	button {
		font-size: 25px;
	}
</style>
