const divs = document.querySelectorAll(".changeColor");
divs.forEach((div) => {
  addEventListener("click", () => {
    const a = Math.random() * 1000;
    const b = Math.random() * 1000;
    const c = Math.random() * 1000;
    div.style.backgroundColor = `rgb(${Math.floor(a)}, ${Math.floor(
      b
    )}, ${Math.floor(c)})`;
  });
});
