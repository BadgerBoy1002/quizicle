   alert("WELCOME to Quizicle!")
var qOne = prompt("Enter a question!");
var myqOne = prompt("Enter an answer!");
   alert("The test is about to begin!");
var aOne = prompt(qOne);
if(aOne === myqOne) {
   alert("Correct!");
}
else
{
   alert("Wrong!");
}
var option = prompt("Would you like to give feedback, yes or no?");
if(option === "yes") {
   var feedback = prompt("How would you rate this out of 10?!");
}
else
{
   alert("...well it's your loss");
}
if(feedback > 6) {
   alert("Thank you for using this program!");
}
else
{
    var why = prompt("Why so...");
}
if(why === why) {
   alert("Your feedback is much appreciated!");
}
   alert("Thank you for using this program!");
