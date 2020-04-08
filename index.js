// Add your functions here

function map(arr,callback){
  let newArr=[];
  
  for(let element of arr){
    newArr.push(callback(element))
  }
  return newArr;
}

function reduce(arr,callback,startingPoint=0){
  //inside callback we will pass acc curr
  let value1=0;
  for(let element of arr){
    value1=value1+element
  }
  return value1;
}