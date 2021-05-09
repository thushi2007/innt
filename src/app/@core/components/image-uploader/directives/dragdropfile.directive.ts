import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[aimDragdropfile]'
})
export class DragdropfileDirective {
  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = '#f5fcff';
  @HostBinding('style.opacity') private opacity = '1';
  @HostBinding('style.border') private border = '1px dashed #000000';

  @Input() maxSize: number;
  @Input() allowedTypes: string[];

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt): any {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.border = '3px dashed #000000';
    this.opacity = '0.8';
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt): any {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.border = '1px dashed #000000';
    this.opacity = '1';
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  public ondrop(evt): any {
    evt.preventDefault();
    evt.stopPropagation();

    const files = evt.dataTransfer.files;

    for (const item of files) {
      if (item.size > this.maxSize) {
        this.background = '#f5fcff';
        this.border = '3px dashed red';
        this.opacity = '1';
      } else if (this.allowedTypes.indexOf(item.type) === -1) {
        this.background = '#f5fcff';
        this.border = '3px dashed red';
        this.opacity = '1';
      }
    }

    setTimeout(() => {
      this.background = '#f5fcff';
      this.border = '1px dashed #000000';
      this.opacity = '1';
    }, 500);

    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }
}
