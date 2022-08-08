import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    Table2Component,
    Table3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
