// QUESTION 11
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
var FriendsNames1: string[] = ["Danial", "Hassan", "Ihtesham", "Awais"];
for (var i: number = 0; i < FriendsNames1.length; i++) {
    console.log(FriendsNames1[i]);
}
console.log("Question 11 End");
// QUESTION 12
// Greetings: Start with the array you used in Exercise 11, but instead of just
// printing each person’s name, print a message to them. The text of each message 
// should be the same, but each message should be personalized with the person’s 
//name.
var FriendsNames2: string[] = ["Danial", "Hassan", "Ihtesham", "Awais"];
for (var i: number = 0; i < FriendsNames2.length; i++) {
    console.log("Hello Dear Mr. ", FriendsNames2[0]);
    console.log("Hello Dear ", FriendsNames2[1]);
    console.log("Hello Mr.", FriendsNames2[2]);
    console.log("Hello", FriendsNames2[3]);
}
console.log("Question 12 End");
// Question 13
// Your Own Array: Think of your favorite mode of transportation, such as a 
// motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as 
// “I would like to own a Honda motorcycle.”
var MyCar: string[] = ["Black Color", "Good Fuel Average", "AC", "excellent Suspension"];
for (let i: number = 0; i < 1; i++) {
    console.log("I like", MyCar[0], "car with", MyCar[1], "an", MyCar[2], "and", MyCar[3]);
}
console.log("Question 13 End");
// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like 
// to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.

let DinnerInvite: string[] = ["Haseeb", "Muneeb", "Furqan"];
for (let i: number = 0; i < DinnerInvite.length; i++) {
    console.log("Dear Mr.", DinnerInvite[i], "You re invited to join us on a dinner",);
}
console.log("Question 14 End");
// Question 15
// Changing Guest List: You just heard that one of your guests can’t make the 
// dinner, so you need to send out a new set of invitations. You’ll have to think 
// of someone else to invite.

// Start with your program from Exercise 14. Add a print statement 
// at the end of your program stating the name of the guest who can’t make it.
let DinnerGuest: string[] = ["Haseeb", "Muneeb", "Furqan"];
for (let i: number = 0; i < 1; i++) {
    console.log("Announcement: Mr.", DinnerGuest[2], "Will not be the part of dinner");
}

// Modify your list, replacing the name of the guest who can’t m
// ake it with the name of the new person you are inviting.
let DinnerInvAdd: string[] = ["Haseeb", "Muneeb", "Furqan"]; {
    DinnerInvAdd.splice(3, 1, "Umar");
    console.log(DinnerInvAdd);
}
//Print a second set of invitation messages, one for each person who is 
//still in your list.
for (let i: number = 0; i < DinnerInvAdd.length; i++) {
    console.log("Announcement with Revision: Mr.", DinnerInvAdd[i], "You re invited to join us on a dinner",);
}
console.log("Question 15 End");
// QUESTION 16
// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.Start with your program from 
// Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.
let DinnerInvMore: string[] = ["Haseeb", "Muneeb", "Furqan"]; {
    DinnerInvMore.splice(2, 1, "Umar");
    console.log(DinnerInvMore);
}

for (let i: number = 0; i < DinnerInvMore.length; i++) {
    console.log("Announcement with Revision: Mr.", DinnerInvMore[i], "You re invited to join us on a dinner",);
}
console.log("WE HAVE A BIG TABLE ARRIVING SOON, AND WE WILL INVITE THREE MORE GUESTS");

let DinnerInvMore1: string[] = ["Abu-Bakar", "Hamza", "Ali"]; {
    DinnerInvMore1.unshift("Huzaifa");
    console.log(DinnerInvMore1);
}
for (let i: number = 0; i < DinnerInvMore1.length; i++) {
    console.log("Mr.", DinnerInvMore1[i], "You re invited to join us on a dinner",);
}
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let DinnerInvMore2: string[] = ["Haseeb", "Muneeb", "Furqan", "Umar"]; {
    DinnerInvMore2.splice(2, 0, "Huzaifa");
    console.log(DinnerInvMore2);
}
for (let i: number = 0; i < DinnerInvMore2.length; i++) {
    console.log("Mr.", DinnerInvMore2[i], "You re invited to join us on a dinner",);
}
let DinnerInvMore3: string[] = ["Shoaib", "Haseeb", "Muneeb", "Furqan", "Umar"]; {
    DinnerInvMore3.splice(5, 0, "Babar");
    console.log(DinnerInvMore3);
}
for (let i: number = 0; i < DinnerInvMore3.length; i++) {
    console.log("Mr.", DinnerInvMore3[i], "You re invited to join us on a dinner",);
}
console.log("Question 16 End");
//question 17
// Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message 
// saying that you can invite only two people for dinner.
let DinnerShrink: string[] = ["Shoaib", "Haseeb", "Muneeb", "Furqan", "Umar", "Babar"]; {

    console.log("I can invite only two persons for dinner as table is not arriving tonight");
}
// Remove guests from your list one at a time until only two names remain in your 
// list. Each time you pop a name from your list, print a message to that person 
// letting them know you’re sorry you can’t invite them to dinner.
let DinnerShrink1: string[] = ["Shoaib", "Haseeb", "Muneeb", "Furqan", "Umar", "Babar"];
for (let i: number = 5; i > 1; i--) {
    console.log("Mr.", DinnerShrink1[i], "We are sorry You're not invited for dinner");
    DinnerShrink1.pop();
}
console.log(DinnerShrink1);
//Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let j: number = 0; j < DinnerShrink1.length; j++) {
    console.log("Mr.", DinnerShrink1[j], "You're invited for dinner");
}
DinnerShrink1.shift();
DinnerShrink1.pop();
console.log("AN EMPTY LIST", DinnerShrink1);

console.log("Question 17 End");