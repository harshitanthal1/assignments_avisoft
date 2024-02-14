const student = {
    name: "John Doe",
    age: 18,
    grade: 12,
    subjects: ["Math", "Science", "History"]
  };
  
  console.log("Student Object:", student);

  function displayInfo(message) {
    console.log(message);
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
  
  const boundDisplayInfo = displayInfo.bind(student);
  boundDisplayInfo("Student Information:");
  
  displayInfo.apply(student, ["Student Information:"]);
  displayInfo.call(student, "Student Information:");

  function processSubjects(subjects, callback) {
    subjects.forEach(callback);
  }
  
  function logSubject(subject) {
    console.log("Subject:", subject);
  }
  
  processSubjects(student.subjects, logSubject);

  function doubleGrades(student) {
    const doubledGrades = student.subjects.map(subject => ({
      subject,
      grade: student.grade * 2
    }));
    console.log("Original and Modified Grades:");
    console.log(doubledGrades);
  }
  
  function passingSubjects(student) {
    const passingSubjects = student.subjects.filter(subject => student.grade >= 70);
    console.log("Subjects with Grades >= 70:");
    console.log(passingSubjects);
  }
  
  doubleGrades(student);
  passingSubjects(student);
  