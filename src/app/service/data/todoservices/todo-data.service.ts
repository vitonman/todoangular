import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HelloWorldBean} from "../welcomedata.service";
import {Todo} from "../../../list-todos/list-todos.component";
import {API_URL, TODO_JPA_API_URL} from "../../../app.constanstants";


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retriveAllTodos(username: string){
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`)
    //console.log("execute Hello World Bean Service")
  }

  deleteTodo(username: string, id:any){
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  retriveTodo(username: string, id:any){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username: string, id:any, todo:Todo){
    return this.http.put<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
      , todo)
  }

  createTodo(username: string, todo:Todo){
    return this.http.post(
      `${TODO_JPA_API_URL}/users/${username}/todos/`
      , todo)
  }

}


