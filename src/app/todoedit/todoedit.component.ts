import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../service/data/todoservices/todo-data.service";
import {Todo} from "../list-todos/list-todos.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent implements OnInit {

  id!: number;
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '',false,new Date())

    if(this.id!=-1){
      this.todoService.retriveTodo('vita',this.id)
        .subscribe(
          data => this.todo = data
        )
    }
  }

  saveTodo(){

    if(this.id == -1) {
      this.todoService.createTodo('vita', this.todo)
        .subscribe(
          data => {
            this.router.navigate(['todos'])
          }
        )
    }else{
      this.todoService.updateTodo('vita', this.id, this.todo)
        .subscribe(
          data => {
            this.router.navigate(['todos'])
          }
        )
    }

  }


}
