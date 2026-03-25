"use client";

import { useEffect, useState } from "react";
import FilteredList from "./FelteredList";
import FilterHeader from "./FilterHeader";
import { Review } from "@/src/type/ReviewsProps";
import { serviceFilters } from "./serviceFilters";

export default function FilteredBlock() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [isActive, setActive] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews`,
          { cache: "no-store" },
        );
        const data = await res.json();

        const reviewsArray: Review[] = Array.isArray(data.reviewsList)
          ? data.reviewsList
          : Array.isArray(data)
            ? data
            : [];

        setReviews(reviewsArray);
        setFilteredReviews(reviewsArray); // Инициализируем отфильтрованные отзывы
      } catch (error) {
        console.error("Ошибка загрузки отзывов:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleFilter = (type: string) => {
    setActive(type);

    let filteredData: Review[];
    if (type === "all") {
      filteredData = reviews;
    } else {
      filteredData = reviews.filter((item) => item.service_id === type);
    }

    setFilteredReviews(filteredData); // Обновляем отфильтрованные отзывы
  };

  if (loading) {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">Загрузка фильтров...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Фильтры */}
      <FilterHeader
        handleFilter={handleFilter}
        isActive={isActive}
        serviceFilters={serviceFilters}
      />

      {/* Список отзывов */}
      <FilteredList reviews={filteredReviews} />
    </>
  );
}
