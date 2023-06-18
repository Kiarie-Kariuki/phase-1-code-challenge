//define a function that generates grades
function gradeGenerator (marks) {
    if (marks > 79) {
        return "A";
    }
    else if (marks >= 60) {
        return  'B';
    } 
    else if (marks >= 50) {
        return 'C';
    }
    else if (marks >= 40) {
        return 'D';
    }
    else{
        return 'E';
    }
}
//initiate a function to input marks that will allow generation of grades
function inputMarks (){
    //prompt user to input marks
    const marks = prompt("Enter Marks");
    // check if the values put in for marks are valid
    if(isNaN(marks) || marks <0 || marks > 100){
        console.log("Invalid input. Input marks between 0 and 100.");
    } else {
        const grade = gradeGenerator(marks);
        console.log (grade);
    }
}
//call the inputMarks function
inputMarks();