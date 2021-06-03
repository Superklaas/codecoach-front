import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileService } from '../service/profile.service';
import { RolePersonalisationService } from '../service/role-personalisation.service';

@Directive({
  selector: '[appContextBackground]'
})
export class ContextBackgroundDirective implements OnInit, OnDestroy {

  private appliedClasses: string = "";
  private subscription: Subscription;

  constructor(private renderer: Renderer2, private ref: ElementRef, private personifyService: RolePersonalisationService) {
  }

  ngOnInit() {
    this.applyClasses(this.personifyService.color);

    this.subscription = this.personifyService.color$.subscribe(color => {
      console.log('color change: okay')
      this.applyClasses(color);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  applyClasses(classes: string) {
    console.log(this.renderer);

    this.appliedClasses
      .split(" ")
      .filter(c => c !== "")
      .forEach(c => this.renderer.removeClass(this.ref.nativeElement, c));

    this.appliedClasses = classes;

    this.appliedClasses
      .split(" ")
      .filter(c => c !== "")
      .forEach(c => this.renderer.addClass(this.ref.nativeElement, c));
  }

}
