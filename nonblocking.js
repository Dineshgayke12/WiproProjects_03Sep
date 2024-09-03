var fs = require("fs");



//var data=fs.readFileSync('file.txt');

var Data = fs.readFile('file.txt',(err,data) =>{
    if(err) return console.log(err);
    console.log(data.toString());
})

//console.log(data.toString());

let i=1;
while(i<=5){

    console.log("the number is : " + i);
    i++;
}