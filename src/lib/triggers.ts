import { get_store_value } from 'svelte/internal';
import { writable, type Writable } from 'svelte/store';

export class Triggers {
	readonly triggers: Writable<number[]>;

	constructor(def: number[] = []) {
		this.triggers = writable(def);
	}

	trigger(id: number, state: boolean) {
		if (get_store_value(this.triggers).includes(id)) {
			return true;
		} else if (state) {
			this.triggers.update((t) => (t.push(id), t));
			return true;
		}
	}

	resetTriggers() {
		this.triggers.set([]);
	}
}
