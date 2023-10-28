import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import test from '@/image/test.jpeg'
import fs from 'fs';

import { NextApiRequest, NextApiResponse } from 'next';

const MODEL_URL = 'ml-model/model.json';

const modelUrl =
   'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
const model = await tf.loadGraphModel(MODEL_URL);
const zeros = tf.zeros([1, 224, 224, 3]);



export default async function ml(req : NextApiRequest, res : NextApiResponse) {
    fs.readFile(MODEL_URL, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the JSON file:', err);
        } else {
          try {
            const jsonData = JSON.parse(data);
            // Now you can work with the parsed JSON data

            res.status(200).json({message : jsonData});
            console.log(jsonData);
          } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
          }
        }
      });
      
};
