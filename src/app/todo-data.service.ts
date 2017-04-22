import { Injectable } from '@angular/core';
import { Todo } from './todo'; //Make sure to import the Todo object

//TodoDataService will be responsible for managing our Todo items
//Generated with 'ng g s TodoData'
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
  addTodo(todo: Todo): TodoDataService {
    if(!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  //Simulate DELETE /todos/:id
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

}
