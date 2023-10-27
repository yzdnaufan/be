import { NextApiRequest, NextApiResponse } from "next";
import { firebaseConfig } from "@/lib/firebase";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    
    return res.status(200).json({"config" : firebaseConfig});
};
