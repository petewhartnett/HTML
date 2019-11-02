
var today = new Date();
var hourNow = today.getHours();
var greetings;


function welcome(){
if (hourNow > 18){

  greetings = "Good Evening!"
}
else if(hourNow > 12){

  greetings = "Good Afternoon!"
}
else if(hourNow > 1){

  greetings = "Good Morning!"
}

else {
  greetings = "Welcome!"
}

document.write('<h2>' + greetings + '</h2>');

}