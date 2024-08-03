import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";
import { AngularMaterialModule } from "../angular-material.module";
import { BrowserModule } from "@angular/platform-browser";
import { UserCardListComponent } from './user-card-list/user-card-list.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
    UserCardListComponent
  ],
    imports: [
        AngularMaterialModule,
        BrowserModule,
        FormsModule,
        DirectivesModule,
        PipesModule,
        MatCardModule
    ],
    exports: [
      UserCardListComponent
    ]
})
export class ComponentsModule {

}