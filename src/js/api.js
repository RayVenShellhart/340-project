/************************* 
 * Mealdb
***************************/


// catagories
export class Catagories {
    constructor() {
        this.api = "https://www.themealdb.com/api/json/v1/1/categories.php"
        this.element = "catagories"
    }

    async fetchData() {
        try {
            const response = await fetch(this.api)
            if (!response.ok) {
                throw new Error(`No good! status: ${response.status}`)
            }
            this.data = await response.json()
            console.log("Data fetched", this.data)
        } catch (error) {
            console.error("error fetching")
        }
    }

    displayInfo() {
        const targetElement = document.getElementById(this.element)
        if (!targetElement) {
            console.error(`Target element with ID '${this.targetElement}' not found`)
            return
        }
        
        const section = document.createElement('section')

        this.data = JSON.stringify(this.data)
        this.data = JSON.parse(this.data)
        if (Array.isArray(this.data.categories)) {
            this.data.categories.forEach(item => {
            console.log('Yep')
            const link = document.createElement('a')
            const title = document.createElement('h2')
            const image = document.createElement('img')
            title.innerHTML = item.strCategory
            image.src = `${item.strCategoryThumb}`
            image.alt = `${item.strCategory}`
            image.width = 200
                image.height = 150
                image.loading = 'lazy'
            link.appendChild(title)
            link.appendChild(image)
            section.appendChild(link)
            link.id = item.strCategory
            link.href = `../food-list?category=${item.strCategory}`    
        });
    targetElement.appendChild(section)
    } else {
        console.error("not an array")
        }
        
    }

    async init() {
        await this.fetchData()
        if (this.data.categories) {
            this.displayInfo()
        }
    }
}


// List
export class foodList {
    constructor(type) {
        this.api = `https://themealdb.com/api/json/v1/1/filter.php?c=${type}`
        this.element = 'list'
    }

        async fetchData() {
        try {
            const response = await fetch(this.api)
            if (!response.ok) {
                throw new Error(`No good! status: ${response.status}`)
            }
            this.data = await response.json()
            console.log("Data fetched", this.data)
        } catch (error) {
            console.error("error fetching")
        }
    }

    displayInfo() {
        const targetElement = document.getElementById(this.element)
        if (!targetElement) {
            console.error(`Target element with ID '${this.targetElement}' not found`)
            return
        }

        const section = document.createElement('section')

        this.data = JSON.stringify(this.data)
        this.data = JSON.parse(this.data)
        if (Array.isArray(this.data.meals)) {
            this.data.meals.forEach(item => {
            console.log('Yep')
            const link = document.createElement('a')
            const title = document.createElement('h2')
            const image = document.createElement('img')
            title.innerHTML = item.strMeal
            image.src = `${item.strMealThumb}`
            image.alt = `${item.strMeal}`
            image.width = 200
            image.height = 150
            image.loading = 'lazy'    
            link.appendChild(title)
            link.appendChild(image)
            section.appendChild(link)
            link.id = item.strMeal
            link.href = `../food-page?id=${item.idMeal}`    
        });
    targetElement.appendChild(section)
    } else {
        console.error("not an array")
        }
        
    }

    async init() {
        await this.fetchData()
        if (this.data.meals) {
            this.displayInfo()
        }
    }
}

// page

