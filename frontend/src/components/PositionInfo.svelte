<script lang="ts">
    import type { Viewer } from "cesium";
    import { getContext } from "svelte"
	import { api_nearest_k } from "../data/api";
	import { position } from "../data/store";
    
    let x = 0.0;

    const getViewer: () => Viewer = getContext("viewer");
    function screenCap(){
        const viewer = getViewer();
        if (viewer) {
            viewer.render();
            // base64
            // const url = viewer.canvas.toDataURL();
            // console.log(url);

            // Blob
            viewer.canvas.toBlob(async (blob)=>{
                if (blob !== null) {
                    console.log("Blob");
                    const res = await api_nearest_k(blob);
                    console.log(res);
                }
            }, "png");
        }        
    }

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
        <button on:click={screenCap}>
            Print
        </button>
    </span>
</div>