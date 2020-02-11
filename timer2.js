const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
    if (key === '\u0003') {
        process.exit();
      }
      else if(key === 'b'){
        process.stdout.write('\x07');
      }else if((Number(key) >= 1) && (Number(key) <= 9)){
          process.stdout.write(key);
        process.stdout.write(`setting timer for ${key} seconds...`);
        setTimeout(() => {
            process.stdout.write('\x07');
        }, key * 1000);
      }
});
