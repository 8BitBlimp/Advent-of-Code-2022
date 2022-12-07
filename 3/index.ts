import * as fs from 'fs';
import { rawListeners } from 'process';
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
                // console.log(`${firstHalf[i]} ${secondHalf}`)
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


console.log(test('rZ'))



// Part 2
let total: number = 0;

const charCodes = Array.from({ length: 26 }, (_, i) => i + 97);
const charsUpper = charCodes.map((c) => String.fromCharCode(c));

const charList = [
    ...charsUpper.map(v => v.toLowerCase()),
    ...charsUpper
]

async function getBadge() {
    const fileStream = fs.createReadStream('data.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let tempArray: string[] = [];
    let accountedFor: string[] = [];
    for await (const line of rl) {


        if(accountedFor.includes(line)){
            console.log('already accounted for')
            continue;
        }
        accountedFor.push(line)
        tempArray.push(line)
        if(tempArray.length === 3){
            console.log(tempArray)
            for(let j = 0; j < tempArray[0].length; j++){
                if(tempArray[1].includes(tempArray[0][j]) && tempArray[2].includes(tempArray[0][j])){
                    console.log('found')
                    total += test(tempArray[0][j])
                }
            }
            tempArray = [];
        }
        /*
        for(let i = 0; i < line.length; i++){
            if(!accountedFor.includes(line[i])){
                accountedFor.push(line[i])
            } else {
                console.log('already accounted for')
                continue;
            }
            tempArray.push(line[i])
            if(tempArray.length === 3){
                console.log(tempArray)
                for(let j = 0; j < tempArray[0].length; j++){
                    if(tempArray[1].includes(tempArray[0][j]) && tempArray[2].includes(tempArray[0][j])){
                        console.log('found')
                        total += test(tempArray[0][j])
                    }
                }
                tempArray = [];
            }
        }
        */

    }
        
}


getBadge().then(() => {
    console.log({total})
})
