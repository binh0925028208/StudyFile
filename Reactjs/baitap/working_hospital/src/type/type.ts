import type { Dayjs } from "dayjs";

export interface Dentists {
  id: number;
  name: string;
  status: number;
  image: string;
  desc: string;
  job: string;
}
export interface Order {
  id: number;
  dentist: string;
  date: string;
  address: string;
}
