export type ServiceFilterProps = {
  label: string;
  value: string;
};

export const serviceFilters: ServiceFilterProps[] = [
  { label: "Все услуги", value: "all" },
  { label: "Парикмахерские услуги", value: "hair" },
  { label: "Маникюр и педикюр", value: "nails" },
  { label: "Макияж", value: "makeup" },
  { label: "Косметология", value: "cosmetology" },
  { label: "Брови и ресницы", value: "brows" },
  { label: "Спа-процедуры", value: "spa" },
];
