import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.scss']
})
export class Table3Component implements OnInit {

  constructor() { }

  table3:any=[];
  table3s:any=[];
  ngOnInit(): void {
    this.Result();
  }

  Result(){
    for(let i=1;i<=10;i++){
      this.table3.push({i:i})
    }
    for(let a=1;a<=11;a++){
      this.table3s.push({a:a*9})
    }  
  }

}
