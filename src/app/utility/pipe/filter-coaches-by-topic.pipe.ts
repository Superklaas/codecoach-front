import {Pipe, PipeTransform} from '@angular/core';
import {User} from "../model/User";

@Pipe({
  name: 'filterCoachesByTopic'
})
export class FilterCoachesByTopicPipe implements PipeTransform {

  transform(coaches: User[], topicName: string): User[] {
    if (!topicName) return coaches;
    if (topicName === 'default') return coaches;
    return coaches.filter(coach => coach.topicList.map(topic => topic.name).includes(topicName));
  }

}

