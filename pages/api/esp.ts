import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

import firebase_app from '@/lib/firebase';

const db = getFirestore(firebase_app);

async function uploadData(c:string, data:any, esp:any,cam_part :any, uname:any) {
    try {
        const docRef = await addDoc(collection(db, c), {
            FileName: esp,
            image : data,
            timestamp : new Date(Date.now()).toISOString(),
            cam_part : cam_part,
            uname : uname
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    switch (req.method) {
        case "POST":
            const { myFilename, myFile, part, uname }= req.body
            // Do something
            await uploadData("esp", myFile , myFilename, part, uname);
            return res.status(200).json({message : "OK"});
            break;
        case "GET":
            return res.status(405).json({
                message: "Method Not Allowed"
            });
        default:
            break;
    }
};
