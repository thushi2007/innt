import {Component, EventEmitter, HostBinding, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'aim-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    trigger('HeightDown', [
      transition(':enter', [
          style({
            transform: 'translateY(100%)',
          }),
          animate('300ms',
            style({
              transform: 'translateY(0%)'
            }))
        ]
      ),
      transition(':leave',
        [
          style({
            transform: 'translateY(0%)',
          }),
          animate('300ms',
            style({
              transform: 'translateY(100%)'
            }))
        ])
    ])
  ]
})
export class MessageComponent {
  @HostBinding('@HeightDown') MyanimateContainer;
  @Output() hideContainer = new EventEmitter();

  isError: boolean;
  isInfo: boolean;
  isWarning: boolean;
  isSuccess: boolean;

  message: string;
  title: string;

  public popErrorMessage(title: string, text: string): void {
    this.isError = true;
    this.isInfo = false;
    this.isWarning = false;
    this.isSuccess = false;

    this.message = text;
    this.title = title;
  }

  public popInfoMessage(title: string, text: string): void {
    this.isError = false;
    this.isInfo = true;
    this.isWarning = false;
    this.isSuccess = false;

    this.message = text;
    this.title = title;
  }

  public popWarningMessage(title: string, text: string): void {
    this.isError = false;
    this.isInfo = false;
    this.isWarning = true;
    this.isSuccess = false;

    this.message = text;
    this.title = title;
  }

  public popSuccessMessage(title: string, text: string): void {
    this.isError = false;
    this.isInfo = false;
    this.isWarning = false;
    this.isSuccess = true;

    this.message = text;
    this.title = title;
  }

  hideMessage(): void {
    if (this.hideContainer != null) {
      this.hideContainer.emit(null);
    }
  }
}
