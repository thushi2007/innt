import {Inject, Injectable, OnDestroy, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {animate, AnimationBuilder, AnimationPlayer, style} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class LoaderService implements OnDestroy {
  player: AnimationPlayer;
  isBrowser = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(PLATFORM_ID) platformId: string,
              private animationBuilder: AnimationBuilder) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  hideLoader(): void {
    if (this.isBrowser) {
      const elemt = this.document.getElementById('hme-loader-container');

      if (elemt) {
        this.player = this.animationBuilder
          .build([
            style({
              opacity: 1,
              'z-index': '999'
            }),
            animate('300ms', style({
              opacity: 0,
              'z-index': '-999'
            }))
          ]).create(elemt);

        setTimeout(() => {
          this.player.play();
        }, 0);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.destroy();
    }
  }
}
