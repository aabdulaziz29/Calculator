const buttons = document.querySelectorAll("button");
const freeSpace = document.querySelector("#freeSpace");

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    const value = evt.target.textContent;
    switch (value) {
      case "C":
        freeSpace.textContent = " ";
        break;
      case "DEL":
        freeSpace.textContent = freeSpace.textContent.slice(0, -1);
        break;
      case "=":
        try {
          freeSpace.textContent = eval(freeSpace.textContent);
        } catch (err) {
          freeSpace.textContent = err.message;
        }
        break;
      default:
        freeSpace.textContent += value;
        break;
    }
  });
});
