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
            "dates": "2015",
            "description": "TBD",
            "images": [
                "https://en.wikipedia.org/wiki/Coin#/media/File:Claudius_II_coin_(colourised).png",
                "https://en.wikipedia.org/wiki/Coin#/media/File:Claudius_II_coin_(colourised).png"
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


function displayWork() {
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
}

displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

function inName(name) {
    name = bio.name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);


projects.display = function() {
    for (var index in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();