import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote-details",
  templateUrl: "quote-details.component.html",
  styles: ["quote-details.component.css"]
})
export class QuoteDetailsComponent implements OnInit {
  clickCounter: number = 0;
  dislikeCounter: number = 0;

  @Input() quote: Quote;

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  countClick() {
    this.clickCounter += 1;
  }
  countDislike() {
    this.dislikeCounter += 1;
  }
}
