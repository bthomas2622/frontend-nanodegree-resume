// var awesomeThoughts = "I am Ben and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Ben Thomas");
var formattedRole = HTMLheaderRole.replace("%data%", "Network Design Engineer and Front End Web Meddler");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {"name" : "Ben Thomas",
 "role" : "Network Design Engineer and Front End Meddler",
 "contact-info" : {"Email" : "bthomas2622@gmail.com", "Phone" : "678-463-1402"},
 "picture-url" : "mugshot.jpg",
 "welcome-message" : "Welcome to my interactive resume",
 "skills" : ["Too Cool for School", "like way too cool"],
};