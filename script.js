const num1 = 5;
const num2 = 3;

// exe1
// Write a JS code to print numbers from 1 to 10
for (let i= 1; i <= 10; i++) {
    console.log(i);
}
// exe 2
const arr2 = [13, 23, 12, 45, 22, 48, 66, 100];
// Write a JS code to print Even numbers in given array
for (i=0; i<arr2.length; i++)
    if (arr2[i]%2!==0){
    console.log(arr2[i])
}

// exe 3
const arr4 = [2, 7, 4, 9, 6, 1, 6, 3];
// An array is special if every even index contains an even number and every odd index contains an odd number.
// Log true if an array is special, and false otherwise.
for (i=0; i<arr2.length; i++)
if ((arr4[i]%2!==0 && i%2!==0 )|| (arr4[i]%2===0 && i%2===0)){
    console.log("True")
}
else{
    console.log("False")
}

// exe 4
const stolenItems = {
tv: 30,
skate: 20,
stereo: 50,
};
// You just returned home to find your mansion has been robbed! Given an object of the stolen items,
// log the total amount of the burglary (number).
// If nothing was robbed, return the string "Lucky you!".
const total = Object.values(stolenItems).reduce((total, number) => total + number)
console.log(total)

// exe 5
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
//[3, 6, 12, 36]
// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
// write JS code that determines whether or not an array is a factor chain.
var arr=[3, 6, 12, 36]
for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] % arr[i] != 0) {
    console.log("false")            
    }
    else {console.log("true")}
}



// exe 6
const arr7 = ["###", "#*#", "###"];
// write JS code that logs true if an asterisk * is inside a box, and false otherwise.


// exe 7
//const mean7 = 12345;
// write JS code that logs the mean of all digits.
// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
// The mean will always be an integer.
var value = 12345,
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
        return a + b;
        }, 0);
console.log(sum/5);