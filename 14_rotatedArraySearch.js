const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.

  let left = 0;
  let right = rotated.length - 1;

  while(left <= right){
    const middle = parseInt((left + right) / 2)

    if(rotated[middle] === target) return middle;

    if(rotated[left] < rotated[middle]){
      //왼쪽이 정렬돼 있음

      if(target < rotated[middle] && target >= rotated[left]){
        right = middle - 1;
      }
      else{
        left = middle + 1;
      }
    }
    else{
      //오른쪽이 정렬돼 있음
      if(target > rotated[middle] && target <= rotated[right]){
        left = middle + 1;
      }
      else{
        right = middle - 1;
      }

    }
  }

  return -1;
};
