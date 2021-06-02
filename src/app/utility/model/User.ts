import {Topic} from "./Topic";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  profileName: string;
  email: string;
  role: string;
  availability: string;
  introduction: string;
  imageUrl: string;
  topicList: Topic[];
  xp: number;
}
