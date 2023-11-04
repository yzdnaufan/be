
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, getFirestore, limit as li, query, where, orderBy} from 'firebase/firestore';
import { corsMiddleware } from '@/lib/cors';

import firebase_app from '@/lib/firebase';

const db = getFirestore(firebase_app);

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    corsMiddleware(res,req);
    switch (req.method) {
        case "POST":
            // Do something
            return res.status(405).json({message : "Method Not Allowed"});
        case "GET":
            const { all, uname, limit }   = req.query;   
            const lim = limit ? Number(limit[0]) : 20;
            
            if (all) {
                const q = query(collection(db, "esp"), li(lim), orderBy("timestamp", "desc") );
                const querySnapshot = await getDocs(q);
                return res.status(200).json({message : "OK", data : querySnapshot.docs.map(doc => doc.data())});

            } 
            else if(uname) {
                const q = query(collection(db, "esp"), where("uname", "==", uname), li(lim), orderBy("timestamp", "desc") );
                const results = await getDocs(q);
                return res.status(200).json({message : "OK", data : results.docs.map(doc => doc.data())});
            }
            else {
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
