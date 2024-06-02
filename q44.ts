//44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//let sandwich : string[]= ["chicken", "ketchup","cucumber","cabbage"];
function mySandwich(item:string[]){
    console.log('Making my sandwich with:');
   item.forEach(element => console.log("-" + element));
   console.log("Enjoying my sandwich !");

}
mySandwich(["chicken","Ketchup"]);
mySandwich(["cheese","bacon"]);
mySandwich(["Chocolate","honey"]);