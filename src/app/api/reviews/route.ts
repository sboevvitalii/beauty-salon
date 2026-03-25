import { getDB } from "@/src/utils/api-routes";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await getDB();
    const reviewsList = await db.collection("reviews").find().toArray();

    const totalReviews = reviewsList.length;

    const avgRating =
      totalReviews > 0
        ? (
            reviewsList.reduce((sum, r) => sum + (r.rating || 0), 0) /
            totalReviews
          ).toFixed(1)
        : 0;

    const recommendedCount = reviewsList.filter((r) => r.recommended).length;
    const recommendedPercent =
      totalReviews > 0
        ? Math.round((recommendedCount / totalReviews) * 100)
        : 0;

    const uniqueClients = Array.from(
      new Set(reviewsList.map((r) => r.user_id)),
    );
    const totalClients = uniqueClients.length;

    const comments = reviewsList.map((r) => r.comment || "");

    const serviceIds = reviewsList.map((r) => r.service_id);

    return NextResponse.json({
      reviewsList,
      totalReviews,
      avgRating,
      recommendedPercent,
      totalClients,
      comments,
      serviceIds,
    });
  } catch (error) {
    console.error("Ошибка получения отзывов", error);
    return NextResponse.json(
      { message: "Ошибка получения отзывов" },
      { status: 500 },
    );
  }
}
