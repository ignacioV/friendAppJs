import { fetchModifying, fetchGET } from "../../utils/json-fetch.js"
import { getFriendsList } from "../list/friends-list.js"

function populateForm(selectedEntry) {
    document.getElementById("entry-id").value = selectedEntry._id

    document.getElementById("name-input").value = selectedEntry.first_name
    document.getElementById("last-name-input").value = selectedEntry.last_name
    document.getElementById("rating-input").value = selectedEntry.rating
}

function getFormValues() {
    let id = document.getElementById("entry-id").value

    let updateName = document.getElementById("name-input").value  
    let updateLN = document.getElementById("last-name-input").value
    let updateRating = document.getElementById("rating-input").value

    return {
        id: id,
        fn: updateName,
        ln: updateLN,
        rating: updateRating
    }
}

export function prepareUpdateNewFriend() {
    let executeBtn = document.getElementById("execute-friend-btn")
    executeBtn.innerText = "Update"
    executeBtn.style.background = "lightblue"

    executeBtn.onclick = e => {
        console.log("updating new friend")
        let updateFriend = getFormValues()
        let requestBody = JSON.stringify(updateFriend)

        fetchModifying(`/friends/${updateFriend.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        }).then(res => getFriendsList(false))
    }
}

export function openUpdateForm(selectedRow) {
    // console.log(selectedRow);
    fetchGET(`/friends/${selectedRow.id}`)
        .then(selectedEntry => populateForm(selectedEntry))
}