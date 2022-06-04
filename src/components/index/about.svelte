<script lang="ts">
	import Typer from '$components/typer.svelte';
	import { Triggers } from '$lib/triggers';

	const texts = [
		'creators',
		'creative',
		'developers',
		'designers',
		'dreamers',
		'creators',
		'programmers'
	];

	let scrollY: number;
	let innerHeight: number;

	const triggers = new Triggers();

	$: anim = scrollY / innerHeight - 1.085;

	$: if (scrollY < 10) triggers.resetTriggers();

	$: pinDown = scrollY - 80 < innerHeight * 2;
	$: pin = scrollY - 80 > innerHeight && pinDown;

	$: val = innerHeight * 0.45;
</script>

<svelte:window bind:scrollY bind:innerHeight />

{#if !pinDown}
	<div style:height="100vh" />
{/if}

<main
	style:position={pin ? 'fixed' : 'relative'}
	style:opacity={1 - Math.max(0, scrollY - 1.8 * innerHeight - val) / val}
>
	<div class="category left">
		<h1 class:show={triggers.trigger(0, anim > 0)}>Opensource</h1>
		<p class:show={triggers.trigger(1, anim > 0.2)}>
			We are <span><Typer {texts} /></span> and dream of a world where everybody can contribute to make
			software and IT better.
		</p>
	</div>

	<div class="category right">
		<h1 class:show={triggers.trigger(2, anim > 0.4)}>Non profit</h1>
		<p class:show={triggers.trigger(3, anim > 0.6)}>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati deserunt esse,
			doloribus assumenda iure fugiat neque at, quidem nihil eveniet doloremque mollitia magnam modi
			dolores distinctio earum quo cupiditate.
		</p>
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
		padding: 0 max(40px, calc(50vw - 300px));
		flex-direction: column;
		justify-content: space-around;
	}

	.category {
		max-width: 400px;
	}

	.category.left {
		align-self: flex-start;
		text-align: left;
	}

	.category.right {
		align-self: flex-end;
		text-align: right;
	}

	.category > * {
		opacity: 0;
	}

	@keyframes show {
		from {
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
		}
	}

	.show {
		animation: show 0.5s ease forwards;
	}

	span {
		color: var(--color);
	}

	h1 {
		font-size: 35px;
		margin-bottom: 10px;
	}

	p {
		font-size: 20px;
	}
</style>
