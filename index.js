// const fs = require('fs');
import * as fs from 'fs';
import * as cowsay from 'cowsay';

console.log('choo choo!');

let output = cowsay.say({ text: 'Kaide Salo?!?' });
console.log(output);

// const words = ['unicorn', 'cupcake', 'rainbow', 'kitten'];
// const output = words.join('\n');
// fs.writeFile('words.txt', output, fileWritten);

// function fileWritten() {
    // console.log('file written!');
// }
