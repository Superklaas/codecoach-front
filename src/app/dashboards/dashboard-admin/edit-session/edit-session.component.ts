import {Component, OnInit} from '@angular/core';
import {RolePersonalisationService} from "../../../utility/service/role-personalisation.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {SessionService} from "../../../utility/service/session.service";
import {Session} from "../../../utility/model/Session";

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {

  sessionId: number;
  session: Session;
  _sessionImage = "https://brewbound-images.s3.amazonaws.com/wp-content/uploads/2011/06/Session-Lager-Bottle-Glass.jpg";

  public _editForm = this.formBuilder.group({
    subject: new FormControl("", [Validators.required, Validators.maxLength(255), this.noWhitespaceValidator]),
    date: new FormControl("", [Validators.required]),
    startTime: new FormControl("", [Validators.required]),
    location: new FormControl("", [Validators.required, Validators.maxLength(255), this.noWhitespaceValidator]),
  });

  constructor(private roleStuff: RolePersonalisationService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.displaySession();
  }

  private displaySession() {
    this.sessionId = Number(this.route.snapshot.paramMap.get('id'));
    this.sessionService.getSessionById(this.sessionId)
      .subscribe(session => {
        this.session = session;
        this._editForm.patchValue(session);
      })
  }

  get editForm() {
    return this._editForm;
  }

  get color() {
    return this.roleStuff.color;
  }

  get sessionImage() {
    return this._sessionImage;
  }

  submit() {

  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {'whitespace': true};
  }

}
