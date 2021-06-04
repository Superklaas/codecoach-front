import { BehaviorSubject, Observable, ReplaySubject } from "rxjs";
import { Session } from "../model/Session";

export class SessionQuery {

  private sessionsSubject = new BehaviorSubject<Session[]>(null);
  sessions$ = this.sessionsSubject.asObservable();

  private sessions: Session[];


  constructor(qry$: Observable<Session[]>) {
    qry$.subscribe(sessions => {
      this.sessions = sessions;
      this.next();
    })
  }

  public update(session: Session) {
    if (!this.sessions) {
      return;
    }

    for (let i = 0; i < this.sessions.length; i++) {
      if (this.sessions[i].id === session.id) {
        this.sessions[i] = session;
        break;
      }
    }

    this.next();
  }

  private next() {
    this.sessionsSubject.next(this.sessions);
  }

}
