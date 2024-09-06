//skills
var skills = [
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "express.js",
  "MongoDB",
  "MySQL",
  "AWS",
  "Docker",
  "Git",
];
var skillsimg = [
  "python.png",
  "java.png",
  "html5.png",
  "css3.png",
  "js.png",
  "react.png",
  "nodejs.png",
  "express.png",
  "mongodb.png",
  "mysql.png",
  "aws.png",
  "docker.png",
  "git.png",
];

var skills_level = ["90%", "80%", "95%", "95%", "90%", "70%", "80%", "70%", "60%", "75%", "30%", "30%", "50%"];

//education
var education_degree = [
  "B.Tech Information Technology ",
  "Higher Secondary School",
  "Secondary School",
];
var education_school = [
  "St. Joseph's College Of Engineering",
  "St.Mary's Higher Secondary School",
  "St.Mary's Higher Secondary School",
];

var education_score = ["9.15", "83.67%", "88.6%"];
var education_score_type = ["CGPA", "Percentage", "Percentage"];

var education_year = ["2020 - 2024", "2019 - 2020", "2017 - 2018"];


//certificates
var certificates = [
  "PYTHON ESSENTIALS CERTIFICATION",
  "AI WORKSHOP COMPLETION CERTIFICATION",
  "WEB DEVELOPMENT BOOTCAMP CERTIFICATION",
  "AWS CERTIFIED CLOUD PRACTITIONER",
  "HTML CERTIFICATION",
  "CSS CERTIFICATION",
];

var certificates_school = [
  "Python Institute",
  "MyCaptain",
  "Udemy",
  "AWS Training and Certification",
  "Infosys Springboard",
  "Infosys Springboard",
];

var certificates_year = [
  "Jul 2021",
  "Aug 2021",
  "Jan 2023",
  "Aug 2024",
  "Jan 2023",
  "Jan 2023",
];

//interests
var interests = [
  "Reading",
  "Coding",
  "Music",
  "Game Development",
];

var interestsimg = [
  "book.jpg",
  "code.jpeg",
  "music.jpg",
  "game.jpeg",
];

//languages
var languages = [
  "English",
  "Tamil",
];

var languages_level = [
  "Fluent",
  "Native",
];

var languages_letter = [
  "A",
  "&#2949",
];



//projects
var projects = [
  {
    name: "Bill Counter",
    description: "A restaurant billing application to create and manage bills from the customer orders.",
    link: "https://github.com/madheshkumar/Bill-Counter",
  },
  {
    name: "Text Emotion Detection",
    description: "A Machine Learning Model that can detect the emotion present in a phrase or " +
    "sentence developed with the help of Linear Support Vector Classifier Algorithm.",
    link: "https://github.com/madheshkumar/TextEmotionDetection",
  },
  {
    name: "Blog Website",
    description: "A Blog Website that can create and manage blog posts with the help of MongoDB " +
    "as the backend and EJS as the templating engine.",
    link: "https://github.com/madheshkumar/BlogWebsite",
  },
  {
    name: "Todo List",
    description: "A dynamic Todo List application that can create and manage todo lists with the help of " +
    "Node.js as the backend and EJS as the templating engine.",
    link: "https://github.com/madheshkumar/TodoList-v2",
  },
  {
    name: "ConnectNet",
    description: "A social media web application where people can connects with each other. People can share their posts and messages with their friends " +
    "with the help of Nodejs, Express.js, MySQL as the backend and React as the frontend.",
    link: "https://github.com/madheshkumar/connectnet",
  },
  {
    name: "Water Potability Detection",
    description: "A Machine Learning Model that can detect the potability of water based on the " +
    "physical and chemical properties of the water.",
    link: "https://github.com/madheshkumar/Water_potability_prediction",
  },
  {
    name: "Diabetic Retinopathy Detection with Vgg-19 and GAN Model",
    description: "A Machine Learning Model that can detect the Diabetic Retinopathy from the " +
    "fundus images of the eye with the help of Vgg-19 and generated synthetic fundus images of GAN Model.",
    link: "https://github.com/madheshkumar/Final-Year-Project",
  }
];




