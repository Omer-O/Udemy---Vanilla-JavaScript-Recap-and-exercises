
//JavaScript use Lexical scoping (static scope)

//Global Scope: defined outside of all code blocks.
//Local Scope: defined inside a code block.

// In a scope you can access variables defined in that scope, or in any
    // parent/

//tree in the code: 
    //Global scope (varOne) - in the global scope (not inside a code block)
        //local Scope (varTwo) - inside a code block
            //local Scope (varFour) - nested inside a code block
        //local Scope (varThree) - inside a code block

    let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);
    if (true) {
        let varFour = 'varFour';
    }
}

if (true) {
    let varThree = 'varThree';
}

console.log(varTwo);
