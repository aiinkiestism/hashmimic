import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, keyframes
} from '@angular/animations';

export const routingAnimation = 
    trigger('routeAnimations', [
        transition('* => *', [
            group([
                query(':leave', [
                    animate('0.2s', keyframes([
                        style({ opacity: 1, offset: 0}),
                        style({ opacity: 0, offset: 1}),
                    ]))
                ], { optional: true }),
                query(':leave', animateChild(), { optional: true }),
                query(':enter', [
                    animate('0.2s', keyframes([
                        style({ opacity: 0, offset: 0}),
                        style({ opacity: 1, offset: 1}),
                    ]))
                ], { optional: true }),
                query(':enter', animateChild(), { optional: true }),
            ])
        ])
    ]);
