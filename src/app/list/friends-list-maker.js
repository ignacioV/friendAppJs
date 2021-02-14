import { fetchGET } from "../../utils/json-fetch.js"

export async function makeFriendsList() {
    let data
    await fetchGET("/friends").then(resp => data = resp)

    console.log(data)

    let fiendsTable = document.getElementById('friends-table')

    data.forEach(friend => {
        let tr = fiendsTable.insertRow()

        tr.id = friend._id;

        let fname = tr.insertCell()
        let lname = tr.insertCell()
        let editButton = tr.insertCell()

        fname.innerHTML = friend.first_name
        lname.innerHTML = friend.last_name
        editButton.innerHTML = `<i id="edit-btn" class="fa fa-edit"></i>`
    })

    // console.log(fiendsTable)

}