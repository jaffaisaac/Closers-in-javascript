function outer(){
    var a  =10;
    function inner(){
        console.log(a)
    }
    return inner
}

outer()();
// The first set of parentheses outer() calls the outer function, which returns the inner function inner(). The second set of parentheses () calls the inner function, which then logs the value of a to the console.

// The reason why we need two sets of parentheses is that outer() returns the inner() function, but it does not execute it. To execute the inner() function, we need to call it separately by adding another set of parentheses after the first one. This is known as a "function invocation" or "function call."