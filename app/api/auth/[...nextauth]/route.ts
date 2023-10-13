
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { config } from "dotenv";

config()

export const authOptions = {
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        })
    ],
}

const handler = NextAuth(authOptions)

export  {handler as GET, handler as POST}


