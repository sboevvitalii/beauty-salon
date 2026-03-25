export type BookingStatus = "pending" | "confirmed" | "canceled" | "completed";

export interface Booking {
  id: string;
  user_id: string;
  master_id: string;
  service_id: string;
  start_time: Date;
  end_time: Date;
  status: BookingStatus;
  comment?: string;
  created_at: Date;
}
