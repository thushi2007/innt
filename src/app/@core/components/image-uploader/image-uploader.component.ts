import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Component, ElementRef, EventEmitter, Input, OnDestroy, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';

import {ImageUploaderService} from '@core/components/image-uploader/services/image-uploader.service';
import {ImageUploaderItemComponent} from '@core/components/image-uploader/image-uploader-item/image-uploader-item.component';

@Component({
  selector: 'aim-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  providers: [ImageUploaderService]
})
export class ImageUploaderComponent implements OnDestroy {
  @Input() acceptedTypes: any[];
  @Input() maxSize: number;
  @Output() infoUpload: EventEmitter<any> = new EventEmitter<any>();

  @ViewChildren(ImageUploaderItemComponent) items: QueryList<ImageUploaderItemComponent>;
  @ViewChild('drapDropEl', {read: ElementRef, static: false}) drapDropEl: ElementRef;

  errorMsgSize = false;
  errorMsgTyp = false;

  set files(value) {
    this.uploaderService.files = value;
  }

  get files(): any[] {
    return this.uploaderService.files;
  }

  removeItemSub: Subscription;

  constructor(private uploaderService: ImageUploaderService,
              public httpClient: HttpClient) {
    this.removeItemSub = this.uploaderService.removeItem.subscribe((index: number) => {
      this.removeImage(index);
    });
  }

  uploadFile(event): any {
    for (const elemnt of event) {
      const elName = elemnt.name;
      const elSize = elemnt.size;
      const elType = elemnt.type;

      if (this.maxSize > elSize && this.acceptedTypes.indexOf(elType) !== -1) {
        const reader = new FileReader();
        reader.readAsDataURL(elemnt);
        reader.onload = (evnt: any) => { // called once readAsDataURL is completed
          const elUrl = evnt.target.result;
          this.files.push({
            file: elemnt,
            name: elName,
            url: elUrl,
            size: elSize,
            type: elType
          });

          this.infoUpload.emit(this.files);
        };
      } else {
        this.drapDropEl.nativeElement.style.border = '3px dashed red';

        setTimeout(() => {
          this.drapDropEl.nativeElement.style.border = '1px dashed #000000';
        }, 500);
      }

      if (this.maxSize < elSize) {
        this.drapDropEl.nativeElement.style.border = '3px dashed red';
        this.errorMsgSize = this.maxSize > elSize;

        setTimeout(() => {
          this.drapDropEl.nativeElement.style.border = '1px dashed #000000';
          this.errorMsgSize = false;
        }, 500);
      }

      if (this.acceptedTypes.indexOf(elType) === -1) {
        this.drapDropEl.nativeElement.style.border = '3px dashed red';
        this.errorMsgTyp = this.maxSize > elSize;

        setTimeout(() => {
          this.drapDropEl.nativeElement.style.border = '1px dashed #000000';
          this.errorMsgTyp = false;
        }, 500);
      }
    }
  }

  getAcceptedTypes(): any {
    let acceptTypes = '';

    this.acceptedTypes.forEach(el => {
      if (acceptTypes) {
        acceptTypes += ',' + el;
      } else {
        acceptTypes += el;
      }
    });

    return acceptTypes;
  }

  removeImage(index: number): void {
    this.files.splice(index, 1);
  }

  getDate(): any {
    return new Date();
  }

  async uploadAll(uploadUrl: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.items.length === 0) {
        resolve(null);
      } else {
        this.items.forEach(async (itm: ImageUploaderItemComponent, index, array) => {
          await itm.uploadFile(uploadUrl);
          if (index === array.length - 1) {
            resolve(null);
          }
        });
      }
    });
  }

  clearAllImages(): void {
    this.files = [];
    this.infoUpload.emit(this.files);
  }

  ngOnDestroy(): void {
    if (this.removeItemSub) {
      this.removeItemSub.unsubscribe();
    }
  }
}
