/*
Count Character Frequencies

Scenario
A system needs to analyze a username and determine how many times each character appears.
Return an object containing the frequency of every character

*/

const characterFrequency = (str) =>{
    const frequency = {};

    for(const char of str){
        if (frequency[char]){// if the character is already in the object, we increment its count
            frequency[char]++
        }else{
            frequency[char] = 1; // if the character is not in the object, we add it with a count of 1
        }
    }
    return frequency
}

console.log(characterFrequency("javascript"));