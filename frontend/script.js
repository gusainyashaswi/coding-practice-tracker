const userData = {
  name: "Yashaswi Gusain",
  ratings: {
    leetcode: 1450,
    codeforces: 900,
    codechef: 1407
  },
  problemsSolved: {
    Arrays: 40,
    Strings: 25,
    Trees: 10,
    Graphs: 5
  }
};

const statsDiv = document.getElementById("stats");

statsDiv.innerHTML = `
  <h3>${userData.name}</h3>
  <p><strong>LeetCode:</strong> ${userData.ratings.leetcode}</p>
  <p><strong>Codeforces:</strong> ${userData.ratings.codeforces}</p>
  <p><strong>CodeChef:</strong> ${userData.ratings.codechef}</p>
`;

const ctx = document.getElementById("topicChart").getContext("2d");

const topicChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: Object.keys(userData.problemsSolved),
    datasets: [{
      label: "Problems Solved",
      data: Object.values(userData.problemsSolved),
      backgroundColor: "rgba(54, 162, 235, 0.7)"
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
