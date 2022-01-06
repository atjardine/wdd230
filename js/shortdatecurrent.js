const options = {
    day: "numeric",
    month: "numberic",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  document.getElementById("shortdatecurrent").textContent =
    new Date().toLocaleDateString("en-US", options);