// wordle-clone/app/api/words/route.js
export async function GET() {
  const response = await fetch(
    "https://api.frontendexpert.io/api/fe/wordle-words"
  );
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
