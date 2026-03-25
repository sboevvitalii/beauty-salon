import { getDB } from "@/src/utils/api-routes";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await getDB();
    const services = await db.collection("services").find().toArray();

    return NextResponse.json(services);
  } catch (error) {
    console.error("Ошибка получения списка услуг", error);
    return NextResponse.json(
      { message: "Ошибка получения списка услуг" },
      { status: 500 },
    );
  }
}
