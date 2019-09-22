'use strict';

const userInput = document.querySelector(".inputUser");
const button = document.querySelector(".enter");
const ul = document.querySelector("ul");
let li;

function createNewLi() {
    li = document.createElement('li');
}

function insertUserInputInLi() {
    li.textContent = userInput.nodeValue;
}

function addNewLiInDom() {
    ul.insertAdjacentElement("beforeend", "li");
}

function addLiToDoList() {

}

function getUserInputClick() {

}

function getUserInputEnter() {

}
