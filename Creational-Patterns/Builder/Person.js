class Person{
    constructor(builder){
        this.name = builder.name;
        this.age = builder.age;
        this.isManager = builder.isManager;
        this.isEmployee = builder.isEmployee;
    }

    toString(){
        return JSON.stringify(this);
    }
}

module.exports = Person;