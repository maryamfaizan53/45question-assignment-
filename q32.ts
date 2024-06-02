//32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
///• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_user : string[] =["HayA","mAya","HiRa","Ali","walI"];
let new_users : string[]=["HayA","Ali","kirat","Taha","ZAra"];
new_users.forEach(newusername =>{
    let user : string = newusername.toLowerCase();
    if(current_user.map(c_user=> c_user.toLowerCase()).includes(user))
    {
        console.log(`The username ${newusername} is not availble. Please write a different username. `);
    }

else{
    console.log(`"The username ${newusername} is availble."`);
}});