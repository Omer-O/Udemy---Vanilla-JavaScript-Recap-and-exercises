let temp = 55;

// And && operator - true if both sides are true / otherwise - false
// Or || operator - true if at list 1 side is true / otherwise - false
if (temp >= 60 && temp <= 90 ) {
    console.log('nice outside');
} else if (temp <= 0 || temp >= 120) {
    console.log('no outside');
} else {
    console.log('do what u want');
    
}

//challenge 

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

//Are both Vegan? only offer Vegan dishes.
//At least one Vegan? some vegan options.
//else, offer anything on the menue.

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('some Vegan dishes');
}else {
    console.log('all the menue');
}