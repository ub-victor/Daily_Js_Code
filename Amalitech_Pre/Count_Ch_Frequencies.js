/*
Count Character Frequencies

Scenario
A system needs to analyze a username and determine how many times each character appears.
Return an object containing the frequency of every character

*/

const characterFrequency = (str) =>{
    const frequency = {};

    for(const char of str){
        if (frequency[char]){
            frequency[char]++
        }else{
            frequency[char] = 1;
        }
    }
    return frequency
}

console.log(characterFrequency("javascript"));