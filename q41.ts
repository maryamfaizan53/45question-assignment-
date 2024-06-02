//41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let Magicians : string[] = ["Harry","John","Melma","Daisy"];
function show_magicians_(magician:string[]){
    magician.forEach(Element =>{
        console.log(Element);

    })
        
};
show_magicians(Magicians);
