// CODE here for your Lambda Classes

// Person class
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

// Instructor class
class Instructor extends Person {
  constructor(attributes) {
    super(attributes);

    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`;
  }
}

// Student class
class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }

  listsSubjects(subjects) {
    let favSubjects = subjects.map(subject => {
      return `Favorite Subject: ${subject}`;
    });
    return JSON.stringify(favSubjects);
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

// Project manager class
class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}`;
  }
}

// Instructor objects
const john = new Instructor({
  name: 'John',
  age: 31,
  location: 'Boston',
  specialty: 'Redux',
  favLanguage: 'React',
  catchPhrase: "Always remember: you're unique, just like everyone else."
});

const jane = new Instructor({
  name: 'Jane',
  age: 25,
  location: 'Miami',
  specialty: 'Node.js',
  favLanguage: 'Javascript',
  catchPhrase: 'Cheer up, the worst is yet to come.'
});

// Student objects
const jeff = new Student({
  name: 'Jeff',
  age: 34,
  location: 'Elmira',
  previousBackground: 'Tech Sales Associate',
  className: 'WEB20',
  favSubjects: ['HTML', 'CSS', 'Javascript']
});

const brad = new Student({
  name: 'Brad',
  age: 22,
  location: 'San Francisco',
  previousBackground: 'Construction',
  className: 'WEB19',
  favSubjects: ['Python', 'Node.js', 'Express.js']
});

// Project mangagers
const beth = new ProjectManager({
  name: 'Beth',
  age: 25,
  location: 'Philadelphia',
  specialty: 'Redux',
  favLanguage: 'React',
  catchPhrase:
    "I stopped fighting my inner demons, we're on the same side now.",
  gradClassName: 'WEB1',
  favInstructor: 'Jane'
});

const chris = new ProjectManager({
  name: 'Chris',
  age: 26,
  location: 'Detroit',
  specialty: 'Django',
  favLanguage: 'Python',
  catchPhrase: 'The more people I meet, the more I like my dog.',
  gradClassName: 'WEB2',
  favInstructor: 'John'
});

const [...array] = jeff.favSubjects;

console.log(chris.specialty);
console.log(john.speak());
console.log(john.demo(brad.favSubjects[2]));
console.log(jane.grade(jeff.name, jeff.favSubjects[1]));
console.log(jeff.listsSubjects(array));
console.log(brad.PRAssignment(brad.favSubjects[0]));
console.log(brad.sprintChallenge(brad.favSubjects[1]));
console.log(beth.standUp('WEB20_sprint3'));
console.log(chris.debugsCode(jeff.name, jeff.favSubjects[2]));
