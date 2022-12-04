const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  const chk = {};
  const str_arr = [...str];

  const str_set = str_arr.reduce((acc, cur) => {
    if (chk[cur] !== 1) {
      chk[cur] = 1;
      return [...acc, cur];
    }
    return [...acc];
  }, []);

  const power = recursive(str_set.sort());

  return power.sort();
};

const recursive = function (arr) {
  if (arr.length === 1) return ["", arr[0]];

  const first = arr[0];

  const no_first_set = recursive(arr.slice(1));
  const include_first = no_first_set.map((el) => first + el);

  return [...no_first_set, ...include_first];
};
