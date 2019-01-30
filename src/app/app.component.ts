import { Component } from '@angular/core';
import {Quoteclass} from './quoteclass'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes = [
    new Quoteclass(1,'Bonhoeffer','In ordinary life we hardly realize that we receive a great deal more than we give, and that it is only with gratitude that life becomes rich.',new Date(2019,1,20),0,0),
    new Quoteclass(2,'Painter','Saying thank you is more than good manners, it is good spirituality',new Date(2019,1,23),0,0),
    new Quoteclass(3,'C.S. Lewis','Friendship is unnecessary, like philosophy, like art…. It has no survival value; rather it is one of those things that give value to survival.',new Date(2019,1,24),0,0),
    new Quoteclass(4,'Calcutta','If we have no peace, it is because we have forgotten that we belong to each other.',new Date(2019,1,25),0,0),

  ]
}
