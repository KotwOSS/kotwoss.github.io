<script lang="ts">
	import { privacy, imprint } from '$lib/config';

	let themeEl = document.getElementById('theme') as HTMLElement;

	let events: { name: string; link: string }[];
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState === 4) events = JSON.parse(xmlHttp.response);
	};
	xmlHttp.open('GET', 'https://events.kotw.dev/recent.json', true);
	xmlHttp.send(null);
</script>

<footer>
	<main>
		<div class="title">
			<!-- svelte-ignore a11y-missing-content -->
			<h1 class="emoji" />
			<p class="short">
				Hello mate. This <a href="https://choosealicense.com/licenses/mit/">opensource</a> website
				was created using <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>. Check it
				out on <a href="https://github.com/KotwOSS/kotwoss.github.io/" target="_blank">Github</a>.
			</p>
		</div>
		<div class="categories">
			<div class="legals category">
				<h4>⚖️ Legal</h4>
				<div class="legal">
					<a href={privacy}>🔒 Privacy</a>
				</div>
				<div class="legal">
					<a href={imprint}>📖 Imprint</a>
				</div>
			</div>

			<div class="themes category">
				<h4>🌈 Theme</h4>
				<ul>
					{#each Object.entries({ dark: '⚫ Dark', light: '⚪ Light' }) as theme}
						<div class="theme">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								href="#"
								on:click={(e) => {
									e.preventDefault();
									localStorage.setItem('theme', theme[0]);
									themeEl.setAttribute('href', `/themes/${theme[0]}.css`);
								}}>{theme[1]}</a
							>
						</div>
					{/each}
				</ul>
			</div>

			{#if events}
				<div class="events category">
					<h4>🏅 Events</h4>
					{#each events as event}
						<div class="event">
							<a href={event.link} target="_blank">{event.name}</a>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</main>
	<p>&copy Copyright 2022 KotwOSS</p>
</footer>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: flex-start;
		width: 100%;
		margin-bottom: 40px;
	}

	.title {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 30px 20px;
		row-gap: 15px;
	}

	@keyframes wave {
		0% {
			transform: rotate(0);
		}
		25% {
			transform: rotate(10deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-10deg);
		}
		100% {
			transform: rotate(0);
		}
	}

	.emoji {
		animation: wave 3s infinite linear;
	}

	.emoji::before {
		content: var(--footer-emoji);
		font-size: 50px;
	}

	.categories {
		margin: auto 0;
		display: flex;
		flex-wrap: wrap;
		column-gap: 40px;
		row-gap: 20px;
		padding: 20px 50px;
	}

	.category {
		min-width: 200px;
	}

	.category h4 {
		font-size: 20px;
		margin-bottom: 5px;
		font-size: 19px;
	}

	.category ul {
		display: flex;
		row-gap: 5px;
		flex-direction: column;
		align-items: flex-start;
	}

	.category a {
		font-size: 17px;
		border-bottom: none;
		font-weight: 500;
		color: var(--color-secondary);
		margin-bottom: 2px;
	}

	.category a:hover {
		color: var(--a-color);
	}

	footer {
		display: flex;
		row-gap: 10px;
		align-items: center;
		flex-direction: column;
		padding: 30px 10px;
		border-top: var(--footer-border);
	}
</style>
