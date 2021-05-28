import {FeedbackForCoachee} from "./FeedbackForCoachee";
import {FeedbackForCoach} from "./FeedbackForCoach";

export interface Session {
  id: number;
  subject: string;
  date: string;
  startTime: string;
  location: string;
  remarks: string;
  coach_id: number;
  coachee_id: number;
  coachProfileName: string;
  coacheeProfileName: string;
  status:string;
  feedbackForCoach: FeedbackForCoach ;
  feedbackForCoachee: FeedbackForCoachee ;

}

