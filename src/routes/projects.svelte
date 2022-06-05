<script lang="ts">
	import { afterNavigate } from "$app/navigation";

	import Header from "$components/header.svelte";
	import Navbar from "$components/navbar.svelte";
	import Typer from "$components/typer.svelte";

	import ProjectList from "$components/projects/list.svelte";
	import ProjectComponent from "$components/projects/project.svelte";

	import { projects_texts } from "$lib/config";

	import { Project, projects } from "$lib/projects";

	let search = window.location.search;
	$: params = new URLSearchParams(search);
	$: projectId = params.get("id");

	let project: Project | undefined;
	$: project = projectId ? projects.find((p) => p.descriptor === projectId) : undefined;

	afterNavigate(function ({ to }) {
		search = to.search;
	});
</script>

<main>
	<Navbar />
	<Header>
		<h1 class="header">Projects</h1>
		<p class="header">All of the <span><Typer texts={projects_texts} /></span> Projects we made</p>
	</Header>

	{#if project}
		<ProjectComponent bind:project />
	{:else}
		<ProjectList {projects} />
	{/if}
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

	main {
		min-height: 100vh;
		animation: 0.5s show 1 ease;
	}

	span {
		font-weight: 600;
		color: var(--header-color);
	}
</style>
