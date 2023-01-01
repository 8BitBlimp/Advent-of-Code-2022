import * as fs from 'fs';
import * as readline from 'readline';

import readFile from '../modules/byLine';


const contains = (str1: string, str2: string) => {
    return str1 <= str2 && str1 >= str2;
}

const part1 = async () => {
    let data = await readFile('data.txt');
    let total = 0;
    let firstArr: Object[] = [];
    let secondArr: Object[] = [];


    for(let i = 0; i < data.length; i++){

        let [first, second] = data[i].split(",").map((x) => x.split("-").map((y) => Number(y)));

        firstArr.push(first);
        secondArr.push(second);
    }

    for(let i = 0; i < firstArr.length; i++){
        let first = firstArr[i];

        for(let j = 0; j < secondArr.length; j++){
            let second = secondArr[j];

            if(contains(first[0], second[0]) && contains(first[1], second[1])){
                console.log('first <= second')
                total += 1;
                // remove second from secondArr
                secondArr.splice(j, 1);
            }
        }

    }

    for(let i = 0; i < secondArr.length; i++) {
        let second = secondArr[i];

        for(let j = 0; j < firstArr.length; j++){
            let first = firstArr[j];

            if(contains(second[0], first[0]) && contains(second[1], first[1])){
                console.log('second <= first')
                total += 1;
                // remove first from firstArr
                firstArr.splice(j, 1);
            }
        }
    }

    return total;
    

} 

const main = async () => {
    console.log(`First: ${await part1()}`)
}
main()

/*

let total = 0;

async function main() {
    const fileStream = fs.createReadStream('data.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    
    for await (const line of rl) {
        // console.log(line);

        // split lines with ","
        let split = line.split(",");
        
        const [firstMin, firstMax] = split[0].split("-");
        const [secondMin, secondMax] = split[1].split("-");

        if(firstMin <= secondMin && firstMax >= secondMax){
            console.log('first <= second')
            total += 1;
        } else if(secondMin <= firstMin && secondMax >= firstMax){
            console.log('second <= first')
            total += 1;
        }


    }
}

main().then(() => {
    console.log(total)
})
*/