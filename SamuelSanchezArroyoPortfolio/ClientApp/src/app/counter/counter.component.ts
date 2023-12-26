import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public currentCount = 0;
  public currentCount2 = 0;
  deshabilitar = false;


  public incrementCounter() {
    this.currentCount++;
  }
  public incrementCounter2() {
    this.currentCount2 += 2;
  }
  public ResetCounters() {
    this.currentCount = 0;
    this.currentCount2 = 0;
  }
}
