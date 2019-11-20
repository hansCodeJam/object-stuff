function getFirstName(person) {
  return person[Object.keys(person)[0]]
}

function getLastName(person) {
  return person[Object.keys(person)[1]]
}

function getFullName(person) {
  return `${getFirstName(person)} ${getLastName(person)}` 
}

function setFirstName(person, name) {
  return person.firstName = name;
}

function setAge(person, age) {
  return person.age = age;
}

function giveBirthday(person) {
  if(person.age === undefined){
    return person.age = 1;
  } else {
    return person.age = person.age + 1;
  }
  
}

function marry(person1, person2) {
  person1.married = true 
  person2.married = true 
  // return person1[Object.keys(person1)[1]] = person2[Object.keys(person2[1])];
  return person1.spouseName = `${getFullName(person1)}`, person2.spouseName = `${getFullName(person2)}`
}

function divorce(person1, person2) {
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
} 