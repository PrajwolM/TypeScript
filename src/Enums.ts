// a list of related constants.it can be considered a special class
// enum size{
//     Small=1, 
//     Medium,
//     Large
// }
// console.log(size.Medium); 
 const enum size{
    Small=1, 
    Medium,
    Large
}
console.log(size.Medium);
//  addition of the const delivers a more optimized javascript by the compiler.
//  Use of Enums.

 let mySize: size = size.Medium;
 console.log(mySize);