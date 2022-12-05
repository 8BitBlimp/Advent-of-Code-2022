// using TypeScript

import * as fs from 'fs';
// get readline
import * as readline from 'readline';

let dataArr = [];
let dataPoint: number = 1;
let dataMax: number = 0;
let data2: number = 0;
let data3: number = 0;


async function getMax(){
    for(let i = 0; i < dataArr.length; i++){
        if(dataArr[i] > dataMax){
            data3 = data2;
            data2 = dataMax;
            dataMax = dataArr[i];
            
        }
    }
    return `1: ${dataMax} 2: ${data2} 3: ${data3}
    Combbined: ${dataMax + data2 + data3}`;
}

async function processLineByLine() {
    const fileStream = fs.createReadStream('data.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    
    let temp: number = 0;
    for await (const line of rl) {
        // console.log('line')
        if(Number(line)){
            temp += Number(line);
        } else {
            dataArr.push(temp);
            temp = 0;
        }
    }
    console.log(`${await getMax()}`);
}


processLineByLine()