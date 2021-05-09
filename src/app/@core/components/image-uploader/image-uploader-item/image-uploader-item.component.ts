import {Component, HostBinding, Input, OnDestroy} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {ImageUploaderService} from '@core/components/image-uploader/services/image-uploader.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'aim-image-uploader-item',
  templateUrl: './image-uploader-item.component.html',
  styleUrls: ['./image-uploader-item.component.scss'],
  animations: [
    trigger(
      'showHideUploadImageItem',
      [
        transition(
          ':enter',
          [
            style({
              transform: 'translateY(-100%)',
              opacity: 0
            }),
            animate('200ms',
              style({
                transform: 'translateY(0)',
                opacity: 1
              }))
          ]
        ),
        transition(
          ':leave',
          [
            style({
              transform: 'translateY(0)',
              opacity: 1
            }),
            animate('200ms',
              style({
                transform: 'translateY(-100%)',
                opacity: 0
              }))
          ]
        )
      ]
    )
  ]
})
export class ImageUploaderItemComponent implements OnDestroy {
  @HostBinding('@showHideUploadImageItem') showHideUploadImageItem;

  @Input() file: any;
  @Input() indx: number;

  progress: number;

  httpEmitter: Subscription;
  subUploadImg: Subscription;

  constructor(public httpClient: HttpClient,
              private lightbox: Lightbox,
              private uploaderService: ImageUploaderService) {
    this.subUploadImg = this.uploaderService.uploadImage
      .subscribe((uploadUrl: string) => {
        this.uploadFile(uploadUrl);
      });
  }

  openImagePopup(): void {
    if (this.file.type !== 'application/pdf') {
      const album = this.uploaderService.getimagesDataList();
      this.lightbox.open(album, this.indx);
    }
  }

  removeImage(index: number): void {
    this.uploaderService.removeImage(index);
  }

  async uploadFile(uploadUrl: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('File', this.file.file);
      formData.append('Name', this.file.name);
      formData.append('Size', this.file.size + '');
      formData.append('Type', this.file.type);

      this.httpEmitter = this.httpClient.post(uploadUrl, formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = 100 / event.total * event.loaded;
          }
          if (event.type === HttpEventType.Response) {
            delete this.httpEmitter;
            setTimeout(() => {
              this.removeImage(this.indx);
              resolve(null);
            }, 1000);
          }
        }, error => {
          reject(error);
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subUploadImg) {
      this.subUploadImg.unsubscribe();
    }

    if (this.httpEmitter) {
      this.httpEmitter.unsubscribe();
    }
  }
}
