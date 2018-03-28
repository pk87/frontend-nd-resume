/*
This is empty on purpose! Your code to build the resume will go here.
 */


//alert ("i am here");
// TO REMOVE UNWANTED CHANGE/MODIFICATION ON THE RESUME SECTION BY UNINTENDED PARTY:

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");
    // Don't delete this line!
    return newHTML;
};




// Did your code work? The line below will tell you!
//console.log(charEscape(html));


///////////////////////////////
// THIS IS FOR BIO SECTION ~//
//////////////////////////////


var bio = 
{
	"name" : "Paul Yung",
	"role" : "Network Engineer & Web Developer",
	"contacts" : {
		"mobile" : "+6593958888",
		"email" : "paulyung@outlook.com",
		"github" : "pk87",
		"twitter" : "pk_awe87",
		"location" : "Singapore"
	},	
	"welcomeMessage" : "Dream Big, work hard and You will be rewarded~",
	"skills" : ["Computer Network", "Programming", "Javascript", "Painting", "Web designer"],
	"bioPic" : "images/professor_skwirk.png"
}


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
	
	//contacts//
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#footerContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

// APPEND SKILLS TO HEADER IF ANY SKILLS PRESENTS IN BIO PROPERTY:
	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);

		for (var i=0; i < bio.skills.length; i++) {
			formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
		}
}

bio.display();



//////////////////////////////////////
// THIS IS FOR EDUCATION SECTION ~///
////////////////////////////////////



var education = {
	"schools": [
	{
		"name" : "University Science of malaysia",
		"location" : "Penang, Malaysia",
		"degree" : "BA",
		"majors" : ["Electrical", "Electronic"],
		"dates" : "2010",
		"url" : "http://www.eng.usm.my/index.php/en/"
	},
	{
		"name" : "University of St.Paul",
		"location" : "Membakut, Malaysia",
		"degree" : "Bachelor of Arts (BA)",
		"majors" : ["Classics","Christian Thought and History"],
		"dates" : "2015",
		"url" : "https://ustpaul.ca/"
	}
	],

	"onlineCourses" : [
	{
		"title" : "Introduction to Programming Nanodegree (IPND)",
		"school": "Udacity",
		"dates" : "2018",
		"url" : "http://www.udacity.com"
	},
	{
		"title" : "Internetworking and TCP/IP Basics",
		"school": "AT&T University",
		"dates" : "2018",
		"url" : "http://about.att.com/story/att_and_udacity_launch_online_training_program_nanodegree.html"
	},
	{
		"title" : "IP Networks - Troubleshooting",
		"school": "AT&T University",
		"dates" : "2018",
		"url" : "http://www.udacity.com"
	}
	]
}


education.display = function() {
	education.schools.forEach(function(e) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%", e.name).replace("#", e.url);
	//	$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", e.degree);
	//	$(".education-entry:last").append(formattedDegree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedLocation = HTMLschoolLocation.replace("%data%", e.location);
		$(".education-entry:last").append(formattedLocation);
		var formattedDates = HTMLschoolDates.replace("%data%", e.dates);
		$(".education-entry:last").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", e.majors);
		$(".education-entry:last").append(formattedMajor);

		});


	//online course
	$("#education").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(oc) {
		$("#education").append(HTMLschoolStart);
//		$("#education").append(HTMLonlineClasses);
		var formattedTitle = HTMLonlineTitle.replace("%data%", oc.title).replace("#",oc.url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", oc.school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);	
//		var formattedURL = HTMLonlineURL.replace("%data%", oc.url);
		var formattedDates = HTMLonlineDates.replace("%data%", oc.dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", " ");
		$(".education-entry:last").append(formattedURL);
		});
	};


education.display();



//////////////////////////////////
//THIS IS FOR WORK/JOB SECTION ~//
//////////////////////////////////



var work = {
	"jobs" : [
	{	
		"employer": "Intel Penang",
		"title": "BIOS specialist",
		"location": "Malaysia",
		"dates" :"2010-2011",
		"description": "Merge BIOS setting for IMGD/EIMGD for Intel Graphic",
	},
	{	
		"employer": "AT&T Singapore",
		"title": "Network Specialist",
		"location": "Singapore",
		"description": "Manages Corporate network for MOW and US Domestic IDCs",
		"dates": "2011-2017",
	},
	{	
		"employer": "AT&T Malaysia",
		"title": "Network Controller",
		"location" : "Malaysia",
		"description": "Manages Transport Circuit and interfaces with MOW ISPs",
		"dates" : "2017-Present",
	}
	]
}



work.display = function() {
	work.jobs.forEach(function(job) {
//need to use for loop or forEach loop.
	$("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
	var formattedWorkPosition = HTMLworkTitle.replace("%data%", job.title);
	var formattedEmployerPosition = formattedWorkEmployer + formattedWorkPosition;
	$(".work-entry:last").append(formattedEmployerPosition);
	
	var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
	var formattedWorkCity = HTMLworkLocation.replace("%data%", job.location);
	var formattedDatesCity = formattedWorkDates + formattedWorkCity
	$(".work-entry:last").append(formattedDatesCity);

	var formattedWorkDesc = HTMLworkDescription.replace("%data%", job.description);
	$(".work-entry:last").append(formattedWorkDesc);


 });
};

work.display();





////////////////////////////////////
// THIS IS FOR PROJECT SECTION ~///
///////////////////////////////////




var project = {
	"projects" : [
	{
		"title" : "Network Automation for backend monitoring",
		"dates" : "2015",
		"description" : "Automated the Solvo system for automatically generated a ticket to workcenter.",
		"images" : "images/project-image-automate.jpg"
	},
	{
		"title" : "Restructure webpage for company internal tooling system.",
		"dates" : "2016",
		"description" : "Internalized and consolidate internal management tools for internal network support access.",
		"images" : "images/project-image-tooling.png"
	}
	]
};


//using dot notation to assign a function to object 'project' for display property.


//iterate through every project in project and append to 'project-entry', taking last data.
project.display = function() {
	for (proj=0; proj < project.projects.length ; proj++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[proj].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",project.projects[proj].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDesc = HTMLprojectDescription.replace("%data%",project.projects[proj].description);
		$(".project-entry:last").append(formattedDesc);

		var formattedImage = HTMLprojectImage.replace("%data%",project.projects[proj].images);
		$(".project-entry:last").append(formattedImage);

	}
};


project.display();




/*
//function to internationalize name.
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name [0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

*/

//ADD A MAP TO THE RESUME PAGE
$("#mapDiv").append(googleMap);


