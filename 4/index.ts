import * as fs from 'fs';
import * as readline from 'readline';





async function main() {
    const fileStream = fs.createReadStream('data.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        console.log(line);
    }
}

main();