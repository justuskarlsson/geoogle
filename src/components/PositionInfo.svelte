<script lang="ts">
    import type { Viewer } from "cesium";
    import { getContext } from "svelte"
	import { position } from "../data/store";
    
    let x = 0.0;

    const getViewer: () => Viewer = getContext("viewer");
    setInterval(()=> {
        const viewer = getViewer();
        if (viewer) {
            x = viewer.camera.position.x;
        }
    }, 100)

</script>

<style>
    #cesiumInfobox {
        position: absolute;
        z-index: 2;
        left: 10px;
        top: 10px;
        color: white;
        background-color: rgba(32, 5, 5, 0.212);
        height: 5%;
        font-family: 'Courier New', Courier, monospace;
        font-size: large;
        border-radius: 5px;
        display: flex;
        align-items: center;
        text-align: center;
    }
    #entityNameLabel {
        width: 100%;
        flex: 1;
    }
</style>

<div id="cesiumInfobox">
    <span id="entityNameLabel">
        <div>
            {$position.x.toFixed(2) }
        </div>
        <div>
            {$position.y.toFixed(2) }
        </div>
        <div>
            {$position.z.toFixed(2) }
        </div>
    </span>
</div>