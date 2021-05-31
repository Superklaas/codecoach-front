import {JwtPayload} from "jwt-decode";


export interface Token extends JwtPayload{
 features: any;
 role: string;
 profileName: string;
 email: string; 
}
