const insertionSort = function (arr, cb) {
  
  if(cb === undefined){
    for(let i = 1; i<arr.length; i++){
      const cur = arr[i];
      for(let j = i-1; j>=0; j--){
        if(cur < arr[j]){
          arr[j+1] = arr[j];
          if(j === 0){
          arr[0] = cur; 
          }
        }
        else {
          arr[j+1] = cur;
          break;
        }
      }
    }
  }else{
    for(let i = 1; i<arr.length; i++){
      const cur_cb = cb(arr[i]);
      const cur = arr[i];
      for(let j = i-1; j>=0; j--){
        if(cur_cb < cb(arr[j])){
          arr[j+1] = arr[j];
          if(j === 0){
          arr[0] = cur; 
          }
        }
        else {
          arr[j+1] = cur;
          break;
        }
      }
    }
  }
  

  return arr;
};
