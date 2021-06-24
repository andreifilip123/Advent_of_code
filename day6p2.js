let content = document.querySelector("pre").textContent.trim().split("\n\n");
let commmonQuestionsPerGroups = content.map((item) => {
  const persons = item.split("\n");
  let questionsAnsweredByGroup = persons.reduce((acc, person) => {
    person.split("").forEach((question) => {
      if (!acc[question])
        acc[question] = 0
      acc[question]++;
    });
    return acc;
  }, {});
  let commmonQuestions = Object.keys(questionsAnsweredByGroup).filter(key => questionsAnsweredByGroup[key] === persons.length)
  return commmonQuestions.map(question => question.length)
})
let total = commmonQuestionsPerGroups.reduce((acc, curr) => acc + curr, 0);
console.log(total)