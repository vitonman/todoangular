import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../service/data/todoservices/todo-data.service";
import {Router} from "@angular/router";

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] | undefined
  message: string | undefined;

  constructor(
  private todoservice: TodoDataService,
  private router: Router
  ) { }

  ngOnInit(): void {

    this.refreshToDo();
  }

  deleteTodo(id:any){
    console.log("delete todo" + id);
    this.todoservice.deleteTodo("vita", id).subscribe(
      response => {
        console.log(response);
        this.message = `delete of ${id} successful`
        this.refreshToDo();
      }
    )
  }

  updateTodo(id:any){
    console.log("update todo" + id);
    this.router.navigate(['todoedit',id])
  }

  refreshToDo(){
    this.todoservice.retriveAllTodos('vita').subscribe(
      response => {
        console.log(response)
        this.todos = response;
      }
    )
  }

  addTodo(  ) {

    this.router.navigate(['todoedit', -1])

  }

}
