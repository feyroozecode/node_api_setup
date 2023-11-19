import { User } from "./user.model";

export class AppUser extends User {

    constructor(
        public id,
        public userName,
        public lastName,
        public age,
        public email,
        public password,
        public role
    ) {
        super(userName, lastName, age)
        this.id = id;
        this.email = email;
        this.password = password;
        this.age = age;
        this.userName = userName;
        this.lastName = lastName;
    }
}