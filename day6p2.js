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
let sameQuestionForGroups = groups.map((groupQuestions, index) => {
  return Object.keys(groupQuestions).reduce((acc, curr) => {
    let currentGroup = content[index]
    let persons = currentGroup.split('\n')
    if (persons.every(person => person.indexOf(curr) !== -1))
      acc[curr] = 1
    return acc
  }, {})
})
let questionsPerGroup = sameQuestionForGroups.map((group) => Object.keys(group).length);
let total = questionsPerGroup.reduce((acc, curr) => acc + curr, 0);
console.log(total)
