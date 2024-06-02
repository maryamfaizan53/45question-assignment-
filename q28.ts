//28.	Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
let age : number = 15;
if (age <2){
    console.log("You are a baby.");
}
else if (age >= 2 && age < 4 ){
    console.log("You are a toddler.");
}
else if (age >=4 && age < 13){
    console.log("You are a kid.");
}
else if (age >=13 && age <20){
    console.log("You are a teen ager.");
}
else if (age >= 20 && age < 65){
    console.log("You are an adult.");
}
else {
    console.log("You are an elder");};

