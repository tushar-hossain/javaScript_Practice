// Check Box Event Handling in Javascript

let skills = document.getElementsByName("skills");
let result = document.getElementById("selectskill");
let checkedSkills = [];

[...skills].forEach((skill) => {
  skill.addEventListener("change", function (e) {
    if (e.target.checked) {
      checkedSkills.push(e.target.value);
      outputSkills(result, checkedSkills);
    } else {
      let ind = checkedSkills.indexOf(e.target.value);

      checkedSkills.splice(ind, 1);
      outputSkills(result, checkedSkills);
    }
  });
});

function outputSkills(parent, skill) {
  let result = "";
  skill.forEach((skills) => {
    result += ` ${skills} `;
  });
  parent.innerHTML = result;
}
