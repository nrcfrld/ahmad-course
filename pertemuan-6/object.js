const user = {
    name : "Bambang",
    email : "bambang@mail.com",
    age : 20,
    isAdult : true,
    sayHello : function(){
        // Halo nama saya adalah Bambang
        console.log("Halo nama saya adalah " + this.name);
    },
    address : [
        {
            label : "Rumah",
            street : "Jl. Raya No. 123",
            city : "Jakarta",
            country : "Indonesia"
        },
        {
            label : "Kantor",
            street : "Jl. Sudirman No. 123",
            city : "Jakarta",
            country : "Indonesia"
        }
    ],
    hobbies : ["membaca", "menulis", "berkebun"]
}

const newUser = {...user};
newUser.name = "Dudung";

const newUser2 = {...newUser};
newUser2.name = "Budi";

// user.name = "Bambang Setiawan";

// console.log(user);

// user.sayHello();

newUser.sayHello();
newUser2.sayHello();