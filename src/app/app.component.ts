import { Component } from '@angular/core';
/*Import class so we can register it as a dependency injection token*/
import { TodoDataService } from './todo-data.service';
/*Import Todo object*/
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*AppComponent's dependency injector will now recognize the TodoDataService
  class as a dependency injection token and return a single instance of
  TodoDataService when we ask for it.*/
  /*Below syntax is shorthand notation for the Class provider recipe
  that provides dependencies using the singleton pattern. There are
  others as well.*/
  providers: [TodoDataService]
})
export class AppComponent {
  /*When the component class is instantiated, then we define a newTodo 
  property and assign a new Todo object*/
  /*Same Todo instance specified in the two-way binding expression of
  [(ngModel)] in our view*/
  newTodo: Todo = new Todo();

  /*Ask Angular DI system to inject the dependency associated with the
  DI token `TodoDataService` and assign it to the a property called
  `todoDataService`*/
  /*Use of public or private on args in the constructor is shorthand
  that allows us to auto create properties with that name. Below could
  also be like declaring 'private todoDataService: TodoDataService;' before
  the constructor and then doing 'todoDataService: TodoDataService' in
  the constructor (and then this.todoDataService=todoDataService.*/
  constructor(private todoDataService: TodoDataService) {

  }

  /*Implement all methods we used in our view.
  Short since we delegate all business logic to the todoDataService.*/

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  /*Service is now available as this.todoDataService*/
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos;
  }
}
