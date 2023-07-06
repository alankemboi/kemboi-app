import { Db, MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  )
}

const uri = MONGODB_URI
const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

let client: MongoClient | undefined
let clientPromise: Promise<MongoClient> | undefined

const connect = async (): Promise<Db> => {
  if (!client) {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
  console.log("DB CONNECTED")
  await clientPromise
  return client.db()
}

export default connect
