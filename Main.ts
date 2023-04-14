import {Stack} from "./Stack";

let stack:Stack<number> = new Stack()
let arr: number[] = [1,2,3,4,5,6,7,8,9];

function swap(arr: number[]) {
    arr.forEach(i => stack.container.push(i))
    let TempArr: number[]| undefined = []
    let length = stack.container.length
    for (let i: number = 0; i < length; i++) {
        let value = stack.pop();
        if (value !== undefined) {
            TempArr.push(value);
        }
    }
    console.log(TempArr)
}
swap(arr)

// console.log(stack.container)