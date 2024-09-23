/*
*/ 

let superman = {
    name:"superman",
    power:"fly",
    costumeColor:"blue",
    strngth:1000,
    stealth:0
}
console.log(superman.name);
console.log(superman.power);

let batman = {
    name:"batman",
    power:"thumb",
    costumeColor:"black",
    strngth:100,
    stealth:1000,

}

console.log(superman.stealth);
console.log(batman.stealth);
console.log(superman.stealth > batman.stealth);


let supers = [
    {
        name:"superman",
        power:"fly",
        costumeColor:"blue",
        strngth:1000,
        stealth:0
    },
    {
        name:"batman",
        power:"gun",
        costumeColor:"black",
        strngth:100,
        stealth:1000
    },
    {
        name:"spiderman",
        power:"sense",
        costumeColor:"red",
        strngth:1000,
        stealth:100
    }
]
for(let i=0;i<supers.length;i++){
    console.log(supers[i].costumeColor);
    console.log(supers[i].name);
    
}