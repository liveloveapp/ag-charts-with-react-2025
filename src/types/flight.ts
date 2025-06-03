export interface Flight {
  date: Date;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  hobbs_start: number;
  hobbs_stop: number;
  tach_start: number | null;
  tach_stop: number | null;
  time: number;
  aircraft_id: string;
  aircraft_make: string;
  aircraft_category: string;
}
