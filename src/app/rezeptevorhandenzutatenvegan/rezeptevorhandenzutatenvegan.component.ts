import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'aim-rezeptevorhandenzutatenvegan',
  templateUrl: './rezeptevorhandenzutatenvegan.component.html',
  styleUrls: ['./rezeptevorhandenzutatenvegan.component.scss']
})
export class RezeptevorhandenzutatenveganComponent implements OnInit {
  quickandeasy = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToRezept(): void {
    this.router.navigateByUrl('/rezepte/item');
  }
}
