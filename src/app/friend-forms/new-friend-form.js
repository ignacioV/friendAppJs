import { fetchPOST } from "../../utils/json-fetch.js"

export function newFriendForm() {
    let newName = document.getElementById("new-name").value  
    let newTags = document.getElementById("new-tags").value

    return {
        name: newName,
        tags: newTags
    }
}

export function saveNewFriend() {
    document.getElementById("new-friend-btn").onclick = e => {
        console.log("saving new friend")
        let newFriend = newFriendForm()
        let requestBody = JSON.stringify(newFriend)

        fetchPOST('/friends', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        }).then(res => console.log(res))
    }
}