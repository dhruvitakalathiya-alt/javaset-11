let DATA = "secret information";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data =",DATA);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "new value";
    }
}

 let student1 = new User ("dhruvi","dhruvi@gmail.com");
 let student2 = new User ("parth","dhruviparth@gmail.com");

 
 let teacher = new User ("mansi","dhruvimansi@gmail.com");

 let admin1 = new Admin();