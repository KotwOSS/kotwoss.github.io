<script lang="ts">
	import type { Project } from "$lib/projects";

	export let project: Project;
</script>

<a
	class="project"
	href="/projects/?id={project.descriptor}"
	style:background={project.background}
	style:--hover-color={project.hover_color}
>
	<div class="title">
		<h2>{project.name}</h2>
		<h3>{project.descriptor}</h3>
	</div>
	<p class="short">{@html project.description}</p>
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

	.project {
		padding: 20px 30px;
		border: none;
		border-radius: 10px;
		transition: all 0.3s ease;
		font-size: 18px;
		font-weight: 400;
	}

	.project:hover {
		color: var(--hover-color);
	}

	.project :global(a) {
		border-bottom-color: var(--hover-color);
	}

	.project :global(a:hover) {
		color: var(--hover-color);
	}
</style>
