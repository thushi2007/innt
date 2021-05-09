import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'aim-rezeptevorhandenzutatenvegetarisch',
  templateUrl: './rezeptevorhandenzutatenvegetarisch.component.html',
  styleUrls: ['./rezeptevorhandenzutatenvegetarisch.component.scss']
})
export class RezeptevorhandenzutatenvegetarischComponent implements OnInit {
  quickandeasy = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  routeToRezept(): void {
    this.router.navigateByUrl('/rezepte/item');
  }
}
