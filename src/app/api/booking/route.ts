import { getDB } from "@/src/utils/api-routes";
import { NextResponse } from "next/server";

// GET - получение всех записей
export async function GET() {
  try {
    const db = await getDB();
    const booking = await db.collection("booking").find().toArray();

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Ошибка получения списка записей", error);
    return NextResponse.json(
      { message: "Ошибка получения списка записей" },
      { status: 500 },
    );
  }
}

// POST - создание новой записи
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Валидация обязательных полей
    const requiredFields = ["name", "phone", "service", "date", "time"];
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          message: "Отсутствуют обязательные поля",
          missingFields,
        },
        { status: 400 },
      );
    }

    const db = await getDB();

    // Добавляем метаданные
    const newBooking = {
      ...body,
      createdAt: new Date(),
      status: "pending", // pending, confirmed, cancelled
    };

    const result = await db.collection("booking").insertOne(newBooking);

    return NextResponse.json(
      {
        message: "Запись успешно создана",
        id: result.insertedId,
        booking: newBooking,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Ошибка создания записи", error);
    return NextResponse.json(
      { message: "Ошибка создания записи" },
      { status: 500 },
    );
  }
}

// OPTIONS - для CORS (если нужно)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "GET, POST, OPTIONS",
    },
  });
}
