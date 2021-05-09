import {Component} from '@angular/core';
import {AccordionService} from '@core/components/accordion/services/accordion.service';

@Component({
  selector: 'aim-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  providers: [AccordionService]
})
export class AccordionComponent {

  constructor(private accordionService: AccordionService) {
  }

  clear(): void {
    this.accordionService.reset();
    this.backToFirstStep();
  }

  backToFirstStep(): void {
    this.accordionService.select(0);
  }
}
