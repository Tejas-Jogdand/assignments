/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.toDos = [];
  }

  add(todo){
    this.toDos.push(todo);
  }
  remove(indexOfTodo){
    this.toDos.splice(indexOfTodo,1);
  }
  update(index, updatedTodo){
    this.toDos[index]=updatedTodo;
  }
  getAll(){
    return this.toDos;
  }
  get(indexOfTodo){
    return this.toDos[indexOfTodo];
  }
  clear(){
    // this.toDos = []; //Works but wrong as it creates a completely new array
    this.toDos.length = 0;
    // this.toDos.splice(0,this.toDos.length); //Alternative
  }
}

const td = new Todo();
td.add("Schedule AZ900 exam");
td.add("Learn Javascript");
td.add("Install HSRP");
console.log(td.getAll());
td.update(1,"Learn Node.js");
console.log(td.get(1));
td.remove(2);
td.clear();
console.log(td.getAll());

module.exports = Todo;