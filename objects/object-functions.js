let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Kapka on the beach',
    author: 'Haroki Morakami',
    pageCount: 523
}

let getSummary = function(book) {//pass an object into a function.
    return { //get an object back from a function.
        summary: `${book.title} by ${book.author}`,
        pagCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pagCountSummary);


//challenge:
//new function -take fahrenheit in - return object with all three (celcius/kelvin/fahrenheit).

let degree = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celcius: (fahrenheit - 32) * (5 / 9)
    }
}

let temp = degree(74); 
console.log(temp);//will print object with all 3.
