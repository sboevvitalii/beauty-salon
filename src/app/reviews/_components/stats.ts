import { MessageCircle, Star, ThumbsUp, Users } from "lucide-react";

async function fetchStats() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Ошибка при получении отзывов");
  return res.json();
}

export async function getStats() {
  const data = await fetchStats();

  return [
    { value: data.avgRating, label: "Средний рейтинг", icon: Star },
    { value: data.totalReviews, label: "Отзывов", icon: MessageCircle },
    {
      value: data.recommendedPercent + "%",
      label: "Рекомендуют",
      icon: ThumbsUp,
    },
    { value: data.totalClients, label: "Клиентов", icon: Users },
  ];
}
