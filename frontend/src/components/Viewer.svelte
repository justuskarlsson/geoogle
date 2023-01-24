<div id="cesiumContainer">
    <slot />
</div>

<script lang="ts">

    import * as Cesium from 'cesium';
    import { Viewer, defined, Cartesian3, Color, Entity } from 'cesium'
    import "cesium/Build/Cesium/Widgets/widgets.css";

    import { onMount, setContext } from 'svelte';
	import { init } from '../data/init';

    let viewer: Viewer;
	let entity: Entity;

    setContext("viewer", () => viewer);

    onMount(async () => {
		// @ts-ignore
		window.CESIUM_BASE_URL = '/Cesium';

        viewer = new Viewer('cesiumContainer', {
            terrainProvider: Cesium.createWorldTerrain()
        });

        const SF = Cesium.Cartesian3.fromDegrees(-122.407072, 37.800410, 400);
        
        // // Add Cesium OSM Buildings, a global 3D buildings layer.
        // const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   
        
        // const tileset = viewer.scene.primitives.add(
        //     new Cesium.Cesium3DTileset({
        //         url: Cesium.IonResource.fromAssetId(1415196),
        //     })
        // );

        // Fly the camera to San Francisco at the given longitude, latitude, and height.
        viewer.camera.flyTo({
            destination : SF,
            orientation : {
                heading : Cesium.Math.toRadians(0.0),
                pitch : Cesium.Math.toRadians(-45),
            },
            duration: 0.1
        });

        init(viewer);

        // Update entity object on selection/deselection.
		viewer.selectedEntityChanged.addEventListener(() => {
			if (viewer.selectedEntity !== undefined) {
                entity = viewer.selectedEntity;
            }
		});
    });
  

    // Your access token can be found at: https://ion.cesium.com/tokens.
    // Replace `your_access_token` with your Cesium ion access token.


    // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.

</script>

