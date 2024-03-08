# Local Storage

So the data that we have will be stored directly onto the browser for use later,unless intentionally cleared. In the local storage You need to call the setItem method (localStorage.setItem) passing in two arguments (the key of the item[the identifyer]: the value itself). In local storage we are storing data in string format, by using the JSON.stringify we are *serializing*(translating an object or data structure) into string for storage. To bring back the information we use *parse* which will get the item back into an object for use inside of javascript.

# Function review

- const add2 = function(a){
    console.log(2+a);
    add2(3)
  - in this function we are passing in the value of a(which in this case is 3)
  - call function then runs
}
"declaring function" = "argument"("parameter"){
    "expression that is inside of the function"
}
- function can be named anything (generally- simplest to name the function what it is)
- when return expression will **always** return something, but without an explicit value we wont be able to used captured return. that why we will need a result

- *I feel like i can grasp the process of functions in the 'run of the mill" function but I am trying to rewrite down what the functions are and what they do whenever possible now, to drill it into me. So I that case i guess I am still struggling with functions*

```
const add2 = function(a = 10){
    return 2+a;
    }
    const result = add2()
```

- if no [add2("value")] is set we may want to add a **default value** to the function [(a=10)], this means that we will be assuming the value as what is in the function.
- This is an edge case = a way of error checking and making sure we try to implement ways to have our code do what we want it to do.

```
const add2 = function(...a){
    return 2+a(3);
    }
    const result = add2(1, 2, 3, 4)
```

**spread argument** will be passing in multiple things into the function by referencing the [add2()] by passing in the array[(1, 2, 3, 4)]. We will have all the arguments in the array to choose what our value will be for [a]. This is good for declarative. In this case we are choosing the [a] to be [(3)] which in the array is "4" so our function will return 2+a(4) = 6.  

**Outer/Inner funtion** the inner function(nested) can read the variables in the parent scope(exterior bloc or world) but the outer unction cannot see what it in the inner scope. This will have **closure**, in week 10 we have ...

```
const renderTblBtn = function(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', function(e){
    onUpdate(index, data);
  })
  btnEdit.addEventListener('click', function(e){
    console.log(FORM)
    FORM[1].value = obj.firstName;
    FORM[2].value = obj.lastName;
    FORM[3].value = obj.houseM;
    FORM[4].value = obj.houseS;
    onUpdate(index, data);
  });
  return td;
}
```

- where event listener will pass in the [(obj,index, data)], the passed in item are still accessible because they are in a nested function leaving it as *asynchronous* code.

### **IIFE** =

- Immediately Invoked function Expression
- Means as soon as page loads function is executed immediately. even if nothing inside function is declared.

```
const a = 3;

(function(a){
    console.log("inside IIFE");
    console.log(a);
})(a);
```

## arrow function

- function expression that is a compact version of traditional function
- map that loops over the array, but you will lose some detail of what the function is doing compared to traditional.
- the arrow is the "function" and the arrow is added in after parameter [(a)]

```
const add2 = (a) => {
  return 2 + a;
  }
```

- with an arrow if we have one expression {[expression is in what is inside curly brackets]} curly braces can be removed and parenthesis on [(a)] can be removed
- will return result by default, no need to have the "return" in the function

```
const add2 = (a) => 2 + a;
```