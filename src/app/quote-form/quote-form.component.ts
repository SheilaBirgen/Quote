import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote("","",new Date(), 0, 0);

  @Output() addQuotes = new EventEmitter<Quote>();
  addNewQuote: any;

  
  addQuotee() {
    this.addQuotes.emit(this.newQuote);
    this.newQuote = new Quote("","",new Date(), 0, 0);

  }

  constructor() { }

  ngOnInit() {
  }

}
