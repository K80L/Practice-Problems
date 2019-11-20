// Given a string of numbers, you can interpolate basic operations (+, -, * and /) 
// to create an equation that can be evaluated using simple math. 
// Given a string of numbers and a value, write a method that prints all of the equations that can 
// be generated using that string that evaluate to the given value. ex- f("323",3) 
// will print out "3 * 2 - 3" 

// I would place all the operations between every number
// then just take the ones that are correct.
// 3 +-*/ 2 => res +-*/ = ans 
//O(4^n) ==> O(1^n)

