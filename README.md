# Documentation
Documentation about JavaScript ES6+ features

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
Variables created with the `const` keyword are a read-only (immutable) reference to a value and cannot be reassigned.

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

#### Modules

##### Export
```javascript
// library.js
export class LibraryName {
    constructor () { }

    testFunction() { }
}
```

##### Import
```javascript
// testFile1.js
import * as libraryName from 'librayPath';
librayName.testFunction();

// testFile2.js
import { LibraryName } fron 'libraryPath';
LibraryName.testFunction();
```

#### Default parameters
ES6 introduces default parameters.

**Example**
```javascript
const logName(name = 'defaultName') {
    console.log(name);
};

logName('TestName'); // Output: TestName

logName(); // Output: defaultName
```

#### Array functions

##### ForEach
the forEach function iterates over an array and passes the values from that array into a designated function.

**Example**
```javascript
const numbers = [1, 2, 3];

function timesTwo(number){
    console.log(number * 2);
}

numbers.forEach(timesTwo);
// Output 1: 2
// Output 2: 4
// Output 3: 6
```

##### Map
The map functions allows you to perform an action to each element in an array, and create a new array containing the results.

**Example**
```javascript
const numbers = [1, 2, 3];

function timesTwo(number){
    return number * 2;
}

const doubleNumbers = numbers.map(timesTwo);

console.log(doubleNumbers); // Output: [2, 4, 6]
```

##### Filter
The filter function checks each element in an array to see if it meets a certain condition and adds it to a new array if it does. In doing so, it creates a new subset of the original array.

**Example**
```javascript
const numbers = [1, 2, 3];

function isOdd(number){
    if(number % 2){
        return number;
    }
}
const oddNumbers = numbers.filter(isOdd);

console.log(oddNumbers); // Output
```

##### Reduce

##### Work with this project

```bash
npm install
```