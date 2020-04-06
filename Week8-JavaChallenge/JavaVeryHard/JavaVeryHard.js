class Person {
    constructor(name, job, age){ // Properites of the person 
        this.name = name;
        this.job = job;
        this.age = age;
    }
    fetchJob(){  // Method to console log Person name and their job 
        console.log(`${this.name} is a ${this.job}`);
    }
    exercise(){ // Method to console log Person favorite hobby
        console.log("I love Running long distance.");
    }
}

class Programmer extends Person{ // An extention to Person, with passing same methods and varibles 
    constructor(name, job, age, lang){
        super(name, job, age);
        this.language = [lang];
        this.busy = true;
    }
   
    completeTask(){ // Method that updates the busy property on that programmer to be false.
        this.busy = false;
    }

    acceptNewTask(){ // Method to update the busy property on the programmer status of busy 
        this.busy = true;
    };  
    offerNewTask(){ // Method for console.loging the user status of busy or not busy.
        if(this.busy === true){
            console.log(this.name + " can't accept any new tasks right now. ")              
        } else{
            console.log(this.name + " would love to take on a new responsibility. ")
        }
    };
    learnLanguage(addLang){ // Method for pushing into the array of the learnLanguage\
       return this.language.push(addLang);
    }
    listLanguage(){  // Method 
        console.log(this.language);
    }
    
}

let naven = new Programmer("naven kennedy", "Back End", 25, "Javascript");
naven.learnLanguage("Swift");
naven.learnLanguage("Go");
console.log(naven);
naven.listLanguage();

let roger = new Programmer("Roger Pattinson", "Front-end", 24, "C++")
console.log(steve);
roger.listLanguage();
roger.offerNewTask();
roger.completeTask();
roger.offerNewTask();

let paula = new Programmer("Paula Martinez", "App Dev", 22, "C#");

console.log(paula);
paula.learnLanguage("English");
console.log(paula);