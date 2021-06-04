import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileService } from '../service/profile.service';
import { RolePersonalisationService } from '../service/role-personalisation.service';

@Directive({
  selector: '[appContextBackground]'
})
export class ContextBackgroundDirective implements OnInit, OnDestroy {

  // staticClasses contains css classes applied to the target element
  // inside the html template or from other sources.
  // These are classes that should not be influenced by the role personalisation service.
  private staticClasses: string[];
  private dynamicClasses: string = "";
  private subscription: Subscription;

  constructor(private renderer: Renderer2, private ref: ElementRef<HTMLElement>, private personifyService: RolePersonalisationService) {
  }

  ngOnInit() {
    this.staticClasses = this.ref.nativeElement.className.split(" ").map(v => v.trim()).filter(v => v !== "");

    this.updateDynamicClasses(this.personifyService.color);

    this.subscription = this.personifyService.color$.subscribe(color => {
      this.updateDynamicClasses(color);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updateDynamicClasses(classes: string) {
    this.forEachDynamicClass(c => this.renderer.removeClass(this.ref.nativeElement, c));
    this.dynamicClasses = classes;
    this.forEachDynamicClass(c => this.renderer.addClass(this.ref.nativeElement, c));
  }

  private forEachDynamicClass(cb: (c: string) => void) {
    this.dynamicClasses
      .split(" ")
      .filter(c => c !== "")
      .filter(c => !this.staticClasses.includes(c))
      .forEach(cb);
  }

}
