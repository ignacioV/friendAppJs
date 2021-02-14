import { getFriendsList } from "./list/friends-list.js";
import { handleNewFriendFormVisibility } from "./friend-forms/new-friend-form-visibility.js"

export function app() {
    console.log("running app")

    getFriendsList();
    // saveNewFriend();
    handleNewFriendFormVisibility();
}