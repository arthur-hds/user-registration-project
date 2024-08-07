import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";
import { AngularMaterialModule } from "../angular-material.module";
import { BrowserModule } from "@angular/platform-browser";
import { UserCardListComponent } from './user-card-list/user-card-list.component';
import {MatCardModule} from '@angular/material/card';
import { UserFormComponent } from './user-form/user-form.component';
import { CommonModule } from "@angular/common";
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
    declarations: [
    UserCardListComponent,
    UserFormComponent
  ],
    imports: [
        AngularMaterialModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        DirectivesModule,
        PipesModule,
        MatCardModule,
        MatProgressBarModule
    ],
    exports: [
      UserCardListComponent,
      UserFormComponent
    ]
})
export class ComponentsModule {

}