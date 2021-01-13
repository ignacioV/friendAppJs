import { makeFriendsList } from "./friends-list-maker.js";
import { fetchJson } from "./json-fetch.js";

export function app() {
    console.log("running app")

    makeFriendsList();
}