import { fetchModifying } from "../../utils/json-fetch.js"
import { getFriendsList } from "../list/friends-list.js"

function newFriendForm() {
    let newFN = document.getElementById("name-input").value  
    let newLN = document.getElementById("last-name-input").value
    let rating = document.getElementById("rating-input").value

    return {
        fn: newFN,
        ln: newLN,
        rating: rating
    }
}

export function prepareSaveNewFriend() {
    document.getElementById("name-input").value = ''
    document.getElementById("last-name-input").value = ''
    document.getElementById("rating-input").value = ''

    let executeBtn = document.getElementById("execute-friend-btn")
    executeBtn.innerText = "Create new"
    executeBtn.style.background = "lightgreen"
    
    executeBtn.onclick = e => {
        console.log("saving new friend")
        let newFriend = newFriendForm()
        let requestBody = JSON.stringify(newFriend)

        fetchModifying('/friends', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        }).then(res =>  getFriendsList(false))
    }
}