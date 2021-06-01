import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XpService {

   silverThreshhold: number = 50; 
   goldThreshhold: number = 125; 
   platinumThreshhold: number = 250; 
   rubyThreshhold: number = 625; 
   diamondThreshhold: number = 1250; 
  constructor() { }

  getXpLevel(xp: number): string {
    if (xp >= this.diamondThreshhold) {
      return 'Diamond';
    }
    if (xp >= this.rubyThreshhold) {
      return 'Ruby';
    }
    if (xp >= this.platinumThreshhold) {
      return 'Platinum';
    }
    if (xp >= this.goldThreshhold) {
      return 'Gold';
    }
    if (xp >= this.silverThreshhold) {
      return 'Silver';
    }
    return 'Bronze'
  }

  getXpPercentage(xp: number): number{
    switch(this.getXpLevel(xp)){
      case 'Bronze': return xp/this.silverThreshhold;
      case 'Silver': return (xp-this.silverThreshhold)/(this.goldThreshhold-this.silverThreshhold);
      case 'Gold': return (xp-this.goldThreshhold)/(this.platinumThreshhold-this.goldThreshhold);
      case 'Platinum': return (xp-this.platinumThreshhold)/(this.rubyThreshhold-this.platinumThreshhold);
      case 'Ruby': return (xp-this.rubyThreshhold)/(this.diamondThreshhold-this.rubyThreshhold);
      case 'Diamond': return 100;
    }
  }

  getNextThreshhold(xp: number): string{
    switch(this.getXpLevel(xp)){
      case 'Bronze': return this.silverThreshhold+'';
      case 'Silver': return this.goldThreshhold+'';
      case 'Gold': return this.platinumThreshhold+'';
      case 'Platinum': return this.rubyThreshhold+'';
      case 'Ruby': return this.diamondThreshhold+'';
      case 'Diamond': return '∞';
    }
  }



}
