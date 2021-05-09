import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {StepperService} from '@core/components/stepper/stepper.service';
import {Subscription} from 'rxjs';
import {animate, AnimationBuilder, AnimationPlayer, style} from '@angular/animations';

@Component({
  selector: 'aim-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [StepperService]
})
export class StepperComponent implements OnInit, OnDestroy {
  heightSubscription: Subscription;
  finishProcess: Subscription;

  player: AnimationPlayer;

  @Output() postProcess: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('stepsContainer', {read: ElementRef, static: true}) stepsContainer: ElementRef;

  constructor(private stepperServ: StepperService,
              private animationBuilder: AnimationBuilder) {
    this.stepperServ.reset();
  }

  ngOnInit(): void {
    this.heightSubscription = this.stepperServ.heightStep.subscribe((heigth) => {
      this.animateHeight(heigth);
    });
  }

  animateHeight(newHeight: number): void {
    this.player = this.animationBuilder
      .build([
        style({
          'min-height': this.stepsContainer.nativeElement.offsetHeight + 'px'
        }),
        animate('300ms', style({
          'min-height': newHeight + 'px'
        }))
      ]).create(this.stepsContainer.nativeElement);

    setTimeout(() => {
      this.player.play();
    }, 0);
  }

  finish(): void {
    this.stepperServ.clear();
  }

  ngOnDestroy(): void {
    if (this.finishProcess) {
      this.finishProcess.unsubscribe();
    }

    if (this.heightSubscription) {
      this.heightSubscription.unsubscribe();
    }

    if (this.player) {
      this.player.destroy();
    }
  }
}
