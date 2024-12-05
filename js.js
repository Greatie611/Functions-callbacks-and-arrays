
//Functions,callbacks and arrays

// Assignment 1
const cutOff = 120
const number= [100,102,130,140]
function checkvalues () {
  for (let x = 0; x < number.length; x++)
    if (number[x] >= cutOff){
console.log("Admitted");

    }
    else{
      console.log("try again next year");
      
    }
  }

checkvalues([0]+10,[1]+10 ,[2]+ 10, [3]+ 10)
//A variable for cutoff was defined and a value of 120 assigned to it.
//An array of numbers was also defined.
//Next a function to check values was also created. It was undefined
//I used a for loop to move through the values of the array.
//If each element/number was >= the cutOff or 120, "Admitted" would be displayed, else, "try again next year"
//I called the function and assigned values to it (I called the index of each element in the array and added 10) 







//Assignment 2
const names = ["David", "Destiny","Favor","Elvis", "Great", "Princess"]
const scores = [70,72,68,70,69,72]
const addScores = (Num1,Num2,Num3,num4,Num5,Num6) => {
  for (let i = 0; i < names.length; i++)
  {scores [i] + (Num1,Num2,Num3,num4,Num5,Num6); console.log(`${names[i]}'s updated score: ${scores [i]}`);
  
  }
  }

 addScores(1,2,3,3,8,5)

 //Arrays were first defined. One, an array of strings containing the names of the student, the other an array of
 //numbers containing the scores of each student in the first array.
 //Next, a function was defined. I used the arrow function. It was also an undefined function.
 //Inside the function, a loop was created. I used the for loop to iterate through the array containing names.
//Next, Each element in scores, were made to add an undefined sum to their scores.
//Console.log was a concatenation of the array [names], a string and the second array [scores] to make a sentence
//Lastly, I called the function name, and in the bracket, assigned values to it.