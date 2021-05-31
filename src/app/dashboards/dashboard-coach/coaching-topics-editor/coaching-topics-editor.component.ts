import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";

import { Topic } from 'src/app/utility/model/Topic';
import { User } from 'src/app/utility/model/User';
import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';
import { TopicService } from 'src/app/utility/service/topic.service';
import { UserService } from 'src/app/utility/service/user.service';



const MAX_TOPICS = 2;

@Component({
  selector: 'app-coaching-topics-editor',
  templateUrl: './coaching-topics-editor.component.html',
  styleUrls: ['./coaching-topics-editor.component.css']
})
export class CoachingTopicsEditorComponent implements OnInit {

  @Input()
  public user: User;

  @Output()
  cancelEdit = new EventEmitter();

  @Output()
  saved = new EventEmitter();

  editForm = this.formBuilder.group({
    topics: new FormArray([])
  });

  topicsFromDatabase$: Observable<Topic[]>;

  constructor(private formBuilder: FormBuilder, private topicService: TopicService, private userService: UserService, private roleStuff: RolePersonalisationService) {
  }

  ngOnInit(): void {
    this.user.topicList.forEach(topic => this.topics.push(new FormControl(topic.name, this.getValidators())));
    this.topicsFromDatabase$ = this.topicService.getAllTopics();
  }

  get topics() {
    return this.editForm.get('topics') as FormArray;
  }

  update() {
    this.editForm.markAllAsTouched();

    if (!this.editForm.valid) {
      return
    }

    const topicDtos: Topic[] = (this.topics.value as string[]).map(topic => {
      return {name: topic}
    });

    this.userService.updateTopics(topicDtos, this.user.id)
      .subscribe(
        _ => this.saved.emit(),
        error => this.addErrorToForm(error));
  }

  reset(event: any) {
    event.preventDefault();
  }

  addErrorToForm(errorResponse) {
    this.editForm.setErrors({serverError: errorResponse.error.message});
    console.log(errorResponse);
  }

  deleteTopic(i: number) {
    this.topics.removeAt(i);
  }

  addTopic() {
    this.topics.push(new FormControl("", this.getValidators()));
  }

  canAddTopic(): boolean {
    return this.topics.length < MAX_TOPICS;
  }

  private getValidators() {
    return [Validators.required, Validators.minLength(1), this.noWhitespaceValidator];
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {'whitespace': true};
  }

  get color() {
    return this.roleStuff.color;
  }

}
