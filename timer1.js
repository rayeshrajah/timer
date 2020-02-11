let std = process.stdout;
let array = process.argv.slice(2).sort((a,b)=>{
    return a - b; 
});

for(let i = 0; i < array.length; i++){
    if(isNaN(array[i])){
        std.write("Not a number. Please enter a number");
        process.exit();
    }else if(array[i] < 0){
        std.write("Can't process a negative number");
        process.exit();
    }
    setTimeout(() => {
        std.write('\x07');
    }, array[i] * 1000);
}
