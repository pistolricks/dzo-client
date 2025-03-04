import {Component, createEffect, createMemo, createSignal, For, onCleanup, onMount, Show,} from "solid-js";
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature.js";
import Geolocation from "ol/Geolocation.js";
import Point from "ol/geom/Point.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import CircleStyle from "ol/style/Circle.js";
import Fill from "ol/style/Fill.js";
import Stroke from "ol/style/Stroke.js";
import Style from "ol/style/Style.js";
import GeoJSON from "ol/format/GeoJSON.js";
import {useLayoutContext} from "~/context/layout-provider";
import Drawer from "@corvu/drawer";
import {useAction} from "@solidjs/router";
import {actionPositionHandler} from "~/lib/addresses";
import {MapPin} from "~/components/svg";
import AddressSearchForm from "~/components/addresses/forms/address-search-form";
import {throttle} from "~/lib/utils";

import PlaceCard from "~/components/addresses/partials/place-card";
import {DrawerContent} from "~/components/ui/dialogs/base-drawer";
import {shiftKeyOnly} from 'ol/events/condition.js';
import ExtentInteraction from 'ol/interaction/Extent.js';
import {Extent} from "ol/extent";
import {FeatureCollection} from "~/lib/store";
import {Feature as GeoFeature} from "~/lib/store";

type PROPS = {
    coordinates?: [number, number];
    contextId?: string;
    featureCollection: FeatureCollection;
};

// Moved styles definition outside the component to avoid recreation on every render.
const styles = {
    Point: new Style({
        image: new CircleStyle({
            radius: 7,
            fill: new Fill({
                color: "rgba(255,0,0,0.2)",
            }),
            stroke: new Stroke({
                color: "red",
                width: 1,
            }),
        }),
    }),
    LineString: new Style({
        stroke: new Stroke({
            color: "green",
            width: 1,
        }),
    }),
    MultiLineString: new Style({
        stroke: new Stroke({
            color: "green",
            width: 1,
        }),
    }),
    MultiPoint: new Style({
        image: new CircleStyle({
            radius: 7,
            fill: new Fill({
                color: "rgba(255,0,0,0.2)",
            }),
            stroke: new Stroke({
                color: "red",
                width: 1,
            }),
        }),
    }),
    MultiPolygon: new Style({
        stroke: new Stroke({
            color: "yellow",
            width: 1,
        }),
        fill: new Fill({
            color: "rgba(255, 255, 0, 0.1)",
        }),
    }),
    Polygon: new Style({
        stroke: new Stroke({
            color: "blue",
            lineDash: [4],
            width: 3,
        }),
        fill: new Fill({
            color: "rgba(0, 0, 255, 0.1)",
        }),
    }),
    GeometryCollection: new Style({
        stroke: new Stroke({
            color: "magenta",
            width: 2,
        }),
        fill: new Fill({
            color: "magenta",
        }),
        image: new CircleStyle({
            radius: 10,
            stroke: new Stroke({
                color: "magenta",
            }),
        }),
    }),
    Circle: new Style({
        stroke: new Stroke({
            color: "red",
            width: 2,
        }),
        fill: new Fill({
            color: "rgba(255,0,0,0.2)",
        }),
    }),
};

