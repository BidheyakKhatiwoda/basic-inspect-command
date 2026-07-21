const fs = require('fs');

const fileName = process.argv[3];
const numberOfLines = Number(process.argv[4]);

const fileContent = fs.readFileSync(fileName, 'utf8');
const lines = fileContent.trim().split('\n');

console.log(`Total lines in file: ${lines.length}`);

console.log(`\nFirst ${numberOfLines} lines:`);
console.log(lines.slice(0, numberOfLines).join('\n'));

console.log(`\nLast ${numberOfLines} lines:`);
console.log(lines.slice(-numberOfLines).join('\n'));
