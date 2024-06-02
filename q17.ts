//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
//of your program.
//let  Dost1 : string[] = ["Inaya", "Safa","Huda"];
//console.log(`"${Dost1}, You all are invited for a dinner today."`)
//let canNot0 : string = "safa";
//console.log(`"${canNot0} not comming today"`);
//replace the guest
//let newguest1 : string = "faizan";
//Dost1[Dost1.indexOf(canNot0)] = newguest1;
//Dost1.forEach(Dost1 =>{
//console.log(`"Dear ${Dost1}, would you like to join me for dinner"`)});
let guests00 = ["Inaya", "Safa", "Huda"];


console.log (" Unfortunately , I can only able to invite two peoples for dinner");
while (guests00.length > 2) {
    let removedGuest = guests00.pop();
    console.log(`Sorry , ${removedGuest} , I cant invite you to dinner."`);
}
guests00.forEach(guests00 => {
    console.log(`"Dear ${guests00}, You are still invited for dinner."`)});
guests00.splice(0,guests00.length);
console.log(guests00);
