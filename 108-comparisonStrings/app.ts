function ignoreCase(str1:string, str2:string): boolean{
    return( str1.toUpperCase() === str2.toUpperCase());
}
let string1 = "Hashir";
let string2 = "hashir";
console.log(ignoreCase(string1 , string2));
