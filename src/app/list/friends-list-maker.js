import { fetchGET } from "../../utils/json-fetch.js"

export async function makeFriendsList() {
    let data
    await fetchGET("/friends").then(resp => data = resp)

    // console.log(data)s

    let fiendsTable = document.getElementById('friends-table')

    data.forEach(friend => {
        let row = fiendsTable.insertRow()

        let fname = row.insertCell()
        let lname = row.insertCell()
        let editButton = row.insertCell()

        fname.innerHTML = friend.first_name
        lname.innerHTML = friend.last_name
        editButton.innerHTML = `<i id="edit-btn" class="fa fa-edit"></i>`
    })

    // console.log(fiendsTable)

}