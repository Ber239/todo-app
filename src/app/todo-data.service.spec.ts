import { TestBed, inject } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {
    /*Inject allows injecting dependencies before it() and beforeEach()
    function inject(tokens: any[], fn: Function): () => any;
    First argument to the inject function is an array of Angular
    dependency injection tokens. 2nd arg is the test function whose
    params are the dependencies that correspond to the dependency injection
    tokens from the array.*/
    /*Here we tell the TestBed injector to inject the TodoDataService
    by specifying it in the array in the first arg. As a result we can 
    access the TodoDataService as service in our test function because
    service is the name of the first parameter of our test function.*/
    it('should return an empty array by default', inject([TodoDataService],
      (service: TodoDataService) => {
        expect(service.getAllTodos()).toEqual([]);
      }));

    it('should return all todos', inject([TodoDataService],
      (service: TodoDataService) => {
        let todo1 = new Todo({ title: 'Hello 1', complete: false });
        let todo2 = new Todo({ title: 'Hello 2', complete: true });
        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getAllTodos()).toEqual([todo1, todo2]);
      }));
  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({ title: 'Hello 1', complete: false });
      let todo2 = new Todo({ title: 'Hello 2', complete: true });
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({ title: 'Hello 1', complete: false });
      let todo2 = new Todo({ title: 'Hello 2', complete: true });
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({ title: 'Hello 1', complete: false });
      let todo2 = new Todo({ title: 'Hello 2', complete: true });
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({ title: 'Hello 1', complete: false });
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(1, {
        title: 'new title'
      });
      expect(updatedTodo.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({ title: 'Hello 1', complete: false });
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(2, {
        title: 'new title'
      });
      expect(updatedTodo).toEqual(null);
    }));

  });

  describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({ title: 'Hello 1', complete: false });
      service.addTodo(todo);
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    }));

  });

});