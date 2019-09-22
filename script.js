'use strict';

const input = document.body.querySelector(".userInput");
const button = document.body.querySelector(".enter");
const ul = document.body.querySelector("ul");
let li;

function createNewLi() {
    li = document.createElement('li');
}

function insertUserInputInLi() {
    li.textContent = input.value;
}

function addNewLiInDom() {
    ul.insertAdjacentElement("beforeend", li);
}

function getUserInputEnter(key) {
    if (key.keyCode == 13) {
        addLiToDoList();
    }
}

function emptyField() {
    input.value = "";
}

function addLiToDoList() {
    if (input.value.length > 0) {
        createNewLi();
        insertUserInputInLi();
        addNewLiInDom();
        emptyField();
    }
}

input.addEventListener( "keypress" , getUserInputEnter);
button.addEventListener( "click" , addLiToDoList);