<script lang="ts">
    import type { Viewer } from "cesium";
    import { getContext } from "svelte"
	import { DefaultService, type Match } from "../client";
	// import { api_nearest_k, type NearestKMatch } from "../data/api";
    
	import { position } from "../data/store";
    
    let x = 0.0;
    let matches: Match[] = [];

    const getViewer: () => Viewer = getContext("viewer");
    function screenCap(){
        const viewer = getViewer();
        if (viewer) {
            console.log($position.toString())
            viewer.render();
            // Blob
            viewer.canvas.toBlob(async (blob)=>{
                if (blob !== null) {
                    // console.log("Blob");
                    // const res = await api_nearest_k(blob);
                    const res = await DefaultService.nearestKPost({img: blob, k: 10});
                    matches = res.matches;
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
        font-family: 'Courier New', Courier, monospace;
        font-size: large;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .matches {
        display: flex;
    }
</style>

<div id="cesiumInfobox">
    <span id="entityNameLabel">
        <button on:click={screenCap}>
            Print
        </button>
    </span>
    <div class="matches">
        {#each matches as match}
            <div>
                {match.id}
            </div>
        {/each}
    </div>
</div>