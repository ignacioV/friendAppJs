import { getFriendsList } from "./list/friends-list.js";
import { handleNewFriendFormVisibility } from "./friend-forms/new-friend-form-visibility.js"
import { toggleRemoval } from "./list/remove-friend.js"
export function app() {
    console.log("running app")

    getFriendsList();
    // saveNewFriend();
    handleNewFriendFormVisibility();
    toggleRemoval()
}