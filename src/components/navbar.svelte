<nav>
	<h1>KotwOSS</h1>
	<div class="links">
		<a class="link" href="/"> Home </a>
		<a class="link" href="/projects"> Projects </a>
		<a class="link" href="/licenses"> Licenses </a>
	</div>
</nav>

<style>
	nav {
		position: absolute;
		background: var(--nav-background);
		border-bottom: var(--nav-border);
		color: var(--nav-color);
		padding: 0 5vw;
		height: var(--nav-height);
		width: 100%;
		display: flex;
		align-items: center;
		z-index: 100;
		top: 0;
	}

	.links {
		column-gap: 20px;
		margin-left: auto;
		display: flex;
		justify-content: center;
	}

	.link {
		color: var(--nav-color);
		border: none;
	}
</style>
