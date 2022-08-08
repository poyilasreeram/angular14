import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {

  constructor() { }

  table2:any=[];
  table2s:any=[];
  ngOnInit(): void {
    this.Result();
  }
  
  Result(){

    for(let i=1;i<=10;i++){
      this.table2.push({i:i})
    }    

    for(let a=1;a<=100;a++){
      if(a%2==1 && ( (a<=10) || (a>20 && a<=30)  || (a>40 && a<=50)  || (a>60 && a<=70)  || (a>80 && a<=90) )){        
        this.table2s.push({b:a})
      }
      if( a%2==0 && ( (a>10 && a<=20) || ( a>30 && a<=40 )  || (a>50 && a<=60)  || (a>70 && a<=80)  || (a>90 && a<=100)) ){        
        this.table2s.push({b:a})
      }      
    }       
    
  }

  



}
