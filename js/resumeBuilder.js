/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append(["Margit Mikula"]);

//var skills = ["Statistics", "Bioinformatics" , "Front-end development"]; 
//var name = "Margit";

//var formattedName = HTMLheaderName.replace("%data%", name);
//$("header").append(formattedName);

//$("main").append(bio.name);

//var name = "Margit Mikula";
//var role = "Web Developer";
//var skills = ["Statistics", "Bioinformatics" , "Front-end development"]; 
//$("#main").append(skills);
//$("#main").append(skills[0]); appends only first skill

/*  The biography object*/

var bio = {  
   "name":"Margit Mikula",
   "role":"Hello - Goedendag - Bonjour - Guten Tag! ",
   "contacts": {
      "mobile":" 0032 484 439 204",
      "email":"margit.mikula@gmx.net",
      "github":"margitgit",
      "location":"La Hulpe/Brussels"
   
   },
   "welcomeMessage":"",
   "skills":[  
      "Front-end development (HTML, CSS, JavaScript, MDN-Mozilla Development Network, jQuery, JSON, node.js, gulp.js, Grunt, PhP, MySQL)", "Statistics (R, General Linear Model, Mixed Models)"
   ],
   "bioPic":"images/mm.jpg",
}

function displayBio() {

var skill =0;
  for (skill in bio.skills) 
  {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);    
    $("#header").prepend(formattedSkills);
  }     
    $("#header").prepend(HTMLskillsStart);
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedwelcomeMessage);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic); 
    $("#header").prepend(formattedbioPic);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedcontactGeneric = formattedMobile+formattedEmail+formattedGithub+formattedLocation;
    $("#header").prepend(formattedcontactGeneric);
    $("#footerContacts").append(formattedcontactGeneric);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
  
}

displayBio();


/* Work experience */

var work = {  
   "jobs":[  
       {  
         //"logo_url":"", 
         "employer":"KMO SPRL [http://k-mo.eu/]",
         "title":"Front-end development for KMO clients",
         "location" : "Brussels, Belgium",
         "dates":"2015-2016",
         "description":"Installation of WordPress, OrganicThemes, configuration of plugins (contactform-7, newsletter: MailPoet), translating design into code, HTML, CSS, PhP"
      },
      {  
         //"logo_url":"",
         "employer":"King's College London",
         "title":"Data Scientist",
         "location" : "London, UK",
         "dates":"2011-2015",
         "description":"The work consisted of three parts (1) analysis of brain images from Magnetic Resonance Imaging, (2) analysis of RNA data from blood samples, and (3) analysis of protein data from blood samples. By combining these data with cognitive performance scores I predicted the individual cognitive decline slope in patients with Alzheimer's disease. I dealt with a number of statistical techniques such as Descriptive Statistics, charts and graphs, the Normal Distribution, the \u03C4-distribution, skewed distributions, detecting and removing outliers, correlation and regression, power and sample size calculations, and modelling mixed effect models with R. I am very familiar with the Weka collection of machine learning algorithms for data mining tasks. I applied these algorithms directly to my datasets. I used the R statistical computing software and the Weka toolsuite for data pre-processing, classification, regression, and visualization." 
      },
      {  
         //"logo_url":"", 
         "employer":"Katholieke Universiteit Leuven",
         "title":"Researcher -- Computational modelling for Tissue engineering",
         "location" : "Leuven, Belgium",
         "dates":"2008-2009",
         "description":"Software (C++) for mimicking cell behaviour (attachment, repulsion)"
      },
      {  
         //"logo_url":"",
         "employer":"Vrije Universiteit Brussel",
         "title":"Researcher -- Computational modelling for virtual representation of the human body",
         "location" : "Brussels, Belgium",
         "dates":"2007-2008",
         "description":"Image annotation ontologies (Java, XML) for enabling collaboration between medical staff and help inspectors better highlight specific conditions"
      },
      {  
         //"logo_url":"",
         "employer":"University of Cologne",
         "title":"Researcher -- Computational modelling with bioinformatics application",
         "location" : "Cologne, Germany",
         "dates":"2005-2006",
         "description":"CUPE Metabolic Pathway Editor (C++)"
      },
      {  
         //"logo_url":"",
         "employer":"3 Vienna",
         "title":"Test Manager",
         "location" : "Vienna, Austria",
         "dates":"2002-2003",
         "description":"Testing Strategy for mobile phone apps (Java)"
      },
      {  
         //"logo_url":"",
         "employer":"WSM-WebstrategyManagement",
         "title":"Founder",
         "location" : "Vienna, Austria",
         "dates":"1999-2002",
         "description":"Customer aquisition, frontend webdevelopment (HTML, CSS, PHP), webdesign (Fireworks), databases (mySQL)"
      }

   ]
}

/* Replacing the data variables from helper.js with properties from the work object*/

