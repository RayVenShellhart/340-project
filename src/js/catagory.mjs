
import { Catagories } from "./api";

document.addEventListener('DOMContentLoaded', () => {
    const catagories = new Catagories('https://www.themealdb.com/api/json/v1/1/categories.php', 'catagories')
    catagories.init()
})