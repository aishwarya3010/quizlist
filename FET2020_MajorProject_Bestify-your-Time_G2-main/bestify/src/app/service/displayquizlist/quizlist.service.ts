import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizlistService {

  constructor(private http: HttpClient) { }
   quizlist(val){
     alert("hhh");
     return this.http.get("http://localhost:8080/api/homepage/allquiz/"+val)
   }
}

