// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number =prompt(`Put any number`);
if (number%2 === 0) {
  alert(`number is even`);
}
else{
  alert(`number is odd`);

}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1=prompt(`add first number`);
let num2=prompt(`add second number`);
if (num1>num2){
  alert(`your max value ${num1}`);
} else{
  alert(`your max value ${num2}`)
}

// 3. Convert the above code using`?` terniary operator

let num1=prompt(`add first number`);
let num2=prompt(`add second number`);
(num1>num2) ? alert(`your max value ${num1}`)
:
alert(`your max value ${num2}`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName=prompt(`Enter your house name `)
 
if (houseName == `stark`){
  alert(`winter is coming`);
}
else if(houseName == `lannister`){
  alert(`A lannister always pays his debt`);

}
else{
  alert(`All men must die`)
}



// 5. Convert the above code using`?` terniary operator
let houseName=prompt(`Enter your house name `);
(houseName == `stark`) ? alert(`winter is coming`):
(houseName == `lannister`)? alert(`A lannister always pays his debt`):
alert(`All men must die`);





// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month=prompt(`add a month`)
if(month === 2){
  console.log(28);
} else if(month === 1 || month === 3 || month === 5|| month=== 7 || month === 8 || month == 10 || month === 12 ){
  console.log(31);
} else {
  console.log(30)
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary=prompt(`hand selary`);
if (salary<=20000){
  alert(`tax is 10%`);
}
  else if (salary<=40000){
    alert(`tex is 20%`);
  }
  else if (salary>50000){
    alert(`tex is 30%`);
  }
  else{
    alert(`dot't know`)
  }

//  if..else vs switch



/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=56;
if (marks >100){
  alert(`marks can be greater than 100`)
}
else if (marks >80 && marks <100){
  alert(`Grade A`)
}
else if (marks >50 && marks <80){
  alert(`Grade B`)
}
else if (marks >30 && marks <50){
  alert(`Grade C`)
}
else if (marks >0){
  alert(`Grade D`)
}
 

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
 let weather=prompt(`What is the weather like outside?`)
 if (weather ==`sunny`){
   alert(`Wear a T-shirt`)
 }
 else if (weather===`rainy`){
   alert(`Don't forget to take your raincoat`)
 }
 else if (weather===`hot`){
  alert(`hanky`)
}
else if (weather===`freezing`){
  alert(`Get your sweeter on`)
}
else{
  alert(`Not a valid input`)
}