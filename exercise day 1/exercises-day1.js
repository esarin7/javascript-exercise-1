//1. Define a new variable `quote` for the value "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things."

//Log out the quote 

//Log out the type of the variable. Is it a string? A number? Something else? 

var quote = ('A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.');
console.log(quote);

//2. Define a variable `quoteLength` that stores the length of the quote.

//Log out the length 
console.log(quote.length);


//3. Create a new variable `attributedQuote`. Add the string "- Rear Admiral Grace Hopper" to the end of the `quote` variable with an appropriate space in between.
//This new value should not _replace_ the `quote` variable's value
//Log out the new quote
var attributedQuote = '- Rear Admiral Grace Hopper';
var newQuote = quote + " " + attributedQuote;
console.log(newQuote);


//4. Create a function `attribute` that takes a quote and author and returns the attributed quote.
//Example: Takes "The key to being a successful programmer is to learn how to learn." and "- Shannon Burns" and returns "The key to being a successful programmer is to learn how to learn. - Shannon Burns"
function fullQuote (quote, author) {
         console.log (quote + author);
}
fullQuote("The key to being a successful programmer is to learn how to learn.", "- Shannon Burns");


//5. Create a function `sumOfNumbers` that takes 2 numbers and returns the sum of those numbers.
function sumOfNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber
}
console.log(sumOfNumbers(6, 8));

//6. Create a function `sumOfLowNumbers` that takes 5 numbers and returns the sum of all numbers that are less than or equal to 6.



//7. Go to https://pages.github.com/ and read through the tutorial to create a Github page.
// Choose Project site, Start from scratch. When you're finished, link your new project page here.



//8. Commit and push this file to your repository. Submit the URL for Assignment 1 on Brightspace.