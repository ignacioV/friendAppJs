import { makeFriendsList } from "./list/friends-list-maker.js";
import { fetchJson } from "../utils/json-fetch.js";
import { saveNewFriend } from "./friend-forms/new-friend-form.js"
import { handleNewFriendFormVisibility } from "./friend-forms/new-friend-form-visibility.js"

export function app() {
    console.log("running app")

    makeFriendsList();
    saveNewFriend();
    handleNewFriendFormVisibility();
}