import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";
import { AngularMaterialModule } from "../angular-material.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [],
    imports: [
        AngularMaterialModule,
        BrowserModule,
        FormsModule,
        DirectivesModule,
        PipesModule
    ],
    exports: []
})
export class ComponentsModule {

}