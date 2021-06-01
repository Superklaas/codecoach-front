import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Topic} from "../../utility/model/Topic";
import {TopicService} from "../../utility/service/topic.service";
import {InitService} from "../../utility/service/materialize/init.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-topic-filter',
  templateUrl: './topic-filter.component.html',
  styleUrls: ['./topic-filter.component.css']
})
export class TopicFilterComponent implements OnInit, AfterViewInit {

  topics$: Observable<Topic[]>;

  constructor(private initService: InitService, private topicService: TopicService) { }

  ngOnInit(): void {
    this.topics$ = this.topicService.getAllTopics()
      .pipe(tap(_ => {setTimeout(_ => this.initService.initFormSelect(),10)}));
  }

  ngAfterViewInit(): void {}

}
