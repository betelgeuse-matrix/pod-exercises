
// Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false.

// https://java.codeup.com/extra-exercises/javascript/arrays-and-objects/


var cars=[
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]


var washCars= function (array){
    array.forEach(function(element){
        element.isDirty = false;

    });
    return array;
}

console.log(washCars(cars));



// Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

// https://java.codeup.com/extra-exercises/javascript/arrays-and-objects/



    var admins=  [
     {
        isAdmin: true,
        email: 'user1@email.com'
        },
      {
            isAdmin: true,
            email: 'user2@email.com'
      },
     {
        isAdmin: false,
        email: 'user3@email.com'
    }
]



var adminList=function(array){
    count=[]
    array.forEach(function(element){
        if(element.isAdmin === true){
            count.push(element);
        }
    });
    return count;


}


console.log(adminList(admins));



//
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
//     Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// https://www.codewars.com/kata/counting-duplicates/javascript
//
// https://medium.com/@caymanbruce/finding-duplicate-characters-in-a-string-in-javascript-94e2cb23ab5e


//
function duplicateCount(str) {
    var result = [];
    var strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);

    if (strArr != null) {
        //str == ["iiiiii", "ss"] if i use elem[0]
        strArr.forEach(function (elem) {
            // The reason you are getting the 0 index is because you don't want all the letters in the array not 'iiiiiiii' just 'i'
            result.push(elem);
        });
    }
    return result.length;
}


console.log(duplicateCount('abbbbccccccccde'));
