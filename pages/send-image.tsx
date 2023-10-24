'use client'
import React from "react";
import signIn from "@/lib/firebase/signin"
import { useRouter } from 'next/navigation'
import { useState } from "react";

function Page() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [base64String, setBase64String] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target && event.target.result) {
                    const base64 = event.target.result as string;
                    const base64WithoutPrefix = base64.split(',')[1];
                    setBase64String(base64WithoutPrefix);
                }
            };
            reader.readAsDataURL(file);
        }
    };


    const handleUpload = () => {
    if (selectedFile) {
        // You can send the file to a server or perform other actions here.
        console.log('Uploading:', selectedFile.name);
        console.log('File type:', selectedFile.text);
        console.log('Base 64 string:', base64String);
    } else {
        alert('Please select a file to upload.');
    }
    };

    return (
    <div className="wrapper">
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    </div>);
}

export default Page;