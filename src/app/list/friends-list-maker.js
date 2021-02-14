import { fetchGET } from "../../utils/json-fetch.js"
import { openUpdateForm } from "../friend-forms/update-friend-form.js"
import { handleUpdateFriendFormVisibility } from "../friend-forms/new-friend-form-visibility.js"
import { prepareUpdateNewFriend } from "../friend-forms/update-friend-form.js"

export async function makeFriendsList() {
    let data
    await fetchGET("/friends").then(resp => data = resp)

    // console.log(data)

    let fiendsTable = document.getElementById('friends-table')

    data.forEach(friend => {
        let tr = fiendsTable.insertRow()

        tr.id = friend._id;

        let fname = tr.insertCell()
        let lname = tr.insertCell()
        let editButton = tr.insertCell()

        fname.innerHTML = friend.first_name
        fname.id = "fn"
        lname.innerHTML = friend.last_name
        lname.id = "ln"
        editButton.innerHTML = `<i class="open-update-form-btn button fa fa-edit"></i>`
        editButton.onclick = event => {
            const selectedElement = event.target.parentElement.parentElement
            if (selectedElement.tagName === 'TR') {
                openUpdateForm(selectedElement)
                prepareUpdateNewFriend();
            }
        }
    })

    handleUpdateFriendFormVisibility();

    // console.log(fiendsTable)

}