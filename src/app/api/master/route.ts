import { getDB } from "@/src/utils/api-routes";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await getDB();
    const master = await db.collection("master").find().toArray();

    return NextResponse.json(master);
  } catch (error) {
    console.error("Ошибка получения списка мастеров", error);
    return NextResponse.json(
      { message: "Ошибка получения списка мастеров" },
      { status: 500 },
    );
  }
}
