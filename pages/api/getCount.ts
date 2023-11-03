
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, getFirestore, doc, query, where} from 'firebase/firestore';
import { corsMiddleware } from '@/lib/cors';

import firebase_app from '@/lib/firebase';

const db = getFirestore(firebase_app);

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    corsMiddleware(res);
    switch (req.method) {
        case "POST":
            // Do something
            return res.status(405).json({message : "Method Not Allowed"});
        case "GET":
            const { uname }   = req.query;   

            if (uname) {
                const q = query(collection(db, "yolo"), where("uname", "==", uname));
                const results = await getDocs(q);
                return res.status(200).json({message : "OK", data : results.docs.map(doc => doc.data())});
            } else {
                return res.status(405).json({
                    message: "Unknown Error"
                });
            }
        default:
            return res.status(405).json({
                message: "Method Not Allowed"
            });
    }
};
