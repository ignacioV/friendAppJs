import { makeFriendsList } from "./friends-list-maker.js";
import { fetchJson } from "../utils/json-fetch.js";
import { saveNewFriend } from "./new-friend-form.js"

export function app() {
    console.log("running app")

    makeFriendsList();
    saveNewFriend();
}