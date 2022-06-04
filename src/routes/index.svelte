<script lang="ts">
	import About from '$components/index/about.svelte';
	import Header from '$components/index/header.svelte';
	import Projects from '$components/index/projects.svelte';

	import { fade } from 'svelte/transition';
</script>

<main transition:fade={{ duration: 200 }}>
	<Header />
	<About />
	<Projects />
</main>

<style>
	main {
		min-height: 200vh;
	}
</style>
