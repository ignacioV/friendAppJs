import { fetchModifying } from "../../utils/json-fetch.js"

function newFriendForm() {
    let newName = document.getElementById("new-name").value  
    let newTags = document.getElementById("new-tags").value

    return {
        name: newName,
        tags: newTags
    }
}

export function prepareSaveNewFriend() {
    document.getElementById("new-name").value = ''
    document.getElementById("new-tags").value = ''

    let executeBtn = document.getElementById("execute-friend-btn")
    executeBtn.innerText = "Create new"
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
        }).then(res => console.log(res))
        document.location.reload()
    }
}