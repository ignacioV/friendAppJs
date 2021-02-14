import { fetchModifying } from "../../utils/json-fetch.js"

function populateForm(selectedRow) {
    document.getElementById("entry-id").value = selectedRow.id

    document.getElementById("name-input").value = selectedRow.childNodes[0].innerText
    document.getElementById("last-name-input").value = selectedRow.childNodes[1].innerText
}

function getFormValues() {
    let updateName = document.getElementById("name-input").value  
    let updateLN = document.getElementById("last-name-input").value
    let id = document.getElementById("entry-id").value

    return {
        id: id,
        fn: updateName,
        ln: updateLN
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
    //TODO pasiimti is mongo pagal id, ir tada usetinti fieldus
    populateForm(selectedRow)
}