/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumTriple = function(a, b){
    if(a===b){
        return (a+b)*3
    }
    else
     return a+b
    }
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const sum50 = function(a, b) {
    if (a === 50 || b === 50 & a+b === 50){
        return true}
    else
    return false
}

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeCharacter = function(string, character){
    let targetString1st = string .slice(0, character-1)
    let targetString2nd = string .slice(character, string.length)    
    return targetString1st + targetString2nd
}
/*

4)
 Create a function to find the largest of three given integers. 
*/
const largestOfThree = function(a, b, c){
    if (a>b && a>c){
        return a
    }
    else if(b>a && b>c){
        return b
    }
    else return c
}

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const rangeCheck = function(a, b){
    if (a>40 && a<60 && b>40 && b<60){
        return "40-60"
    }
    else if (a>70 && a<100 && b>70 && b<100)
        return "70-100"
    else
        return "Not in range"
}

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const stringXTimes = function(string, times){
    if (times > 0){
    let result = ""
    for (let i = 0; i< times; i++){
        result += string
    }
    return result
    }
    else return "You have to give a positive input number"
}
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const newOrLos = function(string) {
    let cityName = string.toLowerCase().substring(0,3)
    if (cityName === 'los' || cityName === 'new'){
        return string
    }
    else return 'blank'
}

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumOfArrayOfThree = function(array){
    return array[0]+array[1]+array[2]
}
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const checkFor1Or3 = function(array){
    if (array[0]===1||array[0]===3||array[1]===1||array[1]===3){
        return 'It contains 1 or 3'
    }
    else return "It doesn't contain 1 or 3"
}
/*

10)It contains 1 or 3

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const checkFor3Or1 = function(array){
    if (array[0]!==1 && array[0]!==3 && array[1]!==1 && array[1]!==3){
        return "It doesn't contain 1 or 3"
    }
    else return "It contains 1 or 3"
}
/*

11)

Create a function to find the longest string from a given array of strings.
*/
const longestString = function(array){
    let longestStr = ""
    for (let i = 0; i < array.length; i++){
        if (array[i].length > longestStr.length){
                    longestStr = array[i]
                }
            }
            return longestStr
}
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const angleType = function(deg){
    if (deg > 0 && deg < 90){
        return "Acute angle"
    }
    else if (deg === 90){
        return "Right angle"
    }
    else if (deg > 90 && deg < 180){
        return "btsue angle"
    }
    else if (deg === 180){
        return "Right angle"
    }
    else
        return "Angle out of range"
}
/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/
const biggestNumberOfAnArray = function(array){
    let biggestNumber = -Infinity
    let indexOfBiggest = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] > biggestNumber){
                    biggestNumber = array[i]
                    indexOfBiggest = i
                }
            }
            return indexOfBiggest
}
/*
14)

Create a function to get the largest even number from an array of integers.
*/
const biggestEvenNumberOfAnArray = function(array){
    let biggestNumber = -Infinity
    for (let i = 0; i < array.length; i++){
        if (array[i] > biggestNumber && array[i] % 2 === 0){
                    biggestNumber = array[i]
                }
            }
            return biggestNumber
}
/*

16)

Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const oneNOneP = function(a, b){
    if (a>0 && b<0 || b>0 && a<0){
        return "1 positive 1 negative"
    }
    else 
        return "Not 1 positive 1 negative"
}

/*
17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
const newString = function(string) {
    if (string.length < 3) {
        return string.toUpperCase()
    }
    else{
        let result = ""
        result += string.substring(0,2).toLowerCase()
        result += string.substring(2,Infinity).toUpperCase()
        return result
    }
}
/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
const rangeSum = function(a, b){
    if (a+b>=50&&a+b<=80){
        return 65
    }
    else return 80
}
/*
19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
const striveTeachers = function(number){
    let result = ""
    if (number % 3 === 0){
        result += "Diego"
    }
    if (number % 5 === 0){
        result += "Riccardo"
    }
    if (number % 7 === 0){
        result += "Stefano"
    } 
    if (result===""){
    result=number 
    parseInt(result)
    }

    return result
}
console.log("----19----")
console.log(striveTeachers(3))
console.log(striveTeachers(5))
console.log(striveTeachers(7))
console.log(striveTeachers(21))
console.log(striveTeachers(35))
console.log(striveTeachers(105))
console.log(striveTeachers(17))
/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/
const acronym = function(string){
    let splitString = string.split(' ')
    let acronym = ""
    for (let i = 0; i < splitString.length; i++){
        acronym += splitString[i].charAt(0)
    }
    return acronym    
}