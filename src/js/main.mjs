import { reccomended } from "./api";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

const myKeyValue = urlParams.get('id')

console.log(myKeyValue)

document.addEventListener('DOMContentLoaded', () => {
    const page = new reccomended(`${myKeyValue}`)
    page.init()
})