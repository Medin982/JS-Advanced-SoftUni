function Person (firstName, lastName) {
    let res = {
        firstName, 
        lastName
    };
    Object.defineProperty(res, "fullName", {
        get(){
            return this.firstName + " " + this.lastName;
        },
        set(value) {
            let parts = value.split(" ");
            if (parts.length !== 2) {
                throw new Error("FullName is not valid.");
            }

            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    });

    return res;
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName);