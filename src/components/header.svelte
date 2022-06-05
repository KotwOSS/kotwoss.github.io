<header>
	<div class="content">
		<slot />
	</div>
	<div class="wrapper">
		<svg xmlns="http://www.w3.org/2000/svg" height="40" preserveAspectRatio="none">
			<defs>
				<clipPath id="svgPath">
					<pattern
						id="Pattern"
						x="0"
						y="0"
						width="1256"
						height="400"
						patternUnits="userSpaceOnUse"
						patternTransform="scale(0.1)"
					>
						<path
							transform="scale(2, 1)"
							d="M314,200L628,200L628,0C584.226,0.093 548.349,22.651 471,100C393.651,177.349 354.713,200 314,200ZM0.472,0.001L0,0L0,200L314,200C273.287,200 238.424,181.424 157,100C75.894,18.894 40.609,0.146 0.472,0.001Z"
							fill="currentColor"
						/>
						<rect x="0" y="200" width="1256" height="200" fill="currentColor" />
					</pattern>
				</clipPath>
			</defs>
			<rect fill="url(#Pattern)" width="100%" height="40" />
		</svg>
	</div>
</header>

<style>
	@keyframes svg {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-1256px);
		}
	}

	@keyframes wrapper {
		0% {
			transform: translateY(3px);
		}
		25% {
			transform: translateY(1px);
		}
		50% {
			transform: translateY(3px);
		}
		75% {
			transform: translateY(5px);
		}
		100% {
			transform: translateY(3px);
		}
	}

	header {
		text-align: center;
		padding-top: var(--nav-height);
		background: var(--header-background);
		color: var(--background);
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
		width: 100%;
	}

	.wrapper {
		height: 40px;
		animation: 2s wrapper infinite ease-in;
	}

	svg {
		width: calc(100% + 1256px);
		animation: 14s svg infinite linear;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding: 50px 0;
		color: var(--header-color);
	}

	.content > :global(p) {
		color: var(--header-color-secondary);
	}
</style>
