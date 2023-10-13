

export async function GET() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return new Response(JSON.stringify({ message: data.title }), { headers: { 'Content-Type': 'application/json' } });
};

export async function POST(req : Request){
    const r = await req.json();
    return new Response(JSON.stringify({ message: r }), { headers: { 'Content-Type': 'application/json' } });
}