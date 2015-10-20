// var awesomeThoughts = "I am Ben and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);

// var formattedName = HTMLheaderName.replace("%data%", "Ben Thomas");
// var formattedRole = HTMLheaderRole.replace("%data%", "Network Design Engineer and Front End Web Meddler");
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {"name" : "Ben Thomas",
 "role" : "Network Design Engineer and Front End Meddler",
 "contacts" : {"email" : "bthomas2622@gmail.com", "mobile" : "678-463-1402", "github" : "bthomas2622"},
 "picture-url" : "mugshot.jpg",
 "welcome-message" : "Welcome to my interactive resume",
 "skills" : ["Too Cool for School", "like way too cool"] //last value in object does not have comma
};

var work = [
	{"employer" : "AT&T", "title" : "Network Design Engineer", "location" : "Atlanta, GA", "dates" : "June 2014 - Present", "description" : "TBD"},
	{"employer" : "Calphalon", "title" : "Kitchen Electrics R&D Intern", "location" : "Sandy Springs, GA", "dates" : "Summer 2012, Summer 2013", "description" : "TBD"} 
];

var projects = [{"title" : "Interactive Resume", "dates" : "Fall 2015", "description" : "TBD", "images" : ["url", "url"]}];


var education = { "schools" : [ 
	{"name" : "Georgia Tech", "dates" : "2010-2014", "location" : "Atlanta", "degree" : ["BSME"], "url" : "TBD"}, 
	{"name" : "South Forsyth High School", "dates" : "2006-2010", "location" : "Cumming", "degree" : ["HS Diploma"], "url" : "TBD"}
],
"onlineCourses" : [
	{"title": "Front-End Web Developer", "school" : "Udacity", "dates" : "2015-2016", "url" : "TBD"}
]
};
// education["name"] = "Georgia Tech"; 
// education["yearStarted"] = "2010";
// education["yearEnded"] = "2014";
// education["city"] = "Atlanta"; 

// $("#main").append(work["position"]);
// $("#main").append(education.name);