<script lang="ts">
	import About from "$components/index/about.svelte";
	import Header from "$components/index/header.svelte";
	import Projects from "$components/index/projects.svelte";
	import Navbar from "$components/navbar.svelte";
</script>

<main>
	<Navbar />
	<Header />
	<About />
	<Projects />
</main>

<style>
	@keyframes show {
		from {
			opacity: 0;
			transform: translateY(-100px);
		}
		60% {
			transform: translateY(0);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	main {
		min-height: 100vh;
		animation: 0.8s show 1 ease;
	}
</style>
