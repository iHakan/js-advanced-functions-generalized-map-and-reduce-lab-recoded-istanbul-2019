// Add your functions here

function map(arr,callback){
  let newArr=[];
  
  for(let element of arr){
    newArr.push(callback(element))
  }
  return newArr;
}

function reduce(arr,callback,startingPoint=null){
  //inside callback we will pass acc curr
  let value1=startingPoint;
  for(let element of arr){
    value1=callback(element)
  }
  return value1;
}