const GeoMap: Component<PROPS> = (props) => {
    const {getHeight, setViewbox, getViewbox, getIsDesktop} = useLayoutContext();
    const coordinates = () => props.coordinates;
    const contextId = () => props.contextId ?? 'map1'
    const {open, setOpen} = Drawer.useDialogContext(contextId())
    const [getShowPosition, setShowPosition] = createSignal(false);
    const [getGeolocation, setGeolocation] = createSignal<Geolocation | undefined>();


    const [getClear, setClear] = createSignal(false)

    const [mapElement, setMapElement] = createSignal<HTMLDivElement | undefined>();

    const [getFeatureCollection, setFeatureCollection] = createSignal<FeatureCollection>({ type: "FeatureCollection",
        features: []
    })

    const [getFeatures, setFeatures] = createSignal<GeoFeature[]>([])

    const featureCollection = createMemo(() => {
         open() ? setFeatureCollection(props.featureCollection) : setFeatureCollection({
             type: "FeatureCollection",
             features: []
         })
        setFeatureCollection(props.featureCollection)
        console.log("getFeatureCollection", getFeatureCollection())
        return getFeatureCollection()
    })

    let map: Map | undefined;


    const [getMap, setMap] = createSignal(map)
    const submit = useAction(actionPositionHandler);


    // Memoized results for features
    const features = createMemo(() => {
        try {


            let collection = featureCollection();



                let ftr = new GeoJSON().readFeatures(collection);

           let getf = ftr.map((f, i) => collection?.features?.[i])
            setFeatures(getf)
            console.log("getf", getf)


                    return ftr;
        } catch (error) {
            console.error("Invalid feature collection:", error);
            return [];
        }

        return []
    });


    function handleDrawer() {
        setOpen(true)
    }


    // Initialize and clean up the map
    onMount(() => {
        if (!mapElement()) return;

        const view = new View({
            center: [-118.249999, 34.0499998],
            zoom: 6,
            projection: "EPSG:4326",
        });

        map = new Map({
            target: mapElement(),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view,
        });

        setMap(map)


        const geolocation = new Geolocation({
            trackingOptions: {
                enableHighAccuracy: true,
            },
            projection: getMap()?.getView().getProjection(),
        });

        setGeolocation(geolocation);

        const accuracyFeature = new Feature();
        const positionFeature = new Feature();

        // Style the geolocation marker
        positionFeature.setStyle(
            new Style({
                image: new CircleStyle({
                    radius: 14,
                    fill: new Fill({
                        color: "#3399CC",
                    }),
                    stroke: new Stroke({
                        color: "#fff",
                        width: 2,
                    }),
                }),
            })
        );

        // Bind events for geolocation
        geolocation.on("change:accuracyGeometry", () => {
            const accuracy = geolocation?.getAccuracyGeometry();
            if (accuracy) accuracyFeature?.setGeometry(accuracy);
        });

        geolocation.on("change:position", () => {
            const coordinates = geolocation?.getPosition();
            if (coordinates) {
                positionFeature?.setGeometry(new Point(coordinates));
                view.animate({center: coordinates, duration: 1000, zoom: 12});
                const extent: Extent = view?.calculateExtent();
                setViewbox(() => extent);


                let lat = coordinates[1];
                let lon = coordinates[0]

                const formData = new FormData();
                formData?.append("lat", String(lat));
                formData?.append("lon", String(lon));


                submit(formData).then(r => console.log(r))
            }


        });


        createEffect(() => {
            console.log("getFeatures", getFeatures())
            const positionLayer = new VectorLayer({
                source: new VectorSource({
                    features: [accuracyFeature, positionFeature],
                }),
            });

            getMap()?.addLayer(positionLayer);


            console.log('features', features())
            console.log('getViewbox', getViewbox())


            const styleFunction = function (feature: any) {
                return styles[feature?.getGeometry()?.getType() as keyof typeof styles];
            };
            // Attach features to the map

                const vectorSource = new VectorSource({
                    features: features(),
                });

                const vectorLayer = new VectorLayer({
                    source: vectorSource,
                    style: styleFunction
                });

                getMap()?.addLayer(vectorLayer);

            const selected: Feature<import("ol/geom/Geometry").default>[] = features();

            const status = document.getElementById('status') as HTMLDivElement | null;


            getMap()?.on('singleclick', function (e) {
                getMap()?.forEachFeatureAtPixel(e.pixel, function (f) {
                    if (f instanceof Feature) {
                        const selIndex = features()?.indexOf(f);
                        if (selIndex < 0) {

                            features().push(f);
                            // selected.push(f);
                            // f.setStyle(styles["Point"]);
                            throttle(handleDrawer(), 1000)
                            console.log('f', f)
                        } else {

                            console.log('ff', features())
                            features().splice(selIndex, 1);
                            // features().splice(selIndex, 1)
                           // f.setStyle(undefined);
                        }
                    }
                });
                if (status) {

                    status.innerHTML = '&nbsp;' + selected.length + ' selected features';


                }
            })

            console.log(selected)

         //   const extent = new ExtentInteraction({condition: shiftKeyOnly});
         //   getMap()?.addInteraction(extent);
        })

        // Cleanup on component unmount
        onCleanup(() => {
            getMap()?.dispose();
            geolocation.setTracking(false);
            setMap(undefined);
            map = undefined;
        });

    });


    const toggleGeolocation = (enabled: boolean) => {
        const geolocation = getGeolocation();
        if (geolocation) geolocation.setTracking(enabled);
        setShowPosition(enabled);
    };


    const featuresArray = createMemo(() => {
        return features().map((feature) => ({
            properties: feature.getProperties(),
        }))
    })


    createEffect(() => {
        setOpen(features()?.length > 0)
        console.log('features', features())
        console.log('fArr', featuresArray())
        console.log("getClear", getClear())
        console.log('features', features())

    })

    return (
        <>
            <div
                style={{
                    height: getHeight() + 'px',
                    width: '100%'
                }}
                class={`relative`}>
                <div
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                    ref={setMapElement}
                />

                <div class={'absolute right-5 top-5 z-30'}>
                    <Show when={getShowPosition()}>
                        <button onClick={() => toggleGeolocation(false)}>
                            <MapPin class={'stroke-green-11 size-10'}/>
                        </button>
                    </Show>
                    <Show when={!getShowPosition()}>
                        <button onClick={() => toggleGeolocation(true)}>
                            <MapPin class={'stroke-red-11 size-10'}/>
                        </button>
                    </Show>
                </div>


            </div>
            <DrawerContent side={getIsDesktop() ? 'right' : 'bottom'} contextId={contextId()}>
                <div class={'h-screen w-full relative'}>
                    <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"/>
                    <AddressSearchForm contextId={contextId()} class={'absolute inset-x-0 top-0 py-3 px-2.5'}/>
                    <div
                        style={{
                            height: getHeight() + 'px',
                        }}
                        class={'relative mt-10'}
                    >


                        <ul
                            class={'text-gray-11 space-y-2 text-center h-full overflow-y-auto px-2'}>
                            <For each={features()?.map((feature) => feature.getProperties())?.reverse()}>
                                {(properties, i) => (

                                    <PlaceCard
                                        geometry={properties?.geometry}
                                        properties={properties?.place}
                                        type={"Feature"}
                                        id={properties?.id}
                                        bbox={properties?.place?.boundingbox}
                                    />

                                )}
                            </For>
                        </ul>

                    </div>
                </div>
            </DrawerContent>


        </>
    );
};

export default GeoMap;