//Global (name)
    //Local (name)
        //Local
    //Local

let name = 'Omer';

if (true) {
    let name = 'Daniel';
    if (true) {
        name = 'Jen';
        console.log(name); //will print local scope inside the code block - Jen
    }
}

if (true) {
    console.log(name);//will print Local - Daniel than Global - Omer
}

//Global 
    //Local 
        //Local
    //Local
// name is not diclaired with LET - scope leack - not wanted
// we have to declaire a variable to 'control' it.
    if (true) {
        //let name = 'Daniel';
        if (true) {
            name = 'Jen';
            console.log(name); //will print - Jen
        }
    }
    
    if (true) {
        console.log(name);//will print - Jen
    }