var x  = 25
var y = 7

var modulas = 25 % 7

console.log(modulas)

// q2
var a = 25
var b = 2
// after adding to a 10 a = 25 and subtract b - 2 = 4

console.log(a * b)

// q3
var c = 12
var d = 3
console.log(c ** d)

// q4
var e = 10
var f =  3

console.log(e += f * 2)

// q5

var g = 25
var h = 4
// after adding 5 to g

console.log(g / h)

// q6
var i = 6
var j = 3
// after subtarct 2 to i

console.log(i * j)

// q7
// If var k = 18 and vco nar l = 5, what is the result of k - l + 2?

var k = 18
var i = 5

console.log(k-i+2)

// q8
var m = 7
var n = 2
console.log(m**n)

// q9
// For var o = 13 and var p = 4, what will be the outcome of o % (p + 2)?
var o = 13
var p = 6
console.log(o % p)

// q10?
// Given var q = 16 and var r = 3, determine the result of q * r after dividing q by 2.
var q = 8
var r = 3
console.log(q * r)

// q11
// If var s = 25 and var t = 3, what is the value of s / t after subtracting 1 from s?
var s = 24
var t = 3
console.log(s / t)

// q12
// Suppose var u = 11 and var v = 3, calculate the value of u - v after adding 2 to v.

var u = 11
var v = 5
console.log(u-v)

// q13
// For var w = 22 and var x = 5, what will be the outcome of w + (x ** 2)?
var w = 22
var x = 5
console.log(w +(x **2))

// q14
// Given var y = 19 and var z = 4, determine the result of y % (z + 1).
var y = 19
var z = 4
console.log(y% (z + 1))

// q15

// 15. If var a = 10 and var b = 3, what is the value of a * (b - 2)?
var a = 10
var b = 3
console.log(a * (b - 2))

// var student = ['bilal', 'huzaifa' , 'ali' ,'ert']
// console.log(student.slice(1, 4));

// var cities = ['karachi' , 'lahore' , 'peshawar']
// var usercity = prompt("enter city")



// var a = 'a';
// var A = 'A';

// console.log(a.toUpperCase() == A.toLowerCase())


// var username = prompt("enter nane")

// if(username.length > 3 || username.length < 12){
//   console.log( username)
// }else {
//     alert("name shold be greater")
// }

var username = "basit";

console.log(username[0].toUpperCase() + username.slice(1))
console.log(username.indexOf("i"))
console.log(username.lastIndexOf("t"))
console.log(username.charAt(1))
// replace
var txt = "bilal got first position"
txt = txt.replace("first" , "1st")
console.log(txt);

// trim
var email = "  attari@gmail.com  ";
console.log(email.length);
console.log(email.trim().length)