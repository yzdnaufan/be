
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, getFirestore, doc} from 'firebase/firestore';

import firebase_app from '@/lib/firebase';

const db = getFirestore(firebase_app);

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    switch (req.method) {
        case "POST":
            // Do something
            return res.status(405).json({message : "Method Not Allowed"});
        case "GET":
            const { all }   = req.query;   


            if (all) {
                const qs = await getDocs(collection(db, "esp"));
                qs.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
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
