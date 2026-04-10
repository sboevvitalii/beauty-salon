import { MasterProps } from "@/src/type/MasterProps";

// Кэш для хранения данных мастеров
let mastersCache: MasterProps[] | null = null;

export const getMasters = async (): Promise<MasterProps[]> => {
  if (mastersCache) {
    return mastersCache;
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/master`);

    if (!res.ok) throw new Error("Ошибка ответа от сервера");

    const data: MasterProps[] = await res.json();
    console.log("Загружены мастера:", data); // Проверьте, что приходит
    mastersCache = data;
    return data;
  } catch (err) {
    console.error("Ошибка в getMasters:", err);
    return [];
  }
};

// Получить мастера по ID с использованием кэша
export const getMasterById = async (
  id: string | number,
): Promise<MasterProps | null> => {
  const masters = await getMasters();
  // Сравниваем, преобразуя оба значения к строке
  return masters.find((m) => String(m.id) === String(id)) || null;
};

// Получить имя мастера по ID
export const getMasterNameById = async (
  id: string | number,
): Promise<string> => {
  const master = await getMasterById(id);
  if (!master) {
    console.warn(`Мастер с id ${id} не найден`);
    return String(id);
  }
  return `${master.name} — ${master.position}`;
};

// Сброс кэша
export const clearMastersCache = () => {
  mastersCache = null;
};
