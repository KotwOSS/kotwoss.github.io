import { get_store_value } from 'svelte/internal';
import { type Writable, writable } from 'svelte/store';

export const triggers: Writable<number[]> = writable([]);

export function trigger(id: number, state: boolean) {
	if (get_store_value(triggers).includes(id)) {
		return true;
	} else if (state) {
		triggers.update((t) => (t.push(id), t));
		return true;
	}
}

export function resetTriggers() {
	triggers.set([]);
}