export class foodItem {
    constructor(type) {
        this.api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${type}`
        this.element = 'food'
    }

        async fetchData() {
        try {
            const response = await fetch(this.api)
            if (!response.ok) {
                throw new Error(`No good! status: ${response.status}`)
            }
            this.data = await response.json()
            console.log("Data fetched", this.data)
        } catch (error) {
            console.error("error fetching")
        }
    }

    displayInfo() {
        const targetElement = document.getElementById(this.element)
        if (!targetElement) {
            console.error(`Target element with ID '${this.targetElement}' not found`)
            return
        }

        const section = document.createElement('section')

        this.data = JSON.stringify(this.data)
        this.data = JSON.parse(this.data)
        if (Array.isArray(this.data.meals)) {
            this.data.meals.forEach(item => {
            console.log('Yep')
            const title = document.createElement('h2')
            const image = document.createElement('img')
            const ingredients = document.createElement('h3')
                const ingredient1 = document.createElement('p')
                const ingredient2 = document.createElement('p')
                const ingredient3 = document.createElement('p')
                const ingredient4 = document.createElement('p')
                const ingredient5 = document.createElement('p')
                const ingredient6 = document.createElement('p')
                const ingredient7 = document.createElement('p')
                const ingredient8 = document.createElement('p')
                const ingredient9 = document.createElement('p')
                const ingredient10 = document.createElement('p')
                const ingredient11 = document.createElement('p')
                const ingredient12 = document.createElement('p')
                const ingredient13 = document.createElement('p')
                const ingredient14 = document.createElement('p')
                const ingredient15 = document.createElement('p')
                const ingredient16 = document.createElement('p')
                const ingredient17 = document.createElement('p')
                const ingredient18 = document.createElement('p')
                const ingredient19 = document.createElement('p')
                const ingredient20 = document.createElement('p')

                ingredient1.innerHTML = `${item.strIngredient1}: ${item.strMeasure1}`
                ingredient2.innerHTML = `${item.strIngredient2}: ${item.strMeasure2}`
                ingredient3.innerHTML = `${item.strIngredient3}: ${item.strMeasure3}`
                ingredient4.innerHTML = `${item.strIngredient4}: ${item.strMeasure4}`
                ingredient5.innerHTML = `${item.strIngredient5}: ${item.strMeasure5}`
                ingredient6.innerHTML = `${item.strIngredient6}: ${item.strMeasure6}`
                ingredient7.innerHTML = `${item.strIngredient7}: ${item.strMeasure7}`
                ingredient8.innerHTML = `${item.strIngredient8}: ${item.strMeasure8}`
                ingredient9.innerHTML = `${item.strIngredient9}: ${item.strMeasure9}`
                ingredient10.innerHTML = `${item.strIngredient10}: ${item.strMeasure10}`
                ingredient11.innerHTML = `${item.strIngredient11}: ${item.strMeasure11}`
                ingredient12.innerHTML = `${item.strIngredient12}: ${item.strMeasure12}`
                ingredient13.innerHTML = `${item.strIngredient13}: ${item.strMeasure13}`
                ingredient14.innerHTML = `${item.strIngredient14}: ${item.strMeasure14}`
                ingredient15.innerHTML = `${item.strIngredient15}: ${item.strMeasure15}`
                ingredient16.innerHTML = `${item.strIngredient16}: ${item.strMeasure16}`
                ingredient17.innerHTML = `${item.strIngredient17}: ${item.strMeasure17}`
                ingredient18.innerHTML = `${item.strIngredient18}: ${item.strMeasure18}`
                ingredient19.innerHTML = `${item.strIngredient19}: ${item.strMeasure19}`
                ingredient20.innerHTML = `${item.strIngredient20}: ${item.strMeasure20}`

            const intructionsTitle = document.createElement('h3')
            intructionsTitle.innerHTML = 'Instructions' 
            const intructions = document.createElement('p')
            intructions.innerHTML = `${item.strInstructions}`    
            title.innerHTML = item.strMeal
            image.src = `${item.strMealThumb}`
            image.alt = `${item.strMeal}`
            image.width = 200
            image.height = 150
            image.loading = 'lazy'
            ingredients.innerHTML = 'Ingredients'
            section.appendChild(title)
            section.appendChild(image)
                section.appendChild(ingredients)
                section.appendChild(ingredient1)
                section.appendChild(ingredient2)
                section.appendChild(ingredient3)
                section.appendChild(ingredient4)
                section.appendChild(ingredient5)
                section.appendChild(ingredient6)
                section.appendChild(ingredient7)
                section.appendChild(ingredient8)
                section.appendChild(ingredient9)
                section.appendChild(ingredient10)
                section.appendChild(ingredient11)
                section.appendChild(ingredient12)
                section.appendChild(ingredient13)
                section.appendChild(ingredient14)
                section.appendChild(ingredient15)
                section.appendChild(ingredient16)
                section.appendChild(ingredient17)
                section.appendChild(ingredient18)
                section.appendChild(ingredient19)
                section.appendChild(ingredient20)
                section.appendChild(intructionsTitle)
                section.appendChild(intructions)





                const source = document.createElement('a')
                source.innerHTML = 'Source'
                source.href = `${item.strSource}`
                const vid = document.createElement('a')
                vid.innerHTML = 'video'
                vid.href = 'https://www.youtube.com/watch?v=nMyBC9staMU'
                section.appendChild(source)
                section.appendChild(vid)
        });
    targetElement.appendChild(section)
    } else {
        console.error("not an array")
        }
        
    }

    async init() {
        await this.fetchData()
        if (this.data) {
            this.displayInfo()
        }
    }
}


// random
export class reccomended {
    constructor() {
        this.api = `https://www.themealdb.com/api/json/v1/1/random.php`
        this.element = 'reccomend'
    }

