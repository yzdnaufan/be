// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
import { MongoClient, MongoClientOptions } from "mongodb"

interface CustomMongoClientOptions extends MongoClientOptions {
  useUnifiedTopology?: boolean;
  useNewUrlParser?: boolean;
}

const options: CustomMongoClientOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
} 

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local")
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!(global as any)._mongoClientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI, options)
    ;(global as any)._mongoClientPromise = client.connect()
  }
  clientPromise = (global as any)._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  const client = new MongoClient(process.env.MONGODB_URI, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise