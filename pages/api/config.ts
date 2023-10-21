import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json({"config" : JSON.parse(process.env.FIREBASE_CONFIG)});
};
