
var skills = [{skill_name: "html", skill_rate: 4},
{skill_name: "css", skill_rate: 4},
{skill_name: "javaScript", skill_rate: 3},
{skill_name: "angular", skill_rate: 3},
{skill_name: "nodeJS", skill_rate: 3},
{skill_name: "mongoDB", skill_rate: 4} ];

for (var i = 0; i < skills.length; i++) {

    addStar(skills[i].skill_name, skills[i]);

    
}

function addStar(skillName, skillsArray) {

    for(var i = 0; i < skillsArray.skill_rate; i++) {
        var element = document.getElementById(skillName);
        // var textnode = document.createTextNode("*");
        var image = document.createElement("IMG");
        image.src = "../public/starts.svg";
        element.appendChild(image);
    }
}