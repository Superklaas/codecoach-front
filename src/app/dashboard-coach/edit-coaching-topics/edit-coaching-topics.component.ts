import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {Topic} from "../../model/Topic";
import {TopicService} from "../../service/topic.service";

@Component({
  selector: 'app-edit-coaching-topics',
  templateUrl: './edit-coaching-topics.component.html',
  styleUrls: ['./edit-coaching-topics.component.css']
})
export class EditCoachingTopicsComponent implements OnInit {

  topics$: Observable<Topic[]>;

  private _editForm = this.formBuilder.group({
    topic1: new FormControl("",),
    topic2: new FormControl("",)
  });

  constructor(private formBuilder: FormBuilder, private topicService: TopicService) { }

  ngOnInit(): void {
    this.topics$ = this.topicService.getAllTopics();
  }

  get editForm() {
    return this._editForm;
  }

  update() {

  }

  cancel() {

  }
}
