import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req : NextApiRequest, res : NextApiResponse) {
    switch (req.method) {
        case "POST":
            // Do something
            return res.status(200).json(req.query);
            break;
        case "GET":
            return res.status(405).json({
                message: "Method Not Allowed"
            });
        default:
            break;
    }
};
