import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styleUrls: ['./increasing.component.css']
})
export class IncreasingComponent {

  @Input() typeProgress: string;

  @Input('value') progress: number = 50;

  @Output('value') valueOut: EventEmitter<number> = new EventEmitter();
 
  progressPercent(value: number): number {
    if (this.progress >= 100 && value >= 0) {
      this.valueOut.emit(100);
      return this.progress = 100;
    } 
    if (this.progress <= 0 && value < 0) {
      this.valueOut.emit(0);
      return this.progress = 0;
    }
    this.progress  = this.progress + value;
    this.valueOut.emit(this.progress);
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress  = newValue;
    }
    this.valueOut.emit(newValue);
  }

}
