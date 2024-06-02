//16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.

let  Dost_ : string[] = ["Inaya", "Safa","Huda"];
//let canNotcomming : string = "safa";
//console.log(`"${canNotcomming} not comming today"`);
//replace the guest
//let newguests : string = "faizan";
//Dost_[Dost_.indexOf(canNotcomming)] = newguests;
//Dost[Dost.indexOf(canNot)] = newguest;
//Dost_.forEach(Dost_ =>{
//console.log(`dear ${Dost_}, would you like to join me for dinner`)});
console.log(` "Dear ${guests}, We are now inviting some more peoples with us"`);
Dost_.unshift("Maryam");
guests.splice(guests.length/2,0,"Rida");
guests.push("Ali");
guests.forEach(guest =>{
    console.log(`"Hey ${guest}, Would You like to join me for dinner"`)
}) 