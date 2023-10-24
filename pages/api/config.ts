import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const config = process.env.FIREBASE_CONFIG || "";
    return res.status(200).json({"config" : JSON.parse(config)});
};
