export default async function GetQoutes() {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:5173");
  const response = await fetch("https://favqs.com/api", {
    mode: "cors",
    method: "GET",
    headers: headers,
  });
  const data = JSON.stringify(response);
  console.log(data);
}
