var formattedName = HTMLheaderName.replace("%data%", "Ben Thomas");
var formattedRole = HTMLheaderRole.replace("%data%", "Network Design Engineer and Front End Web Meddler");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
// $("#main").append(work["position"]);
// $("#main").append("test");

var bio = {
    "name": "Ben Thomas",
    "role": "Network Design Engineer and Front End Meddler",
    "contacts": {
        "email": "bthomas2622@gmail.com",
        "mobile": "678-463-1402",
        "github": "bthomas2622"
    },
    "bioPic": "mugshot.jpg",
    "welcomeMessage": "Welcome to my interactive resume",
    "skills": [
        "Too Cool for School",
        "Like way too cool"
    ]
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLemail.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedBioPic = HTMLbioPic.replace("%data%", "mugshot.jpg");
$("#header").append(formattedBioPic); 
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome); 

var work = {
    "jobs": [
        {
            "employer": "AT&T",
            "title": "Network Design Engineer",
            "location": "Atlanta, GA",
            "dates": "June 2014 - Present",
            "description": "TBD"
        },
        {
            "employer": "Calphalon",
            "title": "Kitchen Electrics R&D Intern",
            "location": "Sandy Springs, GA",
            "dates": "Summer 2012, Summer 2013",
            "description": "TBD"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Interactive Resume",
            "dates": "Fall 2015",
            "description": "TBD",
            "images": [
                "url",
                "url"
            ]
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Georgia Tech",
            "dates": "2010-2014",
            "location": "Atlanta",
            "degree": [
                "BSME"
            ],
            "url": "TBD"
        },
        {
            "name": "South Forsyth High School",
            "dates": "2006-2010",
            "location": "Cumming",
            "degree": [
                "HS Diploma"
            ],
            "url": "TBD"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "TBD"
        }
    ]
};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);   
}

for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle); //:last means you specifically want to append

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates); 

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription); 
}