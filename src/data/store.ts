import { Cartesian3, type Viewer } from 'cesium';
import { writable, type Writable } from 'svelte/store';



export let viewer: Writable<Viewer | null> = writable(null);
export let position: Writable<Cartesian3> = writable(new Cartesian3());
