import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'carta1',
  templateUrl: './carta1.component.html',
  styleUrls: ['./carta1.component.css']
})
export class Carta1Component implements OnInit {
  cardData: any;
  loading: false;

  ngOnInit(): void {
    this.route.paraMap.subscribe(params =>{
      const cardName = params.get('name')!;
    })
  }
}
