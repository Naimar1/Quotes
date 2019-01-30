import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {Quoteclass} from '../quoteclass'
import { Quote } from '@angular/compiler';
// import { Quote1DetailsComponent } from '../quote1.details/quote1.details.component';

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
  newQuote =new Quoteclass(0,"","",new Date(),0,0);
  quotes = [
    new Quoteclass(1,'Bonhoeffer','In ordinary life we hardly realize that we receive a great deal more than we give, and that it is only with gratitude that life becomes rich.',new Date(2019,1,20),0,0),
    new Quoteclass(2,'Quote-thanks','Saying thank you is more than good manners, it is good spirituality',new Date(2019,1,23),0,0),
    new Quoteclass(3,'C.S. Lewis','Friendship is unnecessary, like philosophy, like art…. It has no survival value; rather it is one of those things that give value to survival.',new Date(2019,1,24),0,0),
    new Quoteclass(4,'Calcutta','If we have no peace, it is because we have forgotten that we belong to each other.',new Date(2019,1,25),0,0),


  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}


// @Output() onClose = new EventEmitter();
// submitted = false;

 //quoteDetails() {
  // this.onClose.emit();

 //}
completeQuote(isFilled,index){
  if (isFilled){
    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
    if (toDelete){
      this.quotes.splice(index,1);
      }
      }
}
quoteDetails(index){
  this.quotes[index].showImagequote = !this.quotes[index].showImagequote;
 
}
Upvote(index){
  this.quotes[index].upvote++;
 }
 downvote(index){
   this.quotes[index].downvote--;
 }

  constructor() {}

  ngOnInit() {
  }
}