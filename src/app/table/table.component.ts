import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

 

  studentmarksDetails:any=[
    {id:1,name:"SreeRam",telugu:95,maths:98,phy:99,che:90,},
    {id:2,name:"Priyanka",telugu:80,maths:85,phy:88,che:87,},
    {id:3,name:"srihari",telugu:75,maths:70,phy:65,che:30,},
    {id:4,name:"Naresh",telugu:60,maths:50,phy:75,che:55,},
  ];

  ngOnInit(){
    this.studentresult();
  } 

  total_student:number=0;

  studentDetails: any=[];
  studentresult(){
    this.studentmarksDetails.forEach((obj:any)=>{
      console.log(obj.name);
      let total2=(obj.telugu+obj.maths+obj.phy+obj.che);
      let avg=(((total2/400)*100).toPrecision(3));
      let total_p_f='';
      let grade ='';
      if(obj.telugu>=35 && obj.maths>=35 && obj.phy>=35 && obj.che>=35){
          this.total_student+=1;
          total_p_f='Pass';
      }else{
        total_p_f="Fail";
      }
      if(total2>375){
        grade='A+';
      }
      else if(total2>300){
        grade='B+';
      }
      else if(total2>250){
        grade='C';
      }
      else{
        grade='D';
      }
      let stuobject={id:obj.id,name:obj.name,telugu:obj.telugu,maths:obj.maths,phy:obj.phy,che:obj.che,total:total2,total_p_f:total_p_f,grade:grade,avg:avg}
      this.studentDetails.push(stuobject);
    });
  }

}
