export interface ServiceItemsProps {
  id: string;
  category_id: string;
  category: string;
  subcategory?: string;
  name: string;
  price: number;
  currency: string;
  duration_minutes: number;
  description?: string;
}
