import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeautifyService {

  baseUrl:string='http://127.0.0.1:8000/'

  constructor(private http:HttpClient) { }

  signUp(data:any){
    return this.http.post(`${this.baseUrl}signup/`,data)
  }
  shopSignUp(data:any){
    return this.http.post(`${this.baseUrl}shop/signup/`,data)
  }
  signIn(data:any){
    return this.http.post(`${this.baseUrl}token/`,data)
  }
  getToken(){
    return "token" in localStorage?localStorage.getItem("token"):undefined
  }
}
