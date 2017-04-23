import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo: Todo = new Todo();

  /*We can let a component emit its own custom events, by creating an
  EventEmitter and decorating it with the @Output decorator. Then we
  can assign an event handler in the view template using event binding
  syntax*/
  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /*Insead of injecting the TodoDataService in our new componnet to save
  the new todo, we emit an add event and pass the new todo as an argument.*/
  addTodo() {
    /*Everytime we call add.emit(value), the onAddTodo($event) handler will
    be called and $event will be equal to value.*/
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
