export const getServicesCount = async (): Promise<number> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL!}/api/serviceItems`,
    );

    if (!res.ok) throw new Error("Ошибка ответа от сервера");

    const data = await res.json();
    return data.length;
  } catch (err) {
    console.error("Ошибка в getServicesCount:", err);
    return 0;
  }
};
