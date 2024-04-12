// by using comparison operator in if
function leapYear(year :number): boolean{
    return (year / 4 === 0 && year / 100 != 0)||(year / 400 === 0);
}
let year = 2023;

if(leapYear(year)){
    console.log(`${year} true`);
}else{console.log(`${year} false`);}

