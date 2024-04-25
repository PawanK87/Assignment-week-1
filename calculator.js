/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0; // Initializes the result variable to 0 when a new Calculator object is created.
  }

  add(number) {
    if (isNaN(number)) { // Checks if the input is not a number.
      throw new Error("Invalid input: Input must be a number"); // Throws an error if the input is not a number.
    }
    this.result += parseFloat(number); // Adds the parsed number to the result.
  }

  subtract(number) {
    if (isNaN(number)) {
      throw new Error("Invalid input: Input must be a number");
    }
    this.result -= parseFloat(number); // Subtracts the parsed number from the result.
  }

  multiply(number) {
    if (isNaN(number)) {
      throw new Error("Invalid input: Input must be a number");
    }
    this.result *= parseFloat(number); // Multiplies the result by the parsed number.
  }

  divide(number) {
    if (isNaN(number)) {
      throw new Error("Invalid input: Input must be a number");
    }
    if (parseFloat(number) === 0) { // Checks if the parsed number is zero.
      throw new Error("Cannot divide by zero"); // Throws an error if trying to divide by zero.
    }
    this.result /= parseFloat(number); // Divides the result by the parsed number.
  }

  clear() {
    this.result = 0; // Resets the result to 0.
  }

  getResult() {
    return this.result; // Returns the current value of the result.
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, ''); // Removes all whitespace from the expression.
    const tokens = sanitizedExpression.match(/[+\-*/()]|\d+/g); // Splits the expression into tokens.
    if (!tokens) {
      throw new Error("Invalid input: No valid tokens found"); // Throws an error if no tokens are found.
    }
    const stack = []; // Initializes a stack to hold operands and operators.
    const operators = new Set(["+", "-", "*", "/"]); // Defines a set of valid operators.
    for (const token of tokens) { // Iterates through each token in the expression.
      if (operators.has(token)) { // Checks if the token is an operator.
        stack.push(token); // Pushes the operator onto the stack.
      } else if (token === "(") { // Checks if the token is an opening parenthesis.
        stack.push("("); // Pushes the opening parenthesis onto the stack.
      } else if (token === ")") { // Checks if the token is a closing parenthesis.
        let tempResult = 0; // Initializes a temporary variable to hold the result of the sub-expression.
        let operator = stack.pop(); // Pops an operator from the stack.
        while (operator !== "(") { // Loops until the corresponding opening parenthesis is found.
          if (!operator) { // Checks if there are unmatched parentheses.
            throw new Error("Invalid input: Unmatched parentheses"); // Throws an error for unmatched parentheses.
          }
          const operand = parseFloat(stack.pop()); // Pops an operand from the stack and converts it to a number.
          switch (operator) { // Performs the arithmetic operation based on the operator.
            case "+":
              tempResult += operand;
              break;
            case "-":
              tempResult -= operand;
              break;
            case "*":
              tempResult *= operand;
              break;
            case "/":
              tempResult /= operand;
              break;
          }
          operator = stack.pop(); // Pops the next operator from the stack.
        }
        stack.push(tempResult); // Pushes the result of the sub-expression back onto the stack.
      } else { // Handles tokens that are operands.
        if (isNaN(token)) { // Checks if the token is not a number.
          throw new Error(`Invalid input: ${token} is not a number`); // Throws an error for invalid operands.
        }
        stack.push(token); // Pushes the operand onto the stack.
      }
    }
    let finalResult = 0; // Initializes a variable to hold the final result.
    let currentOperator = "+"; // Initializes the current operator to addition.
    for (const token of stack) { // Iterates through each token remaining on the stack.
      if (operators.has(token)) { // Checks if the token is an operator.
        currentOperator = token; // Updates the current operator.
      } else { // Handles tokens that are operands.
        const operand = parseFloat(token); // Converts the token to a number.
        switch (currentOperator) { // Performs the arithmetic operation based on the current operator.
          case "+":
            finalResult += operand;
            break;
          case "-":
            finalResult -= operand;
            break;
          case "*":
            finalResult *= operand;
            break;
          case "/":
            finalResult /= operand;
            break;
        }
      }
    }
    this.result = finalResult; // Sets the final result as the value of the result variable.
  }
}

// Test the Calculator class
const calc = new Calculator(); // Creates a new Calculator object.
calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7"); // Calculates the result of the expression.
console.log("Result:", calc.getResult()); // Outputs the result.
