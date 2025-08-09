const baseUrl = import.meta.env.API_LINK

export default async function GetQoutes() {
    // FavQs.com API Example
    const response = await fetch('https://favqs.com/api', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log(data);
}