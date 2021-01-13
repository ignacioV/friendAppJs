import { fetchJson } from "./json-fetch.js"

export async function makeFriendsList() {
    let data
    await fetchJson("/data/MOCK_DATA.json").then(resp => data = resp)

    console.log(data)

    let fiendsTable = document.getElementById('friends-table')

    data.forEach(friend => {
        let row = fiendsTable.insertRow()

        let fname = row.insertCell()
        let lname = row.insertCell()

        fname.innerHTML = friend.first_name
        lname.innerHTML = friend.last_name
    })

    console.log(fiendsTable)

}