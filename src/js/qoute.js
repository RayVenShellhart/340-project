




// export default class Quotes {
//     constructor(apiUrl, target) {
//         this.apiUrl = apiUrl
//         this.target = 'qoute'
//     }

//     async GetData() {
//         try {
//             const response = await fetch(this.apiUrl)
//             if (!response.ok) {
//                 throw new Error(`No good! ${response.status}`)
//             }
//             this.result = await response.json();
//             console.log("Data fetched", this.result);
//         } catch (error) {
//             console.error(error.message)
//         }
//     }

//     displayQoute() {
//         const targetElement = document.getElementById(this.target)
//         if (!targetElement) {
//             console.error(`Target Element ${this.targetElement} not found`)
//         }

        

//         this.result = JSON.stringify(this.result)
//         this.result = JSON.parse(this.data)
//         if (Array.isArray(this.data)) {
//             this.data.forEach(item => {
//                 console.log(item)
//                 const display = document.createElement('h2')
//                 display.innerHTML = item
//             });
//         targetElement.appendChild(display)
//         } else {
//             console.error("my Array is not an array")
//         }
//     }

//     async init() {
//         await this.GetData()
//         if (this.result) {
//             this.displayQoute()
//         }
//     }
// }


export default async function GetQoutes() {
    const response = await fetch("https://favqs.com/api/qotd")
        .then(response => response.json())
        .then(data => console.log(data))

    
}