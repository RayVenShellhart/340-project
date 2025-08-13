import { foodList } from "./api";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const myKeyValue = urlParams.get("category");

console.log(myKeyValue);

document.addEventListener("DOMContentLoaded", () => {
  const list = new foodList(`${myKeyValue}`);
  list.init();
});
