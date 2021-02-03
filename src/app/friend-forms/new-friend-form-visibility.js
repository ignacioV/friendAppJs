export function handleNewFriendFormVisibility() {
    let openFormBtn = document.getElementById("open-new-form-btn")
    let closeFormBtn = document.getElementById("close-new-form-btn")
    let newFrienForm = document.getElementById("add-friend-form-container")
    show(openFormBtn)
    hide(newFrienForm)

    openFormBtn.onclick = e => {
        show(newFrienForm)
        hide(openFormBtn)
    }
    closeFormBtn.onclick = e => {
        show(openFormBtn)
        hide(newFrienForm)
    }
}

function hide(elem) {
    elem.classList.add("hide")
}

function show(elem) {
    elem.classList.remove("hide")
}