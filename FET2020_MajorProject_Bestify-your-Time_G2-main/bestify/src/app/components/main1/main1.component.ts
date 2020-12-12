import { Component, OnInit } from '@angular/core';
import { QuizlistService } from '../../service/displayquizlist/quizlist.service';
@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.scss']
})
export class Main1Component implements OnInit {
GK:string="GK";
BT:string="BT";
LR:string="LR";
quizlist:any;
click:boolean=false;
  constructor(private service: QuizlistService) { 
  
  }

  ngOnInit(): void {
  }
quiz(val:any){
 // this.click=true;
  alert("hii" +val);
  this.service.quizlist(val).subscribe((res:any)=>{
this.quizlist=res;
console.log(res);

  })

}
}
