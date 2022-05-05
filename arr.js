// const arr = [1,2,3,5,7]

// let element  = arr.map((ele, index, arr)=>{
//     return `index ${index} and element is ${ele}`;
// })

// console.log(arr);

// console.log(element);

const arr = [1,3,5,7,9]

const ele = arr.map((curEle) =>  curEle * 2).filter((curEle)=> curEle > 10).reduce((acc, curEle)=> acc += curEle)

console.log(ele);
