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
  
  for(let el of arr){
    value1=value1+el
  }
  
  for(let element of arr){
    if(element){
      value1 = true;
    }else{
      value1 = false;
    }
  }
  return value1;
}