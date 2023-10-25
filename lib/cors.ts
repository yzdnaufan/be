import { NextApiResponse } from "next";

export function corsMiddleware(res: NextApiResponse){
    return new Promise<void>((resolve, reject) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        resolve();
    }
    );
}