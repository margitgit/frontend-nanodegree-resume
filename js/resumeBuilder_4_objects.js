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
      "location":"La Hulpe/Brussels - BELGIUM"
   
   },
   "welcomeMessage":"",
   "skills":[  
      "Statistics (R, General Linear Model, Mixed Models)", "Front-end development (HTML, CSS, JavaScript)"
   ],
   "bioPic":"images/mm.jpg",
   //"display":"display()"
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
         "employer":"King's College London",
         "title":"Data Scientist",
         "dates":"2011-2015",
         "description":"The work consisted of three parts (1) analysis of brain images from Magnetic Resonance Imaging, (2) analysis of RNA data from blood samples, and (3) analysis of protein data from blood samples. By combining these data with cognitive performance scores I predicted the individual cognitive decline slope in patients with Alzheimer's disease. I dealt with a number of statistical techniques such as Descriptive Statistics, charts and graphs, the Normal Distribution, the t-distribution, skewed distributions, detecting and removing outliers, correlation and regression, and modelling mixed effect models with R. I am very familiar with the Weka collection of machine learning algorithms for data mining tasks. I applied the algorithms directly to my datasets. I used the R statistical computing software and the Weka toolsuite for data pre-processing, classification, regression, and visualization." 
      },
      {  
         //"logo_url":"", 
         "employer":"Katholike Universiteit Leuven",
         "title":"Computational Modelling for Tissue engineering",
         "dates":"2008-2009",
         "description":"Software (C++) for mimicking cell behaviour (attachment, repulsion)"
      },
      {  
         //"logo_url":"",
         "employer":"Vrije Universiteit Brussel",
         "title":"Computational Modelling for virtual representation of the human body",
         "dates":"2007-2008",
         "description":"Image annotation ontologies (Java, XML) for enabling collaboration between medical staff and help inspectors better highlight specific conditions"
      },
      {  
         //"logo_url":"",
         "employer":"University of Cologne",
         "title":"Computational Modelling with bioinformatics application",
         "dates":"2005-2006",
         "description":"CUPE Metabolic Pathway Editor (C++)"
      },
      {  
         //"logo_url":"",
         "employer":"3 Vienna",
         "title":"Test Manager",
         "dates":"2002-2003",
         "description":"Testing Strategy for mobile phone apps (Java)"
      },
      {  
         //"logo_url":"",
         "employer":"WSM-WebstrategyManagement",
         "title":"Founder",
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
       },
       { 
        "name" : "Cognitive and Decision Sciences",
        "degree" : "MSc",
        "dates" :  "2009-2010",
        "location" :  "University College London"
       },
       { 
        "name" : "Bioinformatics",
        "degree" : "MSc",
        "dates" :  "2005-2006",
        "location" :  "University of Cologene"
       },
       { 
        "name" : "Computer Science, Communication-, and Information Management",
        "degree" : "Diplom-Informatiker",
        "dates" :  "2001-2005",
        "location" : "Fachhochschule Darmstadt"  
       },
       { 
        "name" : "Commerce and Computer Science",
        "degree" : "Certificate for business",
        "dates" :  "1997-1999",
        "location" :  "Vienna Business College"
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
          "title" : "Front-end webdevelopment",
          "school" : "Udacity",
          "date" : "2015/16",
          "url" : ""          
      },

      { 
          "title" : "R programming",
          "school" : "Coursera",
          "date" : "2014",
          "url" : ""          
      },
      {
          "title" : "How Viruses Cause Disease",
          "school" : "Coursera",
          "date" : "2014",
          "url" : ""
      },
      {
          "title" : "Genes and the Human Condition (From Behavior to Biotechnology)",
          "school" : "Cousera",
          "date" : "2013",
          "url" : ""
      },
      {
          "title" : "Virology I - How Viruses Work",
          "school" : "Coursera",
          "date" : "2013",
          "url" : ""
      },
      {
          "title" : "Case-Based Introduction to Biostatistics",
          "school" : "Coursera",
          "date" : "2013",
          "url" : ""
      },
      {
          "title" : "Vaccine Trials - Methods and Best Practices",
          "school" : "Coursera",
          "date" : "2013",
          "url" : ""
      },
      {   "title" : "",
          "school" : "",
          "date" : "",
          "url" : ""
      },
      {

          "title" : "",
          "school" : "",
          "date" : "",
          "url" : ""
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}

   ]
}

var course =0;
function displayCourses() {
  for (course in online.courses) 
  {
    // create new div for online experience
    $(".education-entry:last").append(HTMLonlineClasses);    
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.courses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.courses[course].school);
    var formattedOnlineTitleSchool = formattedOnlineTitle+formattedOnlineSchool;    // concat 
    $(".education-entry:last").append(formattedOnlineTitleSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.courses[course].date);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", online.courses[course].url);
    (".education-entry:last").append(formattedOnlineUrl);
    
  } 
}

displayCourses();


