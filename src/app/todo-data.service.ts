import { Injectable } from '@angular/core';
import { Todo } from './todo'; //Make sure to import the Todo object

//TodoDataService will be responsible for managing our Todo items
//Generated with 'ng g s TodoData'
// We are centralizing the business logic in a service
// Later on we will use a service to actually get the data we need
@Injectable()
export class TodoDataService {
  //property: value
  /*Placeholder for last ID so we can simulate automatic
  incrementing of id's*/
  lastId: number = 0;
  //Placeholder for todo's
  todos: Todo[] = [];
  constructor() {

  }

  //Simulate POST / todos
  /*If the current objects ID does not exist (aka no number has been assigned), 
  then set the objects ID to the lastId property and increment by one*/
  /*After ID has been assigned, push the Todo object (with it's new ID)
  into the Todo array, then return it.*/
  //Input: todo property with Todo array value
  //Output TodoDataService object
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  //Simulate DELETE /todos/:id
  //Input: id property with number value
  //Output: TodoDataService object
  deleteTodoById(id: number): TodoDataService {
    /*Returns the elements of an array that meet the condition specified
    in a callback function*/
    /*The arrow function (=>) is a concise syntax for writing function
    expressions. Avoid having to type the function keyword, return keyword
    and curly brackets.*/

    //Example
    /*
      //ES5
      var multiple = function(x, y) {
        return x * y;
      };

      //ES6
      var multiply = (x,y) => { return x * y };
    */
    //Test each element of the todo array
    //Return true to keep the element, false otherwise
    /*Basically we're only keeping those todos whose ID does NOT
    equal the id being deleted.*/
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  //Simulate PUT /todos/:id
  //Input: id property with number value, values property with object value
  //Output: Single Todo object
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    /**
      * assign
      * Copy the values of all of the enumerable own properties from one or more source objects to a
      * target object. Returns the target object.
      * @param target The target object to copy to.
      * @param source The source object from which to copy properties.
    */
    Object.assign(todo, values);
    return todo;
  }

  //Simulate GET /todos
  //Input: none
  //Output: Todo array
  getAllTodos(): Todo[] {
    //Returns all todos from the Todo array
    return this.todos;
  }

  //Simulate GET /todos/:id
  //Input: id property with number value
  //Output: Todo object
  getTodoById(id: number): Todo {
    //From the array of todos, get the one we requested by ID
    //Pop removes the last element from an array and returns it
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Toggle todo complete
  // Input: todo property with Todo object value
  toggleTodoComplete(todo: Todo) {
  /*  So here we are passing the current todo objects ID to the 
    updateTodoById function. It will take in the todos ID
    as well as any object values. In this case the todo's complete property
    was initially initialized to FALSE when it was created. But now we are
    negating it and saying that it is now TRUE (aka complete value is TRUE). */
    let updatedTodo = this.updateTodoById(todo.id, { complete: !todo.complete});
    return updatedTodo;
  }

}
