<script lang="ts">
    import type { Entity } from "cesium";
    import { getContext } from "svelte"
    export let entity: Entity;



</script>

<style>
    #cesiumInfobox {
        position: absolute;
        z-index: 2;
        right: 10px;
        top: 10px;
        color: white;
        background-color: gray;
        width: 10%;
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
    <label id="entityNameLabel">{entity.name}</label>
</div>