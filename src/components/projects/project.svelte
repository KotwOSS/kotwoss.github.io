<script lang="ts">
	import type { Project } from "$lib/projects";

	export let project: Project;
</script>

<div class="project">
	<h3>{project.descriptor}</h3>
	<h1>{project.name}</h1>
	<p>{@html project.description}</p>
</div>

<style>
</style>
