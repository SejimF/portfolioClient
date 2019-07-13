var projects = [];
var projects_container = document.getElementById("projects");

setProjects();

function addToProjectsToHTML() {
    
    
    for (var i = 0; i < projects.length; i++) {
        addProjectCard(projects[i].project_image_path, projects[i].project_name, projects[i].project_desc, projects[i].project_url);
    }
}


function addProjectCard(proj_image_path, proj_name, proj_desc, proj_url) {

//creating project card and append it in container

var project_card = document.createElement("DIV");
project_card.classList.add("project_card");
projects_container.appendChild(project_card);

// creating project image path div , adding img tag inside it and append to card div

var project_image = document.createElement("DIV");
project_image.classList.add("project_image");
project_card.appendChild(project_image);

var proj_img = document.createElement("IMG");
proj_img.src = proj_image_path;
project_image.appendChild(proj_img);


 //creating project_info div and adding it to the container

 var project_info = document.createElement("DIV");
 project_info.classList.add("project_info");
 project_card.appendChild(project_info);

 //creating span project_name , paragraph and project url and adding them;

 var project_name = document.createElement("SPAN");
 project_name.classList.add("project_name");

 var project_descriptione = document.createElement("P");
 var div_url = document.createElement("DIV");
//  var expand = document.createElement("SPAN");
 var project_url = document.createElement("A");

 project_name.innerText = proj_name;
 project_descriptione.innerText = proj_desc;
//  expand.innerText = proj_name;
//  expand.classList.add("expand");
 project_url.target = "_blank";
 project_url.href = proj_url;
 project_url.classList.add("project_link");
 project_url.innerText = language.projectsLink;

 project_info.appendChild(project_name);
 project_info.appendChild(project_descriptione);
//  project_info.appendChild(expand);
 div_url.appendChild(project_url);
 project_info.appendChild(div_url);


}

function setProjects() {
    projects = language.projects;
    addToProjectsToHTML();
 }