
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DialogModule} from '@angular/cdk/dialog';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ObserversModule} from '@angular/cdk/observers';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon'
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    DialogModule,
    CdkAccordionModule,
    ObserversModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,



  ],
  exports :[
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    DialogModule,
    CdkAccordionModule,
    ObserversModule,
    CdkTableModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,

  ]
})
export class MaterialModule { }