        async fetchData() {
        try {
            const response = await fetch(this.api)
            if (!response.ok) {
                throw new Error(`No good! status: ${response.status}`)
            }
            this.data = await response.json()
            console.log("Data fetched", this.data)
        } catch (error) {
            console.error("error fetching")
        }
    }

    displayInfo() {
        const targetElement = document.getElementById(this.element)
        if (!targetElement) {
            console.error(`Target element with ID '${this.targetElement}' not found`)
            return
        }

        const section = document.createElement('section')

        this.data = JSON.stringify(this.data)
        this.data = JSON.parse(this.data)
        if (Array.isArray(this.data.meals)) {
            this.data.meals.forEach(item => {
            console.log('Yep')
            const link = document.createElement('a')
            const title = document.createElement('h2')
            const image = document.createElement('img')
            title.innerHTML = item.strMeal
            image.src = `${item.strMealThumb}`
            image.alt = `${item.strMeal}`
            image.width = 200
            image.height = 150
            image.loading = 'lazy'    
            link.appendChild(title)
            link.appendChild(image)
            section.appendChild(link)
            link.id = item.strMeal
            link.href = `../food-page?id=${item.idMeal}`    
        });
    targetElement.appendChild(section)
    } else {
        console.error("not an array")
        }
        
    }

    async init() {
        await this.fetchData()
        if (this.data.meals) {
            this.displayInfo()
        }
    }
}

// qoute

export class qoute {
    constructor() {
        this.targetElement = 'qoute'
    }

    async fetchData() {
        try {
            const response = await fetch('/api/qotd', {
                headers: { 'Accept': 'application/vnd.favqs.v2+json' }
            })
            if (!response.ok) {
                throw new Error(`No good! status: ${response.status}`)
            }
            this.data = await response.json()
            console.log("Data fetched", this.data)
        } catch (error) {
            console.error("error fetching data:")
        }
    }
    
    displayQoute() {
        const element = document.getElementById(this.targetElement)

        const section = document.createElement('section')
        const body = document.createElement('h2')
        const author = document.createElement('h2')
        body.innerHTML = this.data.quote.body
        author.innerHTML = this.data.quote.author
        section.appendChild(body)
        section.appendChild(author)
        section.id = 'qoutes'
        element.appendChild(section)

        // this.data = JSON.stringify(this.data)
        // this.data = JSON.parse(this.data)
        // if (Array.isArray(this.data.quote)) {
        //     this.data.quote.forEach(item => {
        //         console.log(item.body)
        //         const body = document.createElement("h2")
        //         body.innerHTML = item.body
        //         section.appendChild(body)
        //     })
        //     element.appendChild(section)
        // } else {
        //     console.error('not array')
        // }
    }

    async init() {
        await this.fetchData()
        this.displayQoute()

    }
}

