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

    



# MasterPiece: 
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

# My Working example 
<div class="accordion shadow-sm p-3 mb-5 bg-white rounded" id="accordionExample">
        <div class="" *ngFor="let content of model.contents; let idx = index;">

          <!--Card Header-->
          <div class="card-header" id=heading{{idx}}>
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" [attr.data-target]="'#collapse' + idx"
                aria-expanded="true" aria-controls="collapseOne">
                {{content.title}}
              </button>
            </h2>
          </div>

          <!--Card Body-->
          <div id=collapse{{idx}} class="collapse" [ngClass]="{'show': idx==0}" [attr.aria-labelledby]="'heading' + idx"
            data-parent="#accordionExample">
            <div class="card-body">

              <!-- If no SubContent-->
              <div (click)="changeVideo(content)" *ngIf="!content.subContents">
                <ul class="list-group">
                  <li
                    class="p-2 border border-top-0 border-left-0 border-right-0 border-dark d-flex justify-content-between align-items-center list-group-item-action list-group-item-dark cursor">
                    <div (click)="changeVideo(content)">{{content.title}} </div>
                    <span class="badge badge-primary badge-pill">1:38</span>
                  </li>
                </ul>
              </div>

              <!--If SubContent Present-->
              <ul class="list-group" *ngFor="let subContent of content.subContents">
                <li
                  class="p-2 border border-top-0 border-left-0 border-right-0 border-dark d-flex justify-content-between align-items-center list-group-item-action list-group-item-dark cursor">
                  <div (click)="changeVideo(subContent)">{{subContent.title}} </div>
                  <span class="badge badge-primary badge-pill">3:12</span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>


# Conditional CSS Class
    [ngClass]="{'show': idx==0}" 