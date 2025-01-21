import {A, AccessorWithLatest, createAsync} from "@solidjs/router";
import {AUTHENTICATION_TOKEN, MoviesData, USER} from "~/lib/store";
import {getUser, getUserToken} from "~/lib/users";
import {createEffect, For} from "solid-js";
import {getMovies} from "~/lib/movies";


export const route = {
    preload() {
        getMovies();
        getUserToken();
        getUser();
    }
}

export default function Home() {

    const movies: AccessorWithLatest<MoviesData | undefined> = createAsync(async () => getMovies());

    const token: AccessorWithLatest<AUTHENTICATION_TOKEN | undefined> = createAsync(async () => getUserToken());

    const user: AccessorWithLatest<USER | undefined> = createAsync(async () => getUser());

    createEffect(() => {
        console.log("movies", movies())
        console.log("auth on index", token())
        console.log("user on index", user())

    })
    return (
        <main class="text-center mx-auto p-4">
            <h1 class="max-6-xs text-6xl text-red-7 font-thin uppercase my-16">
                SS FE - {user()?.name} - {token()?.token}
            </h1>

            <ul class={'text-gray-11'}>
                <For each={movies()?.movies}>
                    {movie => (
                        <li>
                            <span>{movie.title}</span>
                            <span>{movie.year}</span>
                            <span>{movie.runtime}</span>
                            <span>{movie.genres}</span>


                        </li>
                    )}
                </For>
            </ul>
            <A class={"mt-4 w-full h-24 text-red-7"} href={"/register"}>Register</A>
        </main>
    );
}
