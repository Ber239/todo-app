import { Component } from '@angular/core';
/*Import Todo object*/
import { Todo } from './todo';
/*Import class so we can register it as a dependency injection token*/
import { TodoDataService } from './todo-data.service';

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
  /*Services registered in AppComponent are only available to AppComponent
  and its component tree. Services registered in AppModule are available to
  all components in the entire application.*/
  //providers: [TodoDataService]
})
export class AppComponent {
  /*When the component class is instantiated, then we define a newTodo 
  property and assign a new Todo object*/
  /*Same Todo instance specified in the two-way binding expression of
  [(ngModel)] in our view*/
  
  /*No longer needed, now handled by TodoListHeaderComponent*/
  //newTodo: Todo = new Todo();

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
  //No longer needed, handled by TodoListHeaderComponent
  /*addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }*/
  //Add new method to handle event emitted by TodoListHeaderComponent
  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  /*Service is now available as this.todoDataService*/
  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}