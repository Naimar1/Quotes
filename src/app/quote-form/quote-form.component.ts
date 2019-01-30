import { Component, OnInit ,Output,EventEmitter } from '@angular/core';
import {Quoteclass} from '../quoteclass'
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
   newQuote =new Quoteclass(0,"","",new Date(),0,0);
   @Output() addQuote=new EventEmitter<Quoteclass>();
    
   submitQuote(){
      this.addQuote.emit(this.newQuote);
   }

  constructor() { }

  ngOnInit() {
  }

}
