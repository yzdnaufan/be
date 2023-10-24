import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

import firebase_app from '@/lib/firebase';

const db = getFirestore(firebase_app);

async function uploadData(c:string, data:any, esp:any) {
    try {
        const docRef = await addDoc(collection(db, c), {
            FileName: esp,
            image : data,
            timestamp : new Date(Date.now()).toISOString()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    switch (req.method) {
        case "POST":
            const { myFilename, myFile }= req.query
            // Do something
            await uploadData("esp", myFile , myFilename);
            return res.status(200).json(myFilename);
            break;
        case "GET":
            return res.status(405).json({
                message: "Method Not Allowed"
            });
        default:
            break;
    }
};
