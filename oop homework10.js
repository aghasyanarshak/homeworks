// homework 10
// task 1
// Create an Author class and a Book class.
class Author {
    constructor(name,surname, email, gender){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.gender = gender;
    }
    get name(){
        return this._name;
    }
    set name(v){
         this._name = v;
    }
    get surname(){
        return this._surname;
    }
    set surname(v){
         this._surname = v;
    }
    get email(){
        return this._email;
    }
    set email(v){
         this._email = v;
    }
    get gender(){
        return this._gender;
    }
    set gender(v){
         this._gender = v;
    }
    toString(){
        return `My favorite author is ${this.name} ${this.surname}`;
    }
    
}
let author = new Author('Den','Braun','denbraun@gmail.com','male');
console.log(author);
console.log(author.toString());

class Book {
    constructor(title, author, price, quantity){
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
    get title(){
        return this._title;

    }
    set title(v){
         this._title = v;
    }
    get author(){
        return this._author;

    }
    set author(v){
         this._author = v;
    }
    get price(){
        return this._price;

    }
    set price(v){
         this._price = v;
    }
    get quantity(){
        return this._quantity;

    }
    set quantity(v){
         this._quantity = v;
    }
    getProfit(){
        return this.price * this.quantity;
    }
    toString(){
        return `the price of this book is ${this.price}$`;
    }
    
}
let book = new Book('Inferno','Den Braun',25,50);

console.log(book.getProfit());
console.log(book.toString());


// task2
// Create an Account class. Account should have: id, name, balance.
class Account {
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
    #id = Math.floor(Math.random()*10)
    getId(){
        return this.#id
    }
    get name(){
        return this._name;
    }
    set name(v){
         this._name = v;
    }
    get balance(){
        return this._balance;
    }
    set balance(v){
         this._balance = v;
    }
    credit(amount){
        return  this.balance +=  amount;
    }
    debit(amount){
        if(amount < this.balance){
            return this.balance -= amount;
        }else{
            throw new Error('Amount exceeded balance.') ;
        }
    }
    transferTo(anotherAccount, amount){

        if(amount < this.balance){
            if(anotherAccount === elseaccount.getIdElseAccount()) {
                let anootheramount = elseaccount.credit(amount);
                let ouramount = this.balance -= amount;
                return `Another amount balance is ${anootheramount} and our amount balance is ${ouramount}` ;
            }
        }else{
            throw new Error('Amount exceeded balance.') ;
        }
    }
    static identifyAccounts(accountFirst, accountSecond){
        if(accountFirst===accountSecond) {
            return 'they are the same';
        } else {
            return 'they are not the same';
        }
    }
    
}
class ElseAccount {
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
    #id = Math.floor(Math.random()*10)
    getIdElseAccount(){
        return this.#id
    }
    get name(){
        return this._name;
    }
    set name(v){
         this._name = v;
    }
    get balance(){
        return this._balance;
    }
    set balance(v){
         this._balance = v;
    }
    credit(amount){
        return  this.balance +=  amount;
    }
    
}
let account = new Account('my',700);

let accountFirst = account.getId();

let elseaccount = new ElseAccount('other', 900);

let accountSecond = elseaccount.getIdElseAccount();

console.log(Account.identifyAccounts(accountFirst,accountSecond));

console.log(account.transferTo(accountSecond, 500));


// task 3
// Write classes: Person, Student, Staff.

// Student passExam metod@ kisat exav
class Person{
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(v){
         this._firstName = v;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(v){
         this._lastName = v;
    }
    get gender(){
        return this._gender;
    }
    set gender(v){
         this._gender = v;
    }
    get age(){
        return this._age;
    }
    set age(v){
         this._age = v;
    }
    toString(){
        return `this person is ${this.firstName} ${this.lastName}`;
    }
}


class Student extends Person{
    constructor(programs,year, fee,...args){
        super(...args);
        this.year = year;
        this.fee = fee;
        this.programs = programs;
    }
    get year(){
        return this._year;
    }
    set year(v){
         this._year = v;
    }
    get fee(){
        return this._fee;
    }
    set fee(v){
         this._fee = v;
    }
    get programs(){
        return this._programs;
    }
    set programs(v){
         this._programs = v;
    }
    
    passExam(program, grade){
        if(grade>=50){
            this.year++;
        }
    }
    toString(){
        return `${this.firstName} ${this.lastName} passed all exams`;
    }
}
class Teacher extends Person{
    constructor(program,pay,...args){
        super(...args);
        this.pay = pay;
        this.program = program;
    }
    get pay(){
        return this._pay;
    }
    set pay(v){
         this._pay = v;
    }
    get program(){
        return this._program;
    }
    set program(v){
         this._program = v;
    }
    toString(){
        return `for this ${this.program} cost is ${this.pay}$`;
    }

}