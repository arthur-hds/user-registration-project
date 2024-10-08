import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatSelectModule,
        MatListModule,
        MatDividerModule,
        MatTableModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDialogModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatSelectModule,
        MatListModule,
        MatDividerModule,
        MatTableModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDialogModule
    ]
})
export class AngularMaterialModule {

}