/*
Find the First Duplicate

Scenario
You are building a system that receives a list of transaction IDs.
A transaction ID should appear only once

Given an array of transaction IDs, Return the first ID that appears more than once
If there is no duplicatite, return -1
The syntax new set() create a collection of Unique values: 
const numbers = new set([1,2,3,4,5,6,6,6]);
console.log(numbers)
*/

const firstDuplicate = (arr) =>{
    const seen = new set();// this will store the unique values we have seen so far

    for(const num of arr){
        if(seen.has(num)){
            return num
        }

        seen.add(num);
    }
    return -1;
}

console.log(arr([[1, 2, 3, 4]]))