import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'aim-rezeptemitfehlendenzutaten',
  templateUrl: './rezeptemitfehlendenzutaten.component.html',
  styleUrls: ['./rezeptemitfehlendenzutaten.component.scss']
})
export class RezeptemitfehlendenzutatenComponent implements OnInit {
  quickandeasy = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  routeToRezept(): void {
    this.router.navigateByUrl('/rezepte/item2');
  }
}
