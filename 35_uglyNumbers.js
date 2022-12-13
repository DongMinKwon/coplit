const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.

  const arr = [1];
  let [idx2, idx3, idx5] = [0, 0, 0];

  for (let i = 0; i < n - 1; i++) {
    const next2 = arr[idx2] * 2;
    const next3 = arr[idx3] * 3;
    const next5 = arr[idx5] * 5;

    let next = Math.min(next2, next3, next5);

    if (next === next2) idx2++;
    if (next === next3) idx3++;
    if (next === next5) idx5++;

    arr.push(next);
  }

  return arr[n - 1];
};