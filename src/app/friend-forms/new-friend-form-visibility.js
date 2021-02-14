import { prepareSaveNewFriend } from "./new-friend-form.js"

export function handleNewFriendFormVisibility() {
    let openFormBtn = document.getElementById("open-new-form-btn")
    let newFrienForm = document.getElementById("add-friend-form-container")

    handleFormVisibility(newFrienForm, openFormBtn, prepareSaveNewFriend)
    
}

export function handleUpdateFriendFormVisibility() {
    let openFormBtns = document.getElementsByClassName("open-update-form-btn")
    let FrienForm = document.getElementById("add-friend-form-container")
    for (let index = 0; index < openFormBtns.length; index++) {
        handleFormVisibility(FrienForm, openFormBtns[index], () => {})
    }
}

function handleFormVisibility(formElem, openFormBtn, prepareForm) {
    let closeFormBtn = document.getElementById("close-new-form-btn")
    
    show(openFormBtn)
    hide(formElem)

    openFormBtn.onclick = e => {
        show(formElem)
        hide(openFormBtn)
        prepareForm()
    }
    closeFormBtn.onclick = e => {
        show(openFormBtn)
        hide(formElem)
    }
}

function hide(elem) {
    elem.classList.add("hide")
}

function show(elem) {
    elem.classList.remove("hide")
}