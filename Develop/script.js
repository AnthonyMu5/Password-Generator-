// Assignment code here

//length of the password
// Pops a window asking for length of the password
var Pass_length = Number(window.prompt("How long would you like the password to be? "));

// checks to see if its a number, small than 8
// and bigger than 128
function Check_length (len_Check){

  var len_Check = Pass_length;
  var num = 0;
  while (num == 0) {

    if(isNaN(len_Check)){
      var len_Check = Number(window.prompt("Please Write a number: "));
    }else if(len_Check <= 8){
      var len_Check = Number(window.prompt("Write a number greater than 8 "))
    }else if(len_Check >= 128){
      var len_Check = Number(window.prompt("Write a number smaller than 128 "))
    }else {
      console.log(len_Check)
      num++;
    }
  }

}
//calls the function
Check_length()


// Different Chacters types

//LowerCase
var Smol_words = window.prompt("Would you like lowercase words? y/n to answer ");

function Check_smol(check_Low) {

  var check_Low = Smol_words;
  var someNum = 0;

  while(someNum == 0){

    if(check_Low == 'y') {
      var check_Low = "yes";
      someNum++;
    }else if(check_Low == 'n') {
      var check_Low = 'no';
      someNum++;
    }
    else{
      var check_Low = window.prompt("Please answer with y or n ");
    }

  }
  console.log(check_Low);
}

Check_smol()

// UpperCase
var Big_words = window.prompt("Would you like Uppercase words? y/n to answer ")

function Check_big(check_Upper) {

  var check_Upper = Big_words;
  var someNum = 0;

  while(someNum == 0){

    if(check_Upper == 'y') {
      var check_Upper = "yes";
      someNum++;
    }else if(check_Upper == 'n') {
      var check_Upper = 'no';
      someNum++;
    }
    else{
      var check_Upper = window.prompt("Please answer with y or n ");
    }

  }
  console.log(check_Upper);
}

Check_big()

// Special 
var Special_words = window.prompt("Would you like Special characters? y/n to answer ")
function Check_special(spec_Check) {

  var spec_Check = Special_words;
  var someNum = 0;

  while(someNum == 0){

    if(spec_Check == 'y') {
      var spec_Check = "yes";
      someNum++;
    }else if(spec_Check == 'n') {
      var spec_Check = 'no';
      someNum++;
    }
    else{
      var spec_Check = window.prompt("Please answer with y or n ");
    }

  }
  console.log(spec_Check);
}

Check_special()



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
