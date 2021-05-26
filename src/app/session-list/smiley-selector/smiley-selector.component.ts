import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-smiley-selector',
  templateUrl: './smiley-selector.component.html',
  styleUrls: ['./smiley-selector.component.css']
})
export class SmileySelectorComponent implements OnInit {
  @Input()
  public rating: number
  @Output()
  scoreUpdate= new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  selectRating(number: number) {
    this.rating = number;
    this.scoreUpdate.emit(this.rating)
  }
}
