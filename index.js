// Add your functions here

function map(arr,callback){
  let newArr=[];
  
  for(let i of arr){
    newArr.push(callback(i))
  }
  return newArr;
}
