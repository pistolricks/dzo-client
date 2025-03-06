import {GeoJsonObject} from "geojson";
import {createStore} from "solid-js/store";

export type USER = {
    id: number;
    name: string;
    email: string;
    activated: boolean;
    created_at: string;
}

export type MOVIE = {
    id: number
    title: string
    year: number
    runtime: string
    genres: string[]
}

export type MOVIE_DETAIL = {
    movie: MOVIE
}

export type MoviesData = {
    metadata: {
        current_page: number,
        page_size: number,
        first_page: number,
        last_page: number,
        total_records: number

    },
    movies: MOVIE[]
}

export type VENDOR = {
    id: number
    title: string
    year: number
    runtime: string
    genres: string[]
}

export type VENDOR_DETAIL = {
    vendor: VENDOR
}

export type VendorsData = {
    metadata: {
        current_page: number,
        page_size: number,
        first_page: number,
        last_page: number,
        total_records: number

    },
    data: VENDOR[]
}

export type CONTENT = {
    id: string;
    created_at: string;
    name: string;
    original: string;
    hash: string;
    src: string;
    type: string;
    size: number;
    user_id: string;
}


export type CONTENT_DETAIL = {
    content: CONTENT
}

export type ContentsData = {
    metadata: {
        current_page: number,
        page_size: number,
        first_page: number,
        last_page: number,
        total_records: number

    },
    data: CONTENT[]
}


export type AddressData = any;

export type AreaSelect = {
    ID: string;
    Localities?: string
    Name: string;
}
export type postCodeRegex = {
    Regex: string
    SubdivisionRegex: any
}

export type CountryData = {
    Format?: string
    LatinizedFormat?: string
    Required?: string[]
    Allowed?: string[]
    DefaultLanguage?: string
    AdministrativeAreaNameType?: number
    LocalityNameType?: number
    DependentLocalityNameType?: number
    PostCodeNameType?: number
    PostCodeRegex?: postCodeRegex
    AdministrativeAreas?: any
}

export type OsmOutput = {
    place_id: number,
    licence?: string,
    osm_type: string,
    osm_id: number,
    boundingbox?: string[],
    lat: string,
    lon: string,
    display_name?: string,
    class?: string,
    type?: string,
    importance?: number,
    icon?: string,
    address?: {
        city?: string,
        state_district?: string,
        state?: string,
        "ISO3166-2-lvl4"?: string,
        postcode?: string,
        country?: string,
        country_code?: string,
    },
    extratags?: {
        capital?: string,
        website?: string,
        wikidata?: string,
        wikipedia?: string,
        population?: string,
    }
}


export type Point = {
    coordinates: [number, number]
    type: string
}

export interface FeatureCollection extends GeoJsonObject {
    type: "FeatureCollection";
    features: Array<Feature>;
}

export declare type Properties = {
    [name: string]: any;
} | null;

export interface Feature extends GeoJsonObject {
    type: "Feature";
    geometry?: Point;
    properties?: Properties;
    id?: string;
}


export const [getOsmResults, setOsmResults] = createStore<{
    count: number,
    results: OsmOutput[]
}>({
    count: 0,
    results: [],
})

export type LookupResult = {
    place_id: number;
    licence?: string;
    osm_type: string;
    osm_id: number;
    boundingbox?: string[];
    lat?: string;
    lon?: string;
    display_name?: string;
    class?: string;
    type?: string;
    importance?: number;
    address?: {
        tourism?: string
        road?: string
        suburb?: string
        city?: string
        state?: string
        postcode?: string
        country?: string
        country_code?: string
    },
    extratags?: {
        image?: string
        heritage?: string
        wikidata?: string
        architect?: string
        wikipedia?: string
        wheelchair?: string
        description?: string
        "heritage:website"?: string
        "heritage:operator"?: string
        "architect:wikidata"?: string
        year_of_construction?: string
    }
}

export type ReverseLookupResults = {
    place_id: number,
    licence: string,
    osm_type: string,
    osm_id: number,
    lat: string
    lon: string
    class: string
    type: string
    place_rank: number
    importance: number
    addresstype: string,
    name: string,
    display_name: string;
    address?: {
        amenity?: string;
        house_number?: string;
        road?: string;
        quarter?: string;
        neighbourhood?: string;
        suburb?: string;
        county?: string;
        city?: string;
        state?: string;
        'ISO3166-2-lvl4'?: string;
        postcode?: string;
        country?: string;
        country_code?: string;
        town?: string;
        province?: string;
        region?: string;
    },
    boundingbox: any[],
    extratags?: any

}


export type AttendeeProps = {
    first_name: string;
    last_name: string;
    nickname: string;
    imageSrc: string;
}

export type LocationProps = {
    name: string;
    imageSrc: string;
    street_number: string;
    street_address: string;
    unit?: string;
    city: string;
    state: string;
    zip_code: string;
}

export type EventProps = {
    title: string;
    description: string;
    imageSrc?: string;
    href?: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    location?: LocationProps;
    attendees?: AttendeeProps[];
    owner: AttendeeProps;
}

export type FriendProps = {
    first_name: string;
    last_name: string;
    nickname: string;
    imageSrc: string;
}


export interface ProfileDetailProps {
    id: number;
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    imageSrc?: string;
    coverSrc?: string;
    friends?: FriendProps[];
    reviews?: ReviewProps[];
    events?: EventProps[];
    locations?: LocationProps[];
    features?: FeatureCollection;
    vendor?: VENDOR
}

export type ReviewProps = {
    name: string;
    imageSrc: string;
    date: string;
    location: string;
    rating: number;
    review: string;
}