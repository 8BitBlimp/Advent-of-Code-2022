import * as fs from 'fs';
// get readline
import * as readline from 'readline';
let temp: number = 0;


async function processLineByLine() {
    const fileStream = fs.createReadStream('data.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });


    for await (const line of rl) {
        let middle = Math.floor(line.length / 2);
        let firstHalf = line.slice(0, middle);
        let secondHalf = line.slice(middle, line.length);

        for(let i = 0; i < firstHalf.length; i++){
            // console.log(firstHalf[i], secondHalf[i])
            if(secondHalf.includes(firstHalf[i])){
                console.log(`${firstHalf[i]} ${secondHalf}`)
                if(firstHalf[i].toLowerCase() === firstHalf[i]){
                    temp += getAlphabetPosition(firstHalf[i])
                } else {
                    temp += getAlphabetPosition(firstHalf[i]) + 26
                }
                break;
            
            }

        }
        // return temp on last itteration
        
    }

    
    
   
}


// get alphabet position
function getAlphabetPosition(letter: string) {
    return letter.toLowerCase().charCodeAt(0) - 96;
}

function test(input: string) {
    let placeholder = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i].toLowerCase() === input[i]){

            placeholder += getAlphabetPosition(input[i])
        } else {
            placeholder += getAlphabetPosition(input[i]) + 26
        }
    }
    return placeholder;
}

processLineByLine()
.then(() => {
    console.log(temp)
}) 


console.log(test('pLPvts'))



// Part 2

let dataArray: string[] = [];
let counter = 1;
let tempv2: number = 0;

async function partTwo() {
    const fileStream = fs.createReadStream('data.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        dataArray.push(line);

        if(counter === 3) {
            for(let i = 0; i < dataArray[0].length; i++) {
                if(dataArray[1].includes(dataArray[0][i]) && dataArray[2].includes(dataArray[0][i])){
                    if(dataArray[0][i].toLowerCase() === dataArray[0][i]) tempv2 += getAlphabetPosition(dataArray[0][i]);
                    else tempv2 += getAlphabetPosition(dataArray[0][i]) + 26;
                }
            }
            dataArray = [];
            counter = 1;
        } else {
            counter++;
        }
    }   
}

partTwo()
.then(() => {
    console.log({tempv2}) // <--- answer not right - fix soon
})
    
   
 