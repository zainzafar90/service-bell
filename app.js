const widget = document.querySelector(".widget-wrapper");

widget.addEventListener("click", (e) => {
  widget.classList.toggle("widget-wrapper--expanded");
});

console.log(widget);
