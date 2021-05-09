import {Injectable, TemplateRef} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogerService {
  private showDialogSubscriber = new Subject<any>();
  showDialog = this.showDialogSubscriber.asObservable();

  private hideDialogSubscriber = new Subject<any>();
  closeDialog = this.hideDialogSubscriber.asObservable();

  private normalDialogSubscriber = new Subject<any>();
  normalDialog = this.normalDialogSubscriber.asObservable();

  constructor() {
  }

  openMsg(): void {
    this.normalDialogSubscriber.next();
  }

  openDialog(template: TemplateRef<any>): Promise<any> {
    if (template) {
      this.showDialogSubscriber.next(template);
    }

    return this.closeDialog.toPromise();
  }

  hideDialog(): void {
    this.hideDialogSubscriber.next();
  }
}
