/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;

if (votingAge > 18){
    console.log("true");
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let firstVariable = 0;
let secondVariable = 20;

if (secondVariable < 100){
    firstVariable = 10;
    console.log(firstVariable);
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999"));



//Task d: Write a function to multiply a*b 

function myMultiply(a, b) {
    return a * b;
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function toDogYears(a){
    return a * 7;
}




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function myDogFeeder(dogWeight, ageInYears){
        let foodAmount;

    if ((ageInYears >= 1) && (dogWeight <= 5)){
        foodAmount = dogWeight * 0.05;
        console.log("1");
    }
    else if ((ageInYears >= 1) && (dogWeight > 5 && dogWeight <= 10)){
        foodAmount = dogWeight * 0.04;
        console.log(dogWeight);
    } 
    else if ((ageInYears >= 1) && (dogWeight > 10 && dogWeight <= 15)){
        foodAmount = dogWeight * 0.03;
        console.log("3");
    }
    else if ((ageInYears >= 1) && (dogWeight > 15)){
        foodAmount = dogWeight * 0.03;
        console.log("4");
    }
    else if (ageInYears <= 0.3334 && ageInYears >= 0.1667){
        foodAmount = dogWeight * 0.1;
        console.log("5");
    }
    else if (ageInYears <= 0.5834 && ageInYears >= 0.3335){
        foodAmount = dogWeight * 0.05;
        console.log("6");
    }
    else if (ageInYears <= 0.9999 && ageInYears >= 0.5835){
        foodAmount = dogWeight * 0.04;
        console.log("7");
    }

    return foodAmount;
}

console.log(myDogFeeder(15, 1));




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  function roShamBo(a){
     
    let userInputInt;
    let userInput = a.toString().toLowerCase();
    
    const randomNum = Math.ceil(Math.random() * 3);

    if (userInput === "rock") {userInputInt = 1;}
    else if (userInput === "paper") {userInputInt = 2;}
    else if (userInput === "scissors") {userInputInt = 3;}
    else {
        return userInput;
    }

    if (userInputInt === 1 && randomNum === 1){ return "You drew.";}
    else if (userInputInt === 1 && randomNum === 2){ return "You lost.";}
    else if (userInputInt === 1 && randomNum === 3){ return "You won.";}
    else if (userInputInt === 2 && randomNum === 1){ return "You won.";}
    else if (userInputInt === 2 && randomNum === 2){ return "You drew.";}
    else if (userInputInt === 2 && randomNum === 3){ return "You lost.";}
    else if (userInputInt === 3 && randomNum === 1){ return "You lost.";}
    else if (userInputInt === 3 && randomNum === 2){ return "You won.";}
    else if (userInputInt === 3 && randomNum === 3){ return "You drew.";}
    else {return "I see you don't know Roshambo..."}
  }
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function toMiles(kilometers){
    return kilometers*0.6214;
}




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  function toCentimeters(feet){
      return feet*30.48;
  }




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(a){
    while (a > 0){
        console.log(`${a} bottles of soda on the wall, ${a} bottles of soda, take one down pass it around ${a-1} bottles of soda on the wall`);
        a -= 1;
    }
}


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeAssignment(a){
    if (a > 89){console.log(`Your score of ${a} resulted in a grade of (A.)`);}
    else if (a > 79){console.log(`Your score of ${a} resulted in a grade of (B.)`);}
    else if (a > 69){console.log(`Your score of ${a} resulted in a grade of (C.)`);}
    else if (a > 59){console.log(`Your score of ${a} resulted in a grade of (D.)`);}
    else {return `You have failed. (F.)`}

}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





