var student = ["bilal" , 'shahid' , 'ahmed'];
console.log(student)

var a = ['abc' , 'def' , 'ghi' , 'jkl']
console.log(a);

var num = [1 , 2 ,3 ,4 ,5 ,6 ,7 ,8 , 9];
console.log(num);

const booleanArray = [true, false, true, true, false];

console.log("Boolean Array:", booleanArray);

console.log("Element at index 0:", booleanArray[0]); // true
console.log("Element at index 3:", booleanArray[4]); // true

var mixedArray = [1 , "hello" , true , [2, 4 , 6]];

console.log(mixedArray)

console.log("element is      o",  mixedArray[0]); //1
console.log("element is 1  string",  mixedArray[1]); //hello
console.log("element is 2 true",  mixedArray[2]); //true
console.log("element is 3 num",  mixedArray[3]); //num

var mobilenetwork = ['jazz', 'zong' , 'warid' , 'telenor'];
console.log("available mobile network in pakistan" , mobilenetwork);

var education = ['ssc', 'hsc' , 'bs' , 'bcom' , 'phd']
console.log(education);

var movies = ['aveneger' , 'spectre' , 'imside out'];
console.log("top 5 movies" , movies)
console.log("movies length", movies.length)

var cars = ['audi' , 'fareri' , 'lamburgeni']
console.log(cars)
console.log("first index" , cars[0])
console.log("last index" , cars[2])

var marks = ['score of michael', ' score of jon' , 'score of tony'];
console.log(marks[0] + " is 320 percentage 62%")
console.log(marks[1] + " is 230 percentage 46%")
console.log(marks[2] + " is 480 percentage 96%")


var studentscore = [320 , 230 , 480 , 120]
console.log("sort method use krna sa pehla" , studentscore)
studentscore.sort();
console.log("sort method use krna ka bad" , studentscore);

var fruits = ['strawbery' , 'apple' , 'orange' , 'banana'];
console.log("simple array" , fruits);
fruits.sort();
console.log( "sort use krna ka baad" , fruits) 

var cities = ["karachi" , 'lahore' , 'islamabad' ,'queeta' , 'peshawar'];
console.log("simple array" , cities);

var cities = ["karachi" , 'lahore' , 'islamabad' ,'queeta' , 'peshawar'];
var copycity = cities.slice(2 , 4)
console.log(copycity)

var student = ['a','b','c' , 'd']
console.log(student)

var student = ['a','b','c' , 'd']
var selectstudent = student.slice(0 , 3);
console.log(selectstudent)

var student = ['a','b','c' , 'd']
student.splice(1 , 2 ,'bilal')
console.log(student)

var create = ['this' , 'is' , 'my' , 'cat']
console.log(create)


var out = ['keyboard' , 'mouse' , 'printer' , 'monitor']
console.log(out)

var out = ['keyboard' , 'monitor' , 'printer' , 'mouse']
out.sort();
console.log(out)

var store = ['apple', 'samsung' , 'motorola' , 'nokia' , 'haier'];
console.log(store)

var multiArray = []

multiArray.push([])
multiArray.push([])
multiArray.push([])
multiArray.push([])

multiArray[0].push(1);
multiArray[0].push(2);
multiArray[1].push(3);
multiArray[2].push(4);

console.log(multiArray)


var student = []

student.push([])
student.push([])
student.push([])
student.push([])


student[0].push(1)
student[1].push(2)
student[2].push(3)
student[3].push(4)

console.log(student)


var matrix =  [
[1 ,2 ,3],
[4 ,5 ,6],
[7 ,8 , 9]
];
console.log(matrix);