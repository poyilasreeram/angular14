import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';

const routes: Routes = [
  {path:"table",component:TableComponent},
  {path:"table2",component:Table2Component},
  {path:"table3",component:Table3Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
