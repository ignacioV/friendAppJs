import { fetchModifying } from "../../utils/json-fetch.js"

function newFriendForm() {
    let newName = document.getElementById("name-input").value  
    let newTags = document.getElementById("last-name-input").value

    return {
        name: newName,
        tags: newTags
    }
}

export function prepareSaveNewFriend() {
    document.getElementById("name-input").value = ''
    document.getElementById("last-name-input").value = ''

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
        }).then(res => console.log(res))
        document.location.reload()
    }
}