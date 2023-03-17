
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
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
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
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule

  ],
  exports :[
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
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule



  ]
})
export class MaterialModule { }
