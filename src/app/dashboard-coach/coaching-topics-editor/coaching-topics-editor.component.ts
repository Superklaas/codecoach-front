import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../../model/User";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

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
  onSave = new EventEmitter();

  editForm = this.formBuilder.group({
    topics: new FormArray([])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user.topicList.forEach(topic => this.topics.push(new FormControl(topic.name)))
  }

  get topics() {
    return this.editForm.get('topics') as FormArray;
  }

  update() {

  }
}
