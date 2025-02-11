var person = {
    name: "John",                //String
    lastName: "Doe",
    age: 35,                     //Number
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], //Array
    significantOther: person2   //Object, yes, the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var family = {
    lastName: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};
let numero_suerte= 33
family.members[0].luckyNumbers[3]=33

let person3 = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
}
family.members.push(person3)
 

function addAllFamilyLuckyNumbers(anArray){
    let sumOfAllLuckyNumbers = 0
    for(let member of anArray){
        for( let number of member.luckyNumbers){
            sumOfAllLuckyNumbers+=number
        }
    }

  return sumOfAllLuckyNumbers;
}
console.log(addAllFamilyLuckyNumbers(family.members)); 
