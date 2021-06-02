import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/User';

@Pipe({
  name: 'searchCoach'
})
export class SearchCoachPipe implements PipeTransform {

  transform(coaches: User[], searchTerm: string): any[] {
    if (searchTerm == undefined || searchTerm.trim().length < 3) {
      return coaches;
    }
    return coaches.filter(coach => { return coach.profileName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) });
  }

}
