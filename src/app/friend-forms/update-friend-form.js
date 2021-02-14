import { fetchModifying } from "../../utils/json-fetch.js"

function populateForm(selectedRow) {
    document.getElementById("new-name").value = selectedRow.childNodes[0].innerText
    document.getElementById("new-tags").value = selectedRow.childNodes[1].innerText
    document.getElementById("entry-id").value = selectedRow.id
}

function getFormValues() {
    let newName = document.getElementById("new-name").value  
    let newTags = document.getElementById("new-tags").value
    let id = document.getElementById("entry-id").value

    return {
        id: id,
        name: newName,
        tags: newTags
    }
}

export function prepareUpdateNewFriend() {
    let executeBtn = document.getElementById("execute-friend-btn")
    executeBtn.innerText = "Update"
    executeBtn.onclick = e => {
        console.log("updating new friend")
        let updateFriend = getFormValues()
        let requestBody = JSON.stringify(updateFriend)

        fetchModifying('/friends', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        }).then(res => console.log(res))
        document.location.reload()
    }
}

export function openUpdateForm(selectedRow) {
    // console.log(selectedRow);
    populateForm(selectedRow)
}