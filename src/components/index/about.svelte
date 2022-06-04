<script lang="ts">
	import { resetTriggers, trigger } from '$lib/store';
	import Typer from '$components/typer.svelte';

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

	$: anim = scrollY / innerHeight - 0.9;
	$: if (anim < 0) resetTriggers();
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="spacer" />
<main style:opacity={anim > 0 ? 1 : 0}>
	<div class="category left">
		<h1 class:show={trigger(0, anim > 0)}>Opensource</h1>
		<p class:show={trigger(1, anim > 0.1)}>
			We are <span><Typer {texts} /></span> and dream of a world where everybody can contribute to make
			software and IT better.
		</p>
	</div>

	<div class="category right">
		<h1 class:show={trigger(2, anim > 0.2)}>Clean Code</h1>
		<p class:show={trigger(3, anim > 0.3)}>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati deserunt esse,
			doloribus assumenda iure fugiat neque at, quidem nihil eveniet doloremque mollitia magnam modi
			dolores distinctio earum quo cupiditate.
		</p>
	</div>
</main>

<style>
	.spacer {
		height: calc(200vh);
	}

	main {
		top: 0;
		left: 0;
		padding: 40px 50px;

		position: fixed;
	}

	.category {
		max-width: 400px;
	}

	.category.left {
		text-align: left;
		transform: translate(calc(max(0px, calc(100vw - 800px)) / 2), calc(20vh - 50%));
	}

	.category.right {
		text-align: right;
		transform: translate(
			calc(calc(100vw - 100%) - calc(max(0px, calc(100vw - 800px)) / 2)),
			calc(40vh - 50%)
		);
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
		animation: show 0.5s ease-in-out forwards;
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
