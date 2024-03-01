const findTheOldest = function (people) {
  return people
    .map((person) => {
      const personCopy = { ...person };
      if (!('yearOfDeath' in personCopy)) {
        personCopy.yearOfDeath = new Date().getFullYear();
      }
      return {
        name: personCopy.name,
        age: personCopy.yearOfDeath - personCopy.yearOfBirth,
      };
    })
    .sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
