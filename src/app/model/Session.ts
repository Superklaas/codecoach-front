export interface Session {
  id: number;
  subject: string;
  date: string;
  startTime: string;
  location: string;
  remarks: string;
  coach_id: number;
  coachee_id: number
}