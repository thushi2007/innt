import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const coreAnimations = [
  trigger('showhidePageContent', [
    transition('void => *',
      group([
        query(':self', [
          style({
            transform: 'translateX(100%)'
          }),
          animate('0.3s', style({
            transform: 'translateX(0%)'
          }))
        ], {optional: true}),
        query('@*', animateChild(), {optional: true})
      ])
    ),
    transition('* => void', [
      group([
        query(':self', [
          animate('0.3s', style({
            transform: 'translateX(100%)'
          }))
        ], {optional: true}),
        query('@*', animateChild(), {optional: true})
      ])
    ])
  ]),
  trigger('routerMainAnimation', [
    transition('* <=> *', [
      query(':enter, :leave',
        style({position: 'absolute', width: '100%', top: '0px', left: '0px'}), {optional: true}),
      group([
        query(':self', [
          style({height: '{{containerHeight}}px'}),
          animate('0.3s',
            style({height: '*'}))
        ], {optional: true}),
        query(':enter', [
          style({opacity: '0'}),
          animate('0.3s',
            style({opacity: '1'}))
        ], {optional: true}),
        query('@*', animateChild(), {optional: true}),
        query(':leave', [
          style({opacity: '1'}),
          animate('0.3s',
            style({opacity: '0'}))
        ], {optional: true}),
        query('@*', animateChild(), {optional: true}),
      ])
    ], {params: {containerHeight: 400}})
  ]),
  trigger(
    'componentShowHide',
    [
      transition(':enter, :leave',
        group([
          query('@*', animateChild())
        ]))
    ]
  )
];
