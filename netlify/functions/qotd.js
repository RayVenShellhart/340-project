export async function handler() {
  const res = await fetch("https://favqs.com/api/qotd", {
    headers: { Accept: "application/vnd.favqs.v2+json" },
  });
  const data = await res.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // so your site can use it
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}
