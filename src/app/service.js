import { makeFriendsList } from "./list/friends-list-maker.js";
import { handleNewFriendFormVisibility } from "./friend-forms/new-friend-form-visibility.js"

export function app() {
    console.log("running app")

    makeFriendsList();
    // saveNewFriend();
    handleNewFriendFormVisibility();
}