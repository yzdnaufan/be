// import env
import { config } from 'dotenv'

config()
const fb =JSON.parse( process.env.FIREBASE_CONFIG || '{}')


// next app get request
export async function GET() {
    return new Response(JSON.stringify({ firebase: fb }), { headers: new Headers({ 'Content-Type': 'application/json' }) })
}