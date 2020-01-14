import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"],
  animations: [""]
})
export class QuoteComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  quotes: Quote[] = [
     new Quote(
      "Posted by Lord Baelish",
      "Chaos is not a pit.Chaos is a ladder",
      new Date(2019, 11, 12)
    ),
    new Quote(
      "Posted by JWinston Churchill",
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
      new Date(2019, 8, 10)
    ),
    new Quote(
      "Posted By Tyrion Lannister",
      "Never forget what you are,the rest of the world will not.Wear it like an armour and it can never be used to hurt you",
      new Date(2019, 4, 7)
    ),
    new Quote(
      "Posted By Unknown",
      "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
      new Date(2019, 11, 12)
    ),
    new Quote(
      "Posted by Will Rogers",
      "Don’t Let Yesterday Take Up Too Much Of Today.",
      new Date(2019, 12, 1)
    )
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() {}

  ngOnInit() {
    this.myStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 500
        },
        color: {
          value: "#ff0000"
        },
        shape: {
          type: "circle",
          polygon: {
            nb_sides: 5
          }
        }
      }
    };
  }
}
