import * as fs from 'fs';
import * as readline from 'readline';

// read file
export default async function readFile(path: string): Promise<string[]> {
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let lines: string[] = [];
    
    for await (const line of rl) {
        lines.push(line);
    }
    
    return lines;
}