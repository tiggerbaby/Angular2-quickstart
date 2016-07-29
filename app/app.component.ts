import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './hero.service';


@Component({ 
        selector: 'my-app',
        template:`
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
            <a [routerLink]="['/heroes']">Heroes</a>
        <router-outlet></router-outlet>
        </nav>
        `,
        directives:[ROUTER_DIRECTIVES],
        providers: [HeroService]
    })

export class AppComponent {
    title = 'Title of Heroes';
}