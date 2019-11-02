//Challenge:
//function to calculate student's grade (studentScore, totalPossibleScore)
//if student get 15/20 -> return msg -> You got a C (75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-50

let grade = function(studentScore, totalPossibleScore) {
    let testScore = (studentScore / totalPossibleScore) * 100;
    // use an empty string and inject the score in the return statment will save lines of code.
    let letterGrade = ''; 

    if (testScore >= 90) {
        letterGrade = 'A';
    } else if (testScore >= 80) {
        letterGrade = 'B';
    } else if (testScore >= 70) {
        letterGrade = 'C';
    } else if (testScore >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    //1 return statment - cleaner code.
    return `You got a ${letterGrade} ${testScore}%`;
}

let studentGrade = grade(16, 20); 
console.log(studentGrade);//score will print B with 80%.
