import { getDB } from "@/src/utils/api-routes";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { phoneNumber, surname, firstName, password, birthdayDate, email } =
      await request.json();

    const db = await getDB();

    const existingUser = await db.collection("user").findOne({
      phoneNumber,
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Пользователь с таким телефоном уже существует" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.collection("user").insertOne({
      phoneNumber,
      surname,
      firstName,
      password: hashedPassword,
      birthdayDate: new Date(birthdayDate),
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        userId: result.insertedId,
        user: {
          phoneNumber,
          surname,
          firstName,
          email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Ошибка регистрации:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
