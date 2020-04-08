// Add your functions here

function map(arr,callback){
  let newArr=[];
  
  for(let i in arr){
    newArr.push(callback(arr[i]))
  }
  return newArr;
}
