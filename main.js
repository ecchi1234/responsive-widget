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
const chartContainer = document.getElementsByClassName("grid-stack-item")[0];
changeSizeButton.addEventListener("click", () => {
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  if (width && height) {
    chartContainer.setAttribute("gs-w", `${width}`);
    chartContainer.setAttribute("gs-h", `${height}`);
    const gridStack = document.getElementsByClassName("grid-stack")[0];
    gridStack.setAttribute("gs-current-row", `${height}`);
  }
});

GridStack.init();
