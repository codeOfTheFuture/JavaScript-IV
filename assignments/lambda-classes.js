// CODE here for your Lambda Classes

// Person class
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
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
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
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
    subjects.forEach(subject => {
      console.log(`Favorite subject: ${subject}.`);
    });
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}.`);
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
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}
