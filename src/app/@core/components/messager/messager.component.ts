import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  HostBinding,
  Input,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MessageComponent} from '@core/components/messager/message/message.component';
import {animate, animateChild, group, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'aim-messager',
  templateUrl: './messager.component.html',
  styleUrls: ['./messager.component.scss'],
  animations: [
    trigger('showHideContainer', [
      state('0', style({
        height: '0px'
      })),
      state('1', style({
        height: '*'
      })),
      transition('1 => 0',
        group([
          query('@HeightDown', [
            animateChild()
          ]),
          animate('400ms ease-in')
        ])),
      transition('0 => 1',
        group([
          query('@HeightDown', [
            animateChild()
          ]),
          animate('400ms ease-out')
        ]))
    ])
  ]
})
export class MessagerComponent implements OnDestroy {
  @Input() duration = 0;
  @Input() onlyOneInstance = false;

  componentRef: ComponentRef<MessageComponent>;
  msgShown = false;

  @ViewChild('alertContainer', {read: ViewContainerRef, static: true}) container;

  @HostBinding('@showHideContainer') get MyanimateContainer(): boolean {
    return this.msgShown;
  }

  constructor(private resolver: ComponentFactoryResolver) {
  }

  public popErrorMessage(title: string, text: string): void {
    if (this.onlyOneInstance) {
      this.container.clear();
    }

    const factory: ComponentFactory<MessageComponent> = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.popErrorMessage(title, text);
    this.hideContainerTimer(this.componentRef);
    this.msgShown = true;
  }

  public popInfoMessage(title: string, text: string): void {
    if (this.onlyOneInstance) {
      this.container.clear();
    }

    const factory: ComponentFactory<MessageComponent> = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.popInfoMessage(title, text);
    this.hideContainerTimer(this.componentRef);
    this.msgShown = true;
  }

  public popWarningMessage(title: string, text: string): void {
    if (this.onlyOneInstance) {
      this.container.clear();
    }

    const factory: ComponentFactory<MessageComponent> = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.popWarningMessage(title, text);
    this.hideContainerTimer(this.componentRef);
    this.msgShown = true;
  }

  public popSuccessMessage(title: string, text: string): void {
    if (this.onlyOneInstance) {
      this.container.clear();
    }

    const factory: ComponentFactory<MessageComponent> = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.popSuccessMessage(title, text);
    this.hideContainerTimer(this.componentRef);
    this.msgShown = true;
  }

  public hide(): void {
    this.container.clear();
    this.msgShown = false;
  }

  private hideContainerTimer(cRef: ComponentRef<MessageComponent>): void {
    cRef.instance.hideContainer.subscribe(event => {
      if (this.onlyOneInstance) {
        this.container.clear();
        this.msgShown = false;
      } else {
        if (cRef != null) {
          cRef.destroy();
          this.msgShown = false;
        }
      }
    });

    this.destroyCompontentByTimer(cRef);
  }

  private destroyCompontentByTimer(cRef: ComponentRef<MessageComponent>): void {
    if (this.duration > 0) {
      setTimeout(() => {
        if (cRef != null) {
          cRef.destroy();
          this.msgShown = false;
        }
      }, this.duration);
    }
  }

  ngOnDestroy(): void {
    if (this.componentRef != null) {
      this.componentRef.destroy();
      this.msgShown = false;
    }
  }
}
