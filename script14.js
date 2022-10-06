// Создать класс(можно взять с прошлого дз) и добавить ему приватных полей (например пол шиншиллы явно должен быть защищен от изменения после создания) и статических полей ( например адрес шиншиллы, потому что например все инстансы будут жить под одной крышей такую информацию можно вынести на уровень класса)


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    #nationality = 'Ukrainian';
    getNationality() {
        return this.#nationality;
    }
    greeting () {
        console.log(`Hello, I\`m ${this.firstName} ${this.lastName}.`)
    }
    static printClassInfo(){
        console.log('Класс Person представляет человека.');
    }
}

class Freelance extends Person {
    constructor(firstName, lastName, philosophy) {
        super(firstName, lastName);
        this.philosophy = philosophy;
    }
    sayIdea () {
        console.log (`It\`s my main thing: ${this.philosophy}`)
    }

}

class Blogger extends Freelance {
    constructor(firstName, lastName, philosophy, channel) {
        super(firstName, lastName, philosophy);
        this.channel = channel;
    }
    static service = 'YouTube'
    #urlAddress = `https://www.youtube.com`;
    getUrlAddress() {
        return this.#urlAddress;
    }
    sayChannelNames () {
        console.log (`I\`m Blogger. My channel name\`s is '${this.channel}'.`)
    }

}

class ItBlogger extends Blogger {
    constructor(firstName, lastName, philosophy, channel, specialty) {
        super(firstName, lastName, philosophy, channel);
        this.specialty = specialty;
    }

    saySpecialty  () {
        console.log (`I tell about my experience with ${this.specialty}.`)
    }
}

let popularBlogger = new ItBlogger ('Eugene', 'Andrikanich', 'Live and work in your spare time!', 'Freelancer for life', 'IT, Front End' )

console.log(popularBlogger);

popularBlogger.greeting();
popularBlogger.sayIdea();
popularBlogger.sayChannelNames();
popularBlogger.saySpecialty();
console.log(Blogger.service); //static
Person.printClassInfo (); //static
// console.log(popularBlogger.#getUrlAddress); // error, because Private
console.log(popularBlogger.getUrlAddress()); //private
console.log(popularBlogger.getNationality ()); //private

