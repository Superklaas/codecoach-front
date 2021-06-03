import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RolePersonalisationService} from "../../../utility/service/role-personalisation.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {SessionService} from "../../../utility/service/session.service";
import {Session} from "../../../utility/model/Session";
import {User} from "../../../utility/model/User";
import {UserService} from "../../../utility/service/user.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {InitService} from "../../../utility/service/materialize/init.service";

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit, AfterViewInit {

  sessionId: number;
  session: Session;
  _sessionImage = "https://brewbound-images.s3.amazonaws.com/wp-content/uploads/2011/06/Session-Lager-Bottle-Glass.jpg";

  coaches$: Observable<User[]>;
  coachees$: Observable<User[]>;

  public _editForm = this.formBuilder.group({
    coachProfileName: new FormControl("", [Validators.required, Validators.maxLength(255)]),
    coacheeProfileName: new FormControl("", [Validators.required, Validators.maxLength(255)]),
    subject: new FormControl("", [Validators.required, Validators.maxLength(255), this.noWhitespaceValidator]),
    date: new FormControl("", [Validators.required]),
    startTime: new FormControl("", [Validators.required]),
    location: new FormControl("", [Validators.required, Validators.maxLength(255), this.noWhitespaceValidator]),
  });

  constructor(private roleStuff: RolePersonalisationService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private sessionService: SessionService,
              private userService: UserService,
              private initService: InitService,) {
  }

  ngOnInit(): void {
    this.displaySession();
    this.coaches$ = this.userService.getAllCoaches()
      .pipe(tap(_ => {setTimeout(_ => this.initService.initFormSelect(),10)}));
    this.coachees$ = this.userService.getAll()
      .pipe(tap(_ => {setTimeout(_ => this.initService.initFormSelect(),10)}));
  }

  ngAfterViewInit(): void {}

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

  // get sessionImage() {
  //   return this._sessionImage;
  // }

  submit() {

  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {'whitespace': true};
  }

}
