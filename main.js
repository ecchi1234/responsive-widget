// for drawing graph
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    maintainAspectRatio: false,
  },
};

const myChart = new Chart(document.getElementById("chart"), config);

// handle event
const changeSizeButton = document.getElementById("change-size-btn");
// initial width and height
// const chartContainer = document.getElementsByClassName("chart-container")[0];
// chartContainer.style.width = `1000px`;
// chartContainer.style.height = `500px`;
changeSizeButton.addEventListener("click", () => {
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  if (width && height) {
    chartContainer.style.width = `${width}px`;
    chartContainer.style.height = `${height}px`;
  }
});

GridStack.init();
