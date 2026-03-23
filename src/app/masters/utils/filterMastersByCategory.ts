import { Master } from "@/src/type/Master";

export const filterMastersByCategory = (
  masters: Master[],
  categoryId: string,
) => {
  if (categoryId === "all") return masters;

  const filters: Record<string, (master: Master) => boolean> = {
    stylist: (m) =>
      m.position.includes("Стилист") || m.position.includes("Барбер"),
    makeup: (m) => m.position.includes("Визажист"),
    cosmetologist: (m) => m.position.includes("Косметолог"),
    nail: (m) =>
      m.position.includes("маникюра") || m.position.includes("педикюра"),
    brow: (m) => m.position.includes("Бровист"),
    spa: (m) => m.position.includes("Спа"),
  };

  return masters.filter(filters[categoryId] || (() => false));
};
