// JavaScript Refresher

// 0. Adding Javascript to a Web Page

// JavaScript can be added to a web page in three different ways:

// Inline script
// Internal script
// External script
// Multiple External scripts

// ## Inline Script ------------------------

// <!DOCTYPE html>
{
  /* <html>
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
  </body>
</html> */
}

// ## Internal Script   -------------------

// This way we write an internal script most of the time. Writing js code in the body section in the most preferred option.
// <!DOCTYPE html>
{
  /* <html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </body>
</html> */
}

// External Script  ----------------------

// To write external js, first we have to create _.js file outside. then link that file inside the html like this.

// <!DOCTYPE html>
{
  /* <html>
  <head>
    <title>30DaysOfJavaScript:External script</title>
  </head>
  <body>
    //it could be in the header or in the body // Here is the recommended place
    to put the external script
    <script src="introduction.js"></script>
  </body>
</html> */
}

// --------------------------------------------------\
// ------------------------------------------------------

// Let's start the js learning for 30 days straight.

// 1. Variables

//  We can create variable in three ways in js. using var, let, const.

// var = 'name'  || var diclare in global scope
// let = 'name' || let diclare in local scope
// const = 'name' || const diclare unchangble

// 2. Arrays

/* In contrast to varibles, an array can store multiple values, Each value in an array has an index, and each index has a reference in a memory address, Each valu can be accessed by using their indexes. The index of an array starts from zero, and the index of the last element in less by one from the lenghth of the array. 
       
       An array is a collection of different data types which are ordered and changeable(modifiable). And array allows storing duplicate elements and different data types. An array can be empty, or it may have differetn data type values. 

    How to create an empty Array.

    ** using Array Constructor ==
       // Syntex 
       const arr = Array()
       
    ** using square brackets ([])
        let arr =  []

    How to create an array with values 

        Array with initial values, We use length property to find the length of an array.

            const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
            const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
            const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
            const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
            const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
            const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

            PRINT THE LENGHT OF THE ARRAY
            console.log(Numbers: numbers.length)

            ** Array can have items of different types
                const arr = [
                'Asabeneh',
                250,
                true,
                { country: 'Finland', city: 'Helsinki' },
                { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
                ] 
                // arr containing different data types
                console.log(arr)


            * CREATING AN ARRAY USING SPLIT
                
                As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples below.

                let js = 'JavaScript'
                const charsInJavaScript = js.split('')

                console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

                let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
                const companies = companiesString.split(',')


               We also can  Access array items using index
                
               const fruits = ['banana', 'orange', 'mango', 'lemon']
                let firstFruit = fruits[0] // we are accessing the first item using its index

                console.log(firstFruit)

            
            **  MODIFYING THE ARRAY ELEMENTS

                An array is mutable. Once fan array is created, we can modify the contents of the array elements
                
                const numbers = [1, 2, 3, 4, 5]
                numbers[0] = 10 // changing 1 at index 0 to 10
                numbers[1] = 20 // changing  2 at index 1 to 20

                console.log(numbers) // [10, 20, 3, 4, 5]

            ** Methods to manipulate array

                There are different methods to manipulate an array. These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

            ** ARRAY CONSTRUCTOR
                
                Array.To create an array:
                const arr = Array() // creates an an empty array
                console.log(arr)

                const eightEmptyValues = Array(8) // it creates eight empty values
                console.log(eightEmptyValues) // [empty x 8]
                
        
                let num = [0,2,3,4,5,6]
                console.log(num.lastIndexOf(-1))


        ** Converting array to string
                
                Converting array to string


                const numbers = [1, 2, 3, 4, 5]
                console.log(numbers.toString()) // 1,2,3,4,5
                
                const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
                console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

        ** Slice array elements 

            const numbers = [1, 2, 3, 4, 5]
            console.log(numbers.slice()) // -> it copies all  item
            console.log(numbers.slice(0)) // -> it copies all  item
            console.log(numbers.slice(0, numbers.length)) // it copies all  item
            console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position

        * Splice method in array
            const numbers = [1, 2, 3, 4, 5, 6];
              numbers.splice(0, 3, 7, 8, 9)
              numbers.sort()
      
            console.log(numbers); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
            
            const months = ['Jan', 'March', 'April', 'June'];
             months.splice(1, 0, 'Feb');
            console.log(months);


        

       */

// ======================ARRAY EXERCISE ======================

let array = [];
let Five_elem_array = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let arr_length = Five_elem_array.length

console.log(arr_length);
console.log(Five_elem_array[0]);
console.log([Math.round((Five_elem_array - 1)/2)]);
console.log(Five_elem_array.slice(-1));

let mixedDataTypes = [
    "Name",
    2, 
    true,
    {fruit: ['apple' , 'banana','graps']}
]
console.log(mixedDataTypes);
