
// const oddOccurrance =(A)=>{
//   console.log(A);
//   const makeIntegerOccurrencesMap = (map, nextInteger) => {
//        const isMissingKey = key => map[key] === undefined;
//
//        if(isMissingKey(nextInteger)) {
//            map[nextInteger] = 0;
//        }
//
//        ++map[nextInteger];
//        console.log(map);
//
//        return map;
//    }
//
//    const isOdd = number => (number % 2) !== 0;
//    const integerOccurrencesMap = A.reduce(makeIntegerOccurrencesMap, {});
//
//    return +Object.keys(integerOccurrencesMap)
//        .find(integer => isOdd(integerOccurrencesMap[integer]));
// }

// oddOccurrance(arr)
//
// const  solution = (A)=>{
// const solArr =[...A];
// solArr.sort((a, b)=>{return b-a});
// for( let i = 0; i<solArr.length;i++){
//
//
//   if(solArr[i]==solArr[i+1]){
//   solArr.splice(i,2);
//   i=-1;
//
//   }
//   if(solArr[i+1]==undefined){
//   return parseInt(solArr.join(''))
//   }
//
// }
// const map = solArr.map((x,i,elements)=>{
//     if(x==elements[i+1]){
//     elements.splice(i,2);
//     console.log(elements);
// }
//   if(elements[i+1]==undefined){
//   return parseInt(elements.join(''))
//   }
// }
// );
// console.log(map);
// }
// console.log(solution(arr));



// const frogJump =(x,y,d)=>{
//   if ((y - x) % d == 0) {
//     console.log(Math.round((y - x) / d));
// }
//
// console.log(Math.round((y - x) / d + 1));
// }
// frogJump(10,80,30)

// const calcPerm = (a)=>{
//   const n = [...a];
//   let sum= 0;
//   for(let i = 0; i < n.length; i++){
//     console.log((n[i] + (n[i]* n[i] - n[i]) / 2));
//     sum += n[i];
//   }
//   console.log(sum);
// }
// const arr = [1,1,2,3,3,8,8,5,8,8,6,4,3,4,]

// const getMostFrequent=(arr)=> {
//    const hashmap = arr.reduce( (acc, val) => {
//     acc[val] = (acc[val] || 0 ) + 1
//     // console.log(acc);
//     return acc
//  },{})
// return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
// }
//
// console.log(getMostFrequent([1,2,3,5,6,7,8,9,10,3,2,10,2,8,4,5,6,2]));



const findMedianSortedArrays =(arr1,arr2)=>{
let arr =[];

let totalLen = arr1.length + arr2.length;

if(totalLen == 1){
  return arr1.length == 1 ? arr1[0] : arr2[0];
}

let arr_len = totalLen % 2 == 0 ? (totalLen)/2 +1 : Math.ceil(totalLen/2);

let i = 0;
let j = 0;

while (arr.length < arr_len){
  if(i < arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[j]){
      arr.push(arr1[i]);
      // console.log(arr);
      i++;
    } else{
      arr.push(arr2[j]);
      // console.log(arr);
      j++;
    }
  }
  else if(i>= arr1.length) {
    arr.push(arr2[j]);
    j++;
  } else {
    arr.push(arr1[i]);
    i++;
  }
}

return totalLen % 2 ==0 ? (arr[arr.length-1] +arr[arr.length-2])/2 :arr[arr.length - 1];


} //1,3,4,5,7,9,10
console.log(findMedianSortedArrays([1,4,9,10],[3,5,7]));
