let isAccountLocked = false;
let userRole = 'user';

if (isAccountLocked) {
    console.log('is account locked');
} else if (userRole === 'admin') {
    console.log('welcome Admin');
} else {
    console.log('welcome');
}

//challenge

//its freezing
//its hot
//its nice

// 3 senerious: we will use if else.. will allow us
//to give 3 different paths -- 
//remember: if statment is false the code in {} will not run

let temp = 45;

if (temp <= 10) {
    console.log('freezing');
    
} else if (temp > 45) {
    console.log('hot');
} else {
    console.log('nice'); //this will run -- temp is 45.
}