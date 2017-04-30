export class Todo {
    //Each Todo instance will have 3 properties
    id: number; //Unique ID of the todo item
    title: string = ''; //Title of the todo item
    complete: boolean = false; //Whether or not the todo item is complete

    /*Lets us specify property values during instantiation so we can easily
    create new to dos*/
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
