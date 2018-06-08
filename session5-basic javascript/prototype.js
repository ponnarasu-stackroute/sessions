function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname =  lastname;
}

Person.prototype.nationality ="Indian";

let jp = new Person("jayaprasad","Kumpati");

console.log(jp.firstname);
console.log(jp.nationality);