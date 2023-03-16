// Object Constructor
function User1(studentCode, password, firstName, lastName, age, faculty, role) {
    this.studentCode = studentCode;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.faculty = faculty;
    this.role = role;
}

const user1 = new User1('2020605518', '123', 'Hung', 'Truong', 17, 'information technology', ['admin', 'user']);

console.log(user1);


// Class
class User2 {
    constructor(studentCode, password, firstName, lastName, age, faculty, role) {
        this.studentCode = studentCode;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.faculty = faculty;
        this.role = role;
    }
}

const user2 = new User2('2020605518', '123', 'Hung', 'Truong', 17, 'information technology', ['admin', 'user']);

console.log(user2);