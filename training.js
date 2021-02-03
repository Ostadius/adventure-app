const arr = [1,1,2,3,3,8,8,5,8,8,6,4,3,4,]

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

const calcPerm = (a)=>{
  const n = [...a];
  let sum= 0;
  for(let i = 0; i < n.length; i++){
    console.log((n[i] + (n[i]* n[i] - n[i]) / 2));
    sum += n[i];
  }
  console.log(sum);
}


calcPerm([1,2,3,5,6,7,8,9,10])
