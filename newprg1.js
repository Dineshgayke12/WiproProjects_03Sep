const read= require('readline').createInterface({
    input : process.stdin,
    output:process.stdout,
});

read.question('what do you prefer?',preference =>{
    console.log(`your preferance is ${preference}`);
    read.close();
});