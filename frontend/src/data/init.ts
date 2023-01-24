import type { Viewer } from "cesium";
import { position, viewer as viewer_store } from "./store"

export function init(viewer: Viewer){
    viewer_store.set(viewer);
    viewer.camera.changed.addEventListener(()=> {
        position.set(viewer.camera.position);
    })
    viewer.camera.percentageChanged = 0.01;
}