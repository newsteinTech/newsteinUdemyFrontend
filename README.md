# UdemyFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Setup: 

1) ng new UdemyFrontend
2) Copy Shared and User Components, Services, Models
3) Ngx-Loading: 
    npm i ngx-loading --save
    In AppModule:
    import { NgxLoadingModule } from 'ngx-loading';
    NgxLoadingModule.forRoot({}),

4) ngModel:
    import { FormsModule } from '@angular/forms';
    FormsModule
5) httpClient:
    import { HttpClientModule } from '@angular/common/http';
    HttpClientModule
6) Toast:
    npm i toastr --save
    npm i jquery --save
    Angular.json:
        "styles": [
              "src/styles.css",
              "node_modules/toastr/build/toastr.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/toastr/build/toastr.min.js"
            ]

    



MasterPiece: 
    html attribute in with Angular.
    Bootstrap to Angular
        https://stackoverflow.com/questions/36051195/give-dynamic-id-angular2-binds

        [id]="item.id"
        [attr.id]="item.id"
        id={{item.id}}

            <ul>
            <li *ngFor="#item of items" #elem [id]="item.id">
                {{ item.name}} ID: {{elem.id}}
            </li>
            </ul>

            <ul>
            <li *ngFor="#item of items" #elem [attr.id]="item.id">
                {{ item.name}} ID: {{elem.id}}
            </li>
            </ul>

            <ul>
            <li *ngFor="#item of items" #elem id={{item.id}}>
                {{ item.name}} ID: {{elem.id}}
            </li>
            </ul>

Conditional CSS Class
    [ngClass]="{'show': idx==0}" 