"use strict";
let Guest_List = ['Imran Khan', 'Nawaz Shareef', 'Asif Ali Zardari'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Khan Tessori';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr.${absent_Guest} is not comming to the party.`);
