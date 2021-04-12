import { Component } from "@angular/core";

@Component({
  selector: "counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent {
  public counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
