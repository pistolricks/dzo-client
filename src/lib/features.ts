import {Feature} from "~/lib/store";
import {FeatureCollection} from "~/lib/store";
import {SetStoreFunction} from "solid-js/store";

export const updateCollection = (
    store: FeatureCollection,
    setStore: SetStoreFunction<FeatureCollection>,
    feature: Feature
) => {
    const current = store?.features?.find((t) => t.id === feature.id);

    const updateFeature = (id: number, current: Feature) => {
        setStore("features",
            ftr => ftr.id === String(id),
            ftr => ({
                ...ftr,
                geometry: current.geometry,
                properties: current.properties,
                type: current.type,
                id: current.id
            })
        );
    };

    console.log("current", current)
    if (current) {
        if (typeof current.id === 'number') {
            updateFeature(current.id, current)
        }
        console.log("store", store)
    }

    if (!current) {
        setStore("features", (ftrs => [
            ...ftrs,
            {
                geometry: feature.geometry,
                properties: feature.properties,
                type: feature.type,
                id: feature.id
            }
        ]))
    }


    console.log(store)
    return store;
}