window.onload = function () {
  //render skills
  var container = document.getElementById("skills-container");
  skills.forEach(function (skill, index) {
    var skillElement = document.createElement("div");
    skillElement.classList.add("skill");
    var skillleft = document.createElement("div");
    skillleft.classList.add("skill-left");
    var skillright = document.createElement("div");
    skillright.classList.add("skill-right");

    var imgElement = document.createElement("img");
    imgElement.src = "images/skills/" + skillsimg[index];
    imgElement.classList.add("skill-img");
    skillleft.appendChild(imgElement);

    
    var textElement = document.createElement("span");
    textElement.textContent = skill;
    skillleft.appendChild(textElement);

    var progressElement = document.createElement("div");
    progressElement.classList.add("progress");
    var progressBarElement = document.createElement("div");
    progressBarElement.classList.add("progress-bar");

    var level = skills_level[index];
    progressBarElement.style.width = level;
    progressElement.appendChild(progressBarElement);
    skillright.appendChild(progressElement);

    skillElement.appendChild(skillleft);
    skillElement.appendChild(skillright);
    container.appendChild(skillElement);
  });

  //render education
  var container = document.getElementById("education-container");
  for (var i = 0; i < education_degree.length; i++) {
    var educationElement = document.createElement("div");
    educationElement.classList.add("education");
    var education_left = document.createElement("div");
    education_left.classList.add("education-left");
    var education_right = document.createElement("div");
    education_right.classList.add("education-right");

    var degreeElement = document.createElement("h3");
    degreeElement.textContent = education_degree[i];
    education_left.appendChild(degreeElement);

    var schoolElement = document.createElement("p");
    schoolElement.textContent = education_school[i];
    education_left.appendChild(schoolElement);

    var yearElement = document.createElement("p");
    yearElement.textContent = education_year[i];
    education_left.appendChild(yearElement);

    var score = document.createElement("div");
    score.classList.add("score");

    var scoreTypeElement = document.createElement("p");
    scoreTypeElement.textContent = education_score_type[i];
    score.appendChild(scoreTypeElement);

    var scoreElement = document.createElement("p");
    scoreElement.textContent = education_score[i];
    score.appendChild(scoreElement);

    education_right.appendChild(score);

    educationElement.appendChild(education_left);
    educationElement.appendChild(education_right);
    container.appendChild(educationElement);
    
  }

  //render certificates
  var container = document.getElementById("certifications-container");
  for (var i = 0; i < certificates.length; i++) {
    var certificateElement = document.createElement("div");
    certificateElement.classList.add("certificate");
    var certificate_left = document.createElement("div");
    certificate_left.classList.add("certificate-left");
    var certificate_right = document.createElement("div");
    certificate_right.classList.add("certificate-right");

    var nameElement = document.createElement("h3");
    nameElement.textContent = certificates[i];
    certificate_left.appendChild(nameElement);

    var schoolElement = document.createElement("p");
    schoolElement.textContent = certificates_school[i];
    certificate_left.appendChild(schoolElement);

    var yearElement = document.createElement("p");
    yearElement.textContent = certificates_year[i];
    certificate_right.appendChild(yearElement);

    certificateElement.appendChild(certificate_left);
    certificateElement.appendChild(certificate_right);
    container.appendChild(certificateElement);
  }

  //render interests
  var container = document.getElementById("interests-container");

  interests.forEach(function (interest) {

    var interestElement = document.createElement("div");

    interestElement.classList.add("interest");
    interestElement.style.backgroundImage = "url('images/interests/" + interestsimg[interests.indexOf(interest)] + "')";
  
    var textElement = document.createElement("span");
    textElement.textContent = interest;

    interestElement.appendChild(textElement);
    container.appendChild(interestElement);
  });
  


  //render languages
  var container = document.getElementById("languages-container");
  languages.forEach(function (language) {
    var languageElement = document.createElement("div");
    languageElement.classList.add("language");
    var languageLetterElement = document.createElement("span");
    languageLetterElement.innerHTML = languages_letter[languages.indexOf(language)];
    languageElement.appendChild(languageLetterElement);
    var textElement = document.createElement("span");
    textElement.textContent = language;
    languageElement.appendChild(textElement);
    var levelElement = document.createElement("p");
    levelElement.textContent = languages_level[languages.indexOf(language)];
    languageElement.appendChild(levelElement);
    container.appendChild(languageElement);
  });

  //render projects
  var container = document.getElementById("projects-container");
  projects.forEach(function (project){
    var projectElement = document.createElement("div");
    projectElement.classList.add("project");
    var nameElement = document.createElement("h3");
    nameElement.textContent = project.name;
    projectElement.appendChild(nameElement);
    var descriptionElement = document.createElement("p");
    descriptionElement.textContent = project.description;
    projectElement.appendChild(descriptionElement);
    var linkElement = document.createElement("a");
    linkElement.href = project.link;
    linkElement.textContent = "View Project";
    projectElement.appendChild(linkElement);
    container.appendChild(projectElement);
  })
};
