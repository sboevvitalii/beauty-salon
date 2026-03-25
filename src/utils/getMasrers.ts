import { MasterProps } from "../type/MasterProps";

export const getMasters = async (): Promise<MasterProps[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/master`);

    if (!res.ok) throw new Error("Ошибка ответа от сервера");

    const data: MasterProps[] = await res.json();
    return data;
  } catch (err) {
    console.error("Ошибка в getMasters:", err);
    return [];
  }
};
