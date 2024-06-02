//30.	Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//otherwise print a generic greeting, such as hello eric, thankyou for logging in again,
let user_Names : string[] = ["Inaya","Safa","Huda","Admin","Maira"];
for( let i = 0;i < user_Names.length;i++){
    if (user_Names[i]==="Admin"){
    console.log("Hello admin, would you like to see a status report?");}
else{
    console.log(`Hello ${user_Names[i]} thankyou for logging in again,`)
}
}
