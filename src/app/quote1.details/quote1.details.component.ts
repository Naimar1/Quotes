import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quoteclass} from '../quoteclass'

@Component({
  selector: 'app-quote1-details',
  templateUrl: './quote1.details.component.html',
  styleUrls: ['./quote1.details.component.css']
})
export class Quote1DetailsComponent implements OnInit {


  @Input() quote:Quoteclass;
  @Output() isFilled= new EventEmitter<boolean>();

  quoteFilled(filled:boolean){
    this.isFilled.emit(filled);
  }

  constructor() { }

  ngOnInit() {
  }

}
