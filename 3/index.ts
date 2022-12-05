import * as fs from 'fs';
// get readline
import * as readline from 'readline';
let result: number = 0;
let opponentResult: number = 0;

let realResult: number = 0;

// A = X
// B = Y
// C = Z
// A&&X == Rock
// B&&Y == Paper
// C&&Z == Scissors

async function getWin(opponent:string, player:string) {
    if (opponent === "A" && player === "X" || opponent === "B" && player === "Y" || opponent === "C" && player === "Z") {
        console.log('Tie')
        return "Tie"
    } else if (opponent === 'A' && player === 'Y') {
        return "Win"
    } else if (opponent === 'A' && player === 'Z') {
        return "Loss"
    } else if (opponent === 'B' && player === 'X') { 
        return "Loss"
    } else if (opponent === 'B' && player === 'Z') { 
        return "Win"
    } else if (opponent === 'C' && player === 'X') { 
        return "Win"
    } else if (opponent === 'C' && player === 'Y') { 
        return "Loss"
    } else{
        return "Error"
    }
} // Paper beats Rock, Rock beats Scissors, Scissors beats Paper, fuck it


async function processLineByLine() {
    const fileStream = fs.createReadStream('data.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });


    for await(const line of rl){
        let input = line.split(' ');

        switch (input[1]) {
            case 'Y':
                result += 2
                break;            
            case 'X':
                result += 1
                break;
            case 'Z':
                result += 3
                break;
            default:
                console.log('Error')
                break;
        }
        switch (input[0]) {
            case 'B':
                opponentResult += 2
                break;            
            case 'A':
                opponentResult += 1
                break;
            case 'C':
                opponentResult += 3
                break;
            default:
                console.log('Error')
                break;
        }
        let final = await getWin(input[0], input[1])
        if(final === "Win"){
            result += 6
        } else if(final === "Loss"){
            opponentResult += 6
            // pass
        } else if(final === "Tie"){
            opponentResult += 3
            result += 3
        } else if(final === "Error"){
            console.log(`${input[0]} ${input[1]}`)
        }

    }
    console.log({result});
}
processLineByLine()
.then(() => {
    console.log(result - opponentResult)
})

// Part Two starts here

async function getPoint(draw:string, move:string) {
    if(move == "Win") {
        switch (draw) {
            case 'A':
                // Opponent used Rock, so we use Paper
                return 2 + 6
            case 'B':
                // Opponent used Paper, so we use Scissors
                return 3 + 6
            case 'C':
                // Opponent used Scissors, so we use Rock
                return 1 + 6
    }
    } else if(move == "Loss") {
        switch (draw) {
            case 'A':
                // Opponent used Rock, so we use Scissors
                return 3
            case 'B':
                // Opponent used Paper, so we use Rock
                return 1
            case 'C':
                // Opponent used Scissors, so we use Paper
                return 2
        }
    } else if(move == "Tie") {
        switch (draw) {
            case 'A':
                // Opponent used Rock, so we use Rock
                return 1 + 3
            case 'B':
                // Opponent used Paper, so we use Paper
                return 2 + 3
            case 'C':
                // Opponent used Scissors, so we use Scissors
                return 3 + 3
        }
    }
}

async function partTwo() {
    const fileStream = fs.createReadStream('data.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await(const line of rl) {
        let input = line.split(' ');
        switch (input[1]) {
            case 'Y':
                realResult += await getPoint(input[0], 'Tie');
                break;
                case 'X':
                realResult += await getPoint(input[0], 'Loss');
                break;
            case 'Z':
                realResult += await getPoint(input[0], 'Win');
                break;
        }
    }
}

partTwo()
.then(() => {
    console.log(realResult)
})

// Q: what is the command for installing node:fs?
// A: npm install @types/node