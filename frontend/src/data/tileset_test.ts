import * as Cesium from 'cesium';
import { Cesium3DTileset, type Viewer } from "cesium";


export function test_3d_tiles(viewer: Viewer, active: boolean){
    if (!active) {
        return;
    }
    const tileset = viewer.scene.primitives.add(
        new Cesium3DTileset({
            url: "http://localhost:8003/MetadataGranularities/tileset.json",
            debugShowBoundingVolume: true,
        })
    );

    tileset.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
        Cesium.Cartesian3.fromDegrees(-75.152325, 39.94704, 0.0)
    );
    viewer.zoomTo(tileset);
}