import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.BEAUTY_SALON_DB_URL!);

const clientPromise = client.connect();

export const getDB = async () => {
  return (await clientPromise).db(process.env.BEAUTY_SALON_DB_NAME!);
};
