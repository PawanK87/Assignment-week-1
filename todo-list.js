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
  constructor() {
    this.todos = []; // Initialize an empty array to store todos
  }

  // Method to add a new todo
  add(todo) {
    this.todos.push(todo); // Add the todo to the end of the array
  }

  // Method to remove a todo at a specific index
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1); // Remove the todo at the specified index
    } else {
      throw new Error("Invalid index"); // Throw an error for invalid index
    }
  }

  // Method to update a todo at a specific index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo; // Update the todo at the specified index
    } else {
      throw new Error("Invalid index"); // Throw an error for invalid index
    }
  }

  // Method to get all todos
  getAll() {
    return this.todos; // Return the array of todos
  }

  // Method to get a todo at a specific index
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo]; // Return the todo at the specified index
    } else {
      throw new Error("Invalid index"); // Throw an error for invalid index
    }
  }

  // Method to clear all todos
  clear() {
    this.todos = []; // Set the todos array to an empty array
  }
}

module.exports = Todo;
