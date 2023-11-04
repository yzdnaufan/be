
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, getFirestore,  orderBy, query, where} from 'firebase/firestore';
import { limit as lim} from 'firebase/firestore';
import { corsMiddleware } from '@/lib/cors';

import firebase_app from '@/lib/firebase';

const db = getFirestore(firebase_app);

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    corsMiddleware(res,req);
    try {
        switch (req.method) {
            case "POST":
                // Do something
                return res.status(405).json({message : "Method Not Allowed"});
            case "GET":
                const { uname, limit }   = req.query;
                 
                if (uname) {
                    const q = query(collection(db, "yolo"), where("uname", "==", uname), orderBy("timestamp", "desc"), lim(li));
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
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
