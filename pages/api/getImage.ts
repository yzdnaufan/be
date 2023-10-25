
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, getFirestore, doc} from 'firebase/firestore';
import { corsMiddleware } from '@/lib/cors';

import firebase_app from '@/lib/firebase';

const db = getFirestore(firebase_app);

async function handler(req : NextApiRequest, res : NextApiResponse) {
    corsMiddleware(res);
    switch (req.method) {
        case "POST":
            // Do something
            return res.status(405).json({message : "Method Not Allowed"});
        case "GET":
            const { all }   = req.query;   

            if (all) {
                
                const querySnapshot = await getDocs(collection(db, "esp"));
                return res.status(200).json({message : "OK", data : querySnapshot.docs.map(doc => doc.data())});

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
