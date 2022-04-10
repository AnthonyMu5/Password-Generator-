// Assignment code here

// global varibles
var Pass_length =0;
var Smol_words = 0;
var Big_words =0;
var Special_words =0;
var Numeric_words =0;
newYork =0;


// list of special characters
const char_Special = ["!", "#", "$", "%","&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", ">", 
"?", "@", "[", "]", "^", "_", "~", "{", "}", "|" ]

// list of Uppercase Letters
const char_Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// list of Lowercase letters
const char_Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// list of Numbers
const char_Num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

// All characters in one list
const char_All = [char_Special, char_Upper, char_Lower, char_Num]

// example of how to get one character
// console.log(char_All[1][6])

function questions() {
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

    Pass_length = len_Check;

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
    Smol_words = check_Low;
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
    Big_words = check_Upper;
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
    Special_words = spec_Check;
  }
  Check_special()

  // Numbers
  var Numeric_words = window.prompt("Would you like Numbers in your password? y/n to answer ");
  function Check_num(num_Check) {
    var num_Check = Numeric_words;
    var someNum = 0;

    while(someNum == 0){
      if(num_Check == 'y') {
        var num_Check = "yes";
        someNum++;
      }else if(num_Check == 'n') {
        var num_Check = "no"
        someNum++;
      }else{
        var num_Check = window.prompt("Please answer with y or n ")
      }
    }
    console.log(num_Check)
    Numeric_words =num_Check;
  }
  Check_num();

  // The yes no problem
  // theres 4 varibles added to make a website this is to make
  // it easier to run

  var newYork =0;

  function check_NY(ny_Check) {
    var ny_Check = newYork;

    var smol_chars = Smol_words;
    var upper_chars = Big_words;
    var spec_chars = Special_words;
    var numb_chars = Numeric_words;

    if(smol_chars == "yes" && upper_chars =="yes" && spec_chars =="yes" && numb_chars =="yes") {
      ny_Check = 1234;
    }else if(smol_chars == "no" && upper_chars == "no" && spec_chars =="no" && numb_chars=="no") {
      ny_Check= 5678;
    }else if(smol_chars == "yes" && upper_chars == "no" && spec_chars =="no" && numb_chars=="no") {
      ny_Check= 1678;
    }else if(smol_chars == "no" && upper_chars == "no" && spec_chars =="no" && numb_chars=="yes") {
      ny_Check= 5674;
    }else if(smol_chars == "yes" && upper_chars == "yes" && spec_chars =="yes" && numb_chars=="no") {
      ny_Check= 1238;
    }else if(smol_chars == "no" && upper_chars == "yes" && spec_chars =="yes" && numb_chars=="yes") {
      ny_Check= 5234;
    }else if(smol_chars == "no" && upper_chars == "no" && spec_chars =="yes" && numb_chars=="yes") {
      ny_Check= 5634;
    }else if(smol_chars == "yes" && upper_chars == "yes" && spec_chars =="no" && numb_chars=="no") {
      ny_Check= 1278;
    }else if(smol_chars == "no" && upper_chars == "yes" && spec_chars =="no" && numb_chars=="no") {
      ny_Check= 5278;
    }else if(smol_chars == "yes" && upper_chars == "no" && spec_chars =="yes" && numb_chars=="yes") {
      ny_Check= 1634;
    }else if(smol_chars == "no" && upper_chars == "no" && spec_chars =="yes" && numb_chars=="no") {
      ny_Check= 5638;
    }else if(smol_chars == "yes" && upper_chars == "yes" && spec_chars =="no" && numb_chars=="yes") {
      ny_Check= 1274;
    }else if(smol_chars == "yes" && upper_chars == "no" && spec_chars =="no" && numb_chars=="yes") {
      ny_Check= 1674;
    }else if(smol_chars == "no" && upper_chars == "yes" && spec_chars =="yes" && numb_chars=="no") {
      ny_Check= 5238;
    }else if(smol_chars == "no" && upper_chars == "yes" && spec_chars =="no" && numb_chars=="yes") {
      ny_Check= 5274;
    }else if(smol_chars == "no" && upper_chars == "no" && spec_chars =="no" && numb_chars=="yes") {
      ny_Check= 5674;
    }else {
      ny_Check = "Missed One"
    }

    console.log(ny_Check);
    newYork = ny_Check;
  }
  check_NY();

  var item = item[Math.floor(Math.random()*3)];
  const passwrd = [];
  console.log(item)



  

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //Brings out the questions to use
  questions();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
