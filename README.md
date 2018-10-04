# Documentation
Some documentation


## JS

### Variables
ES6 introduced new type of variables for JS

#### Let
Variables created with the `let` keyword allows scripts restrict access to the variable to the nearest enclosing block.

**Example:**
```js
let test = 'test';
```

#### Const
Variables created with the `const` keyword are a read-only reference to a value and cannot be reassigned.

**Example:**
```js
const test = 'test';
```

### Functions
Normally a JavaScript function is declared like this
```js
function test() { }
```

#### Lambda Functions
In ES6 it's possible to create lambda/arrow functions like this
```js
() => { }
```

### String Methods
ES6 also introduces some new string methods

#### Template Literals
Template literals enable the usage of placeholders for string substitution using `${ }` syntax

**Example:**
```js
let test = 'test';
let string = `This is a ${test}`;

// Output: This is a test
```