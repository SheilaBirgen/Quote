import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote( 'We often need less than we think we needs', 'Maya Angelou',new Date(2019, 5, 5), 0, 0),
    new Quote('When someone shows you whom they are, believe them the first time only', 'Maya Angelou', new Date(2019, 11, 5), 0, 0)
  ];

  likeCounter = 0;
  dislikeCounter = 0;
  
 

  like(index){
    this.quotes[index].likeNo=+1;
  }

  dislike(index){
    this.quotes[index].dislikeNo++;

  }
  toggleDetails(index){ 
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  QuoteDelete(index){
    this.quotes.splice(index, 1)
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}

