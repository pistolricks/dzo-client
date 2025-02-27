import { css } from 'styled-system/css'

import { Component, For, Show } from 'solid-js'
import { Feature, VENDOR } from '~/lib/store'
import { GeoJSON, GeoJsonObject, Geometry, GeometryCollection, GeometryObject, Point } from 'geojson'

type PROPS = {
    details: Feature<Point, any, string> | undefined
}

function VendorDetails(props: { details: Feature<Point, number, any> }) {
    const vendor = () => props.details
    return (
        <ul class={css({ mt: '4', mb: '4', textAlign: 'center' })}>
            <Show when={vendor()}>
                <div class={css({ display: 'flex', flexDir: 'column', mt: '2', mb: '2', borderWidth: '1px', p: '1' })}>
                    <p class={css({ borderWidth: '1px', p: '1' })}>{vendor().id}</p>
                    <p class={css({ borderWidth: '1px', p: '1' })}>{vendor().geometry.coordinates}</p>
                    <p class={css({ borderWidth: '1px', p: '1' })}>{vendor().properties.profile.vendor.title}</p>
                    <For each={vendor()?.properties.profile.vendor.genres}>
                        {(genre) => <p class={css({ textTransform: 'capitalize' })}>{genre}</p>}
                    </For>
                </div>
            </Show>
        </ul>
    )
}

export default VendorDetails
