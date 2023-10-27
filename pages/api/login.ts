import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import {setCookie, getCookie} from "typescript-cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {username, password} = req.body;

    // User Authentication


    // If user is authenticated, generate a token
    if( /* User is authenticated */ false ) {

        const token = jwt.sign(username, process.env.SECRET || "", {
            expiresIn : 60 * 60 * 6 // 6 hours
        });

        setCookie("token", token, {
            httpOnly : true,}
            );
        
        return res.status(200).json({message : "OK"});
    } else {
        return res.status(401).json({message : "Unauthorized"});
    }
};
