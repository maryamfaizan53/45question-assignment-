//43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician2 : string[] = ["Harry","John","Melma","Daisy"];
function copyarray(arr:string[]){
    return[...arr]

}
function make_great(magicianarray:string[]){
    for (let i =0;i < magicianarray.length; i++){
      magicianarray [i] = "The Great " + magicianarray[i];
    }

}
function show_magicians(magician:string[]){
    magician.forEach(element =>{
        console.log(element);

    })   
};
const copymagicianArray=copyarray(magician2);
make_great(copymagicianArray);
console.log("This is my original array:");
show_magicians(magician2);
console.log("This is my modified array:");
show_magicians(copymagicianArray);

