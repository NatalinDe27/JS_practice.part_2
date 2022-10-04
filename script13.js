// Создать цепочку классов для создания объектов шиншилл.
//     Млекопитающее => грызуны => шиншилловые => шиншиллы
// В каждом классе должны быть методы или свойства которые присущи данной ступени наследования.
//     Если есть желание цепочка может быть другая(машины или т.д. главное чтоб была указанная глубина наследования)

class People {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting () {
        console.log(`Hello, I\`m ${this.firstName} ${this.lastName}.`)
    }
}

class Freelance extends People {
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
