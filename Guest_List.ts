let Guest_List: string[]= ['Imran Khan','Nawaz Shareef','Asif Ali Zardari'];

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i]+ ',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
}

let absent_Guest: string = 'Imran Khan';
let new_Guest: string = 'Kamran Khan Tessori';
Guest_List[0] = new_Guest;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i]+ ',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
}

console.log(`Mr.${absent_Guest} is not comming to the party.`)