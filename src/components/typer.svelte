<script lang="ts">
	export let texts: string[];

	let carretpos = 0;
	let carretshow = false;
	let select = false;

	let textindex = 0;
	let text = nextText(true);

	function nextText(show: boolean) {
		if (++textindex >= texts.length) textindex = 0;
		let text = texts[textindex];
		carretpos = show ? text.length : 0;
		return text;
	}

	function showText(callback: () => void) {
		carretshow = true;
		const intv = setInterval(function () {
			if (++carretpos >= text.length) {
				clearInterval(intv);
				callback();
			}
		}, 100);
	}

	function carretBlink(amount: number, callback: () => void) {
		let i = 0;
		const intv = setInterval(function () {
			carretshow = !carretshow;
			// carretshow = true;
			if (i++ >= amount) {
				clearInterval(intv);
				callback();
			}
		}, 300);
	}

	function selectAll(callback: () => void) {
		select = true;
		setTimeout(function () {
			select = false;
			callback();
		}, 200);
	}

	function main() {
		selectAll(() => {
			text = nextText(false);
			showText(() => carretBlink(20, main));
		});
	}

	carretBlink(20, main);
</script>

<span class:select>
	{text.substring(0, carretpos)}<span id="carret" class:show={carretshow} />
</span>

<style>
	span.select {
		background-color: #ff0;
	}

	#carret {
		display: inline-block;
		height: 24px;
		width: 2px;
		border-radius: 1px;
		transform: translate(1px, 5px);
	}

	#carret.show {
		background-color: currentColor;
	}
</style>