var job =0;
function displayWork() {
  for (job in work.jobs) 
  {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title 
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedworkEmployerTitle = formattedworkEmployer+formattedworkTitle;    
    $(".work-entry:last").append(formattedworkEmployerTitle);

    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedworkLocation);    
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedworkDates);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description); 
    $(".work-entry:last").append(formattedworkDescription);

  } 
}

displayWork();

var edu = {  
   "unis":[  
      { 
        "name" : "Psychological Medicine - Biomarkers for Alzheimer's Disease",
        "degree" : "PhD",
        "dates" :  "2011-2015",
        "location" :  "King's College London"
        //majors: doesn't exsit in Europaen system
        //url: 
       },
       { 
        "name" : "Cognitive and Decision Sciences",
        "degree" : "MSc",
        "dates" :  "2009-2010",
        "location" :  "University College London"
        //url: 
       },
       { 
        "name" : "Bioinformatics",
        "degree" : "MSc",
        "dates" :  "2005-2006",
        "location" :  "University of Cologene"
        //url: 
       },
       { 
        "name" : "Computer Science, Communication-, and Information Management",
        "degree" : "Diplom-Informatiker",
        "dates" :  "2001-2005",
        "location" : "Fachhochschule Darmstadt"  
        //url: 
       },
       { 
        "name" : "Commerce and Computer Science",
        "degree" : "Certificate for business",
        "dates" :  "1997-1999",
        "location" :  "Vienna Business College"
        //url: 
       }

    ]
  }


var uni =0;
function displayEdu() {
  for (uni in edu.unis) 
  {
    // create new div for edu experience
    $("#education").append(HTMLschoolStart);
    // concat name of uni and degree 
    var formattedEduName = HTMLschoolName.replace("%data%", edu.unis[uni].name);
    var formattedEduDegree = HTMLschoolDegree.replace("%data%", edu.unis[uni].degree);
    var formattedEduNameDegree = formattedEduName+formattedEduDegree;    
    $(".education-entry:last").append(formattedEduNameDegree);

    var formattedEduDates = HTMLschoolDates.replace("%data%",edu.unis[uni].dates);
    $(".education-entry:last").append(formattedEduDates);
    var formattedEduLocation = HTMLschoolLocation.replace("%data%", edu.unis[uni].location); 
    $(".education-entry:last").append(formattedEduLocation);

  } 
}

displayEdu();




var online = {

        "courses":[
       { 
          "title" :"Front-end webdevelopment (Object-Oriented JavaScript, jQuery, JSON, node.js, gulp.js, Grunt, responsive design, performance optimisation)",
          "school" :"Udacity",
          "date" : "2015-16",
		  "location" : ""
          //"url" : ""          
      },
      { 
          "title":"R programming",
          "school" : "Coursera",
          "date" : "2014",
		  "location" : ""
          //"url" : ""          
      },
      {
          "title" : "How Viruses Cause Disease",
          "school" : "Coursera",
          "date" : "2014",
		  "location" : ""
          //"url" : ""
      },
      {
          "title" : "Genes and the Human Condition (From Behavior to Biotechnology)",
          "school" : "Cousera",
          "date" : "2013",
		  "location" : ""
          //"url" : ""
      },
      {
          "title" : "Virology I - How Viruses Work",
          "school" : "Coursera",
          "date" : "2013",
		  "location" : ""
          //"url" : ""
      },
      {
          "title" : "Case-Based Introduction to Biostatistics",
          "school" : "Coursera",
          "date" : "2013",
		  "location" : ""
          //"url" : ""
      },
      {
          "title" : "Vaccine Trials - Methods and Best Practices",
          "school" : "Coursera",
          "date" : "2013",
		  "location" : ""
          //"url" : ""
      }
  ]
}



function displayCourses() {
    $(".education-entry:last").append(HTMLonlineClasses);    
    for (course in online.courses){
      
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.courses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",online.courses[course].school);
    var formattedOnlineTitleSchool = formattedOnlineTitle+formattedOnlineSchool;    // concat 
    $(".education-entry:last").append(formattedOnlineTitleSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.courses[course].date);
    $(".education-entry:last").append(formattedOnlineDates);
   }
       
  } 

displayCourses();



function displayMap() {

     $("#mapDiv").append(googleMap);

}
displayMap();



function locationizer(work_obj) {

  var locationArray = [];

  for (job in work_obj.jobs) {
      var newLocation = work_obj.jobs[job].location;
      locationArray.push(newLocation);
  } 
  return locationArray;

}

console.log(locationizer(work));


function inName(name) {

    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name [0] + " " + name[1];
    
    inName ("margit mikula") === ("Margit MIKULA"); 

}


//$("#main").append(internationalizeButton);

formattedbioinName = inName(bio.name);
var formattedName = HTMLheaderName.replace("%data%", formattedbioinName);
   // $("#header").prepend(formattedName);



$(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;

  logClicks(x,y);  
});

function letsconnect() {

    $("#lets-connect").prepend();
}    
letsconnect(); 