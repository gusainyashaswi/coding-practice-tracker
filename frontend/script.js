const userData = {
  name: "Yashaswi Gusain",
  leetcode: 1450,
  codeforces: 900,
  codechef: 1407
};

const statsDiv = document.getElementById("stats");

statsDiv.innerHTML = `
  <h3>${userData.name}</h3>
  <p>LeetCode: ${userData.leetcode}</p>
  <p>Codeforces: ${userData.codeforces}</p>
  <p>CodeChef: ${userData.codechef}</p>
`;
