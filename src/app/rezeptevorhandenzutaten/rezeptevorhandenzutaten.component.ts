import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'aim-rezeptevorhandenzutaten',
  templateUrl: './rezeptevorhandenzutaten.component.html',
  styleUrls: ['./rezeptevorhandenzutaten.component.scss']
})
export class RezeptevorhandenzutatenComponent implements OnInit {
  quickandeasy = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  routeToRezept(): void {
    this.router.navigateByUrl('/rezepte/item');
  }
}
