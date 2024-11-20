import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'carta1',
  templateUrl: './carta1.component.html',
  styleUrls: ['./carta1.component.css']
})
export class Carta1Component implements OnInit {
  cardData: any;
  loading = false;
  
  constructor(private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cardName = params.get('name')!;
      this.fetchCardData(cardName);
    })
  }

  fetchCardData(cardName: string): void {
    this.loading = true;
    const url = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`;
    this.http.get(url).subscribe(
      (data)=> {
        this.cardData = data;
        this.loading = false;
      },
      (error) => {
        console.error('Errore nella ricerca della carta', error)
        this.loading = false;
      }
    )
  }
}
