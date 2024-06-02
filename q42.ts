//42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician : string[] = ["Harry","John","Melma","Daisy"];
function make_great1(magicianarray:string[]){
    for (let i =0;i < magicianarray.length; i++){
      magician[i] = "The Great " + magicianarray[i];
    }

}
function show_magicians1(magician:string[]){
    magician.forEach(element =>{
        console.log(element);

    })   
};
make_great1(magician);
show_magicians1(magician);

