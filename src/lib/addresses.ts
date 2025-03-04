import {action, query, redirect} from "@solidjs/router";
import {baseApi, getUserToken} from "~/lib/server";
import {toLonLat} from "ol/proj";
import {useLayoutContext} from "~/context/layout-provider";
import {getSessionUser, SessionUser, updateSessionCurrentLocation} from "~/lib/session";
import {getUser} from "~/lib/users";


export const getAddresses = query(async () => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    console.log("Bearer:", token.token)

    const response = await fetch(`${baseApi}/addresses`, {
        headers: {
            Authorization: `Bearer ${token.token}`
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res?.collection;
}, "addresses")


export const addAddress = action(async (data: FormData) => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    console.log("Bearer:", token.token)

    const addressInput = {
        viewbox: data.get("viewbox"),
        poi_key: String(data.get("poi_key") ?? ''),
        poi_id: String(data.get("poi_id") ?? ''),
        street_address: String(data.get("street_address")),
        locality: String(data.get("locality")),
        administrative_area: String(data.get("administrative_area")),
        post_code: String(data.get("post_code")),
        country: "US",
    }

    console.log("Address:", addressInput)

    const response = await fetch(`${baseApi}/addresses`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token.token}`
        },
        body: JSON.stringify(addressInput)
    })

    const res: any = await response.json();
    const status: number = response.status;
    console.log("status", status)
    console.log("res", res)
    console.log("address", res?.address)
    console.log("collection", res?.collection)

    return res?.collection;
})

export const addressSearchHandler = action(async (data: FormData) => {
    "use server";

    let token = await getUserToken();
    if (!token) throw redirect("/")

    console.log("Bearer:", token.token)

    const addressInput = {
        search:  String(data.get("search")),
        viewbox: data.get("viewbox"),
    }

    console.log("addressInput", addressInput)

    const response = await fetch(`${baseApi}/addresses/search`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token.token}`
        },
        body: JSON.stringify(addressInput)
    })

    const res: any = await response.json();
    const status: number = response.status;
    console.log("status", status)
    console.log("res", res.address)

    return res?.collection;
})


export const actionPositionHandler = action(async (data: FormData) => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    console.log("Bearer:", token.token)

    const inputItems = {
        lat: data.get("lat"),
        lon: data.get("lon"),
    }

    console.log("inputItems", inputItems)

    const response = await fetch(`${baseApi}/addresses/position`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token.token}`
        },
        body: JSON.stringify(inputItems)
    })

    const res: any = await response.json();
    const status: number = response.status;
    console.log("status", status)
    console.log("res", res)

    let mapInput = {
        title: res.results?.properties?.place?.display,
        filename: `${res.results?.properties?.place?.osm_type}-${res.results?.id}`,
        lat: res.query.lat,
        lng: res.query.lon,
    }

    console.log("mapInput", mapInput)

    let user = (await getSessionUser()) as SessionUser

    console.log('loc', res?.results)

    let session = await updateSessionCurrentLocation(user, res?.results, token)
    console.log("session", session)

     // await createPositionMapHandler(mapInput)


    return res;
})

export const createPositionMapHandler = async (mapInput: {
    title: string,
    filename: string,
    lat: number,
    lng: number
}) => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    console.log("Bearer:", token.token)

    const mapInputs = {
        title: `[${mapInput.lat}, ${mapInput.lng}] ${mapInput.filename}`, // mapInput.title,
        filename: `${mapInput.filename}_${Date.now()}`,
        lat: mapInput.lat,
        lng: mapInput.lng,
    }

    console.log("mapInputs", mapInputs)

    const response = await fetch(`${baseApi}/maps/position`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token.token}`
        },
        body: JSON.stringify(mapInputs)
    })

    const res: any = await response.json();
    const status: number = response.status;
    console.log("status", status)
    console.log("res", res)

    return res;
}


export const getAddressFormFormats = query(async () => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    console.log("Bearer:", token.token)

    console.log("getFormFormats was called")


    const response = await fetch(`${baseApi}/addresses/create`, {
        headers: {
            Authorization: `Bearer ${token.token}`
        },
    })
    const res: any = await response.json();

    console.log(await res.form);
    return res.form;
}, "formats")


export const addressFieldNames: string[] = [
    "none",
    "aeroway",
    "amenity",
    "area",
    "borough",
    "building",
    "city",
    "county",
    "country",
    "country_code",
    "department",
    "district",
    "do_si",
    "eircode",
    "emirate",
    "hamlet",
    "house_number",
    "island",
    "leisure",
    "man_made",
    "national_park",
    "neighborhood",
    "oblast",
    "pincode",
    "parish",
    "post_town",
    "postcode",
    "prefecture",
    "protected_area",
    "province",
    "retail",
    "residential",
    "road",
    "shop",
    "state",
    "suburb",
    "town",
    "townland",
    "village",
    "village_township",
    "zip_code",
]

export function getAddressField(n: number) {
    return addressFieldNames[n];
}