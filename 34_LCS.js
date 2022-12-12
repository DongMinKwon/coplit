const LCS = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.

  const dp = Array.from(Array(51), () => Array(51).fill(0));
  const str1_pad = `A${str1}`;
  const str2_pad = `B${str2}`;

  const len1 = str1_pad.length;
  const len2 = str2_pad.length;

  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      //문자가 같을경우
      if (str1_pad[i] === str2_pad[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        //문자가 다를경우
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[len1 - 1][len2 - 1];
};