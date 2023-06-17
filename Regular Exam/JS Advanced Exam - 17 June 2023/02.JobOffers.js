class JobOffers {
  constructor(employer, possition) {
    this.employer = employer;
    this.possition = possition;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    if (this.jobCandidates.length === 0) {
      candidates.forEach((element) => {
        let temp = element.split("-");
        this.jobCandidates.push({
          name: temp[0],
          education: temp[1],
          yearsExperience: Number(temp[2]),
        });
      });
    }
    // console.log(candidateArgument);
    let result = [];
    this.jobCandidates.forEach((x) => {
      result.push(x.name);
    });
    let output = result.join(", ");
    return `You successfully added candidates: ${output}.`;
  }
  jobOffer(chosenPerson) {
    let candidateArgument = chosenPerson.split("-");
    let index = undefined;
    this.jobCandidates.forEach((x, i) => {
      if (x.name === candidateArgument[0]) {
        index = i;
      }
    });

    if (
      this.jobCandidates.findIndex(
        (obj) => obj.name === candidateArgument[0]
      ) === -1
    ) {
      throw new Error(`${candidateArgument[0]} is not in the candidates list!`);
    }

    if (
      this.jobCandidates.findIndex(
        (obj) => obj.yearsExperience > candidateArgument[1]
      ) === -1
    ) {
      throw new Error(
        `${candidateArgument[0]} does not have enough experience as ${this.position}, minimum requirement is ${this.jobCandidates[index].yearsExperience} years.`
      );
    }

    return `Welcome aboard, our newest employee is ${candidateArgument[0]}."`;
  }

  salaryBonus(name) {}
  candidatesDatabase() {}
}

// Input 1
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(
  Jobs.jobApplication([
    "John Doe-Bachelor-10",
    "Peter Parker-Master-5",
    "Daniel Jones- Bachelor-18",
  ])
);

console.log("======================");

// Input 2
let Jobs2 = new JobOffers("Google", "Strategy Analyst");
console.log(
  Jobs2.jobApplication([
    "John Doe-Bachelor-10",
    "Peter Parker-Master-5",
    "Daniel Jones- Bachelor-18",
  ])
);
console.log(Jobs2.jobOffer("John Doe-12"));
console.log(Jobs2.jobOffer("Peter Parker-4"));
console.log(Jobs2.jobOffer("John Jones-8"));
// OUTPUT 2
// You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
// Welcome aboard, our newest employee is John Doe.
// Welcome aboard, our newest employee is Peter Parker.
// Uncaught Error Error: John Jones is not in the candidates list!
