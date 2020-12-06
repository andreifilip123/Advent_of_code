let content = document.querySelector("pre").textContent.trim().split("\n\n");
let groups = content.map((item) => {
  const persons = item.split("\n");
  let questions = persons.reduce((acc, curr) => {
    let person = curr;
    person.split("").forEach((question) => (acc[question] = 1));
    return acc;
  }, {});
  return questions;
});
let questionsPerGroup = groups.map((group) => Object.keys(group).length);
let total = questionsPerGroup.reduce((acc, curr) => acc + curr, 0);
console.log(total)
