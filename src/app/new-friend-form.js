export function newFriendForm() {
    let newName = document.getElementById("new-name").value  
    let newTags = document.getElementById("new-tags").value

    return {
        name: newName,
        tags: newTags
    }
}

export function saveNewFriend() {
    document.getElementById("new-friend-btn").onclick = e => {
        console.log("saving new friend")
        let newFriend = newFriendForm()
        console.log(newFriend);
    }
}