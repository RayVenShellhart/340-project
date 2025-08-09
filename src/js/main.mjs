import GetQoutes from "./qoute";

function loadQuote() {

    const dataSource = GetQoutes()
    const element = document.getElementById("qoute")
    element.appendChild(dataSource)
}

loadQuote()