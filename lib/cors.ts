import { NextApiRequest, NextApiResponse } from "next";

const origin = ['http://localhost:3000, https://web.chickcount.tech, https://web-frontend-liard.vercel.app']

export function corsMiddleware(res: NextApiResponse, req: NextApiRequest){
    const origin = req.headers.origin;
    
    return new Promise<void>((resolve, reject) => {
        res.setHeader('Access-Control-Allow-Origin', origin || '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        resolve();
    }
    );
}