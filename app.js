const widget = document.querySelector(".widget-wrapper");
const btnClose = document.querySelector(
  ".widget-wrapper .widget--expanded__btn-close"
);

widget.addEventListener(
  "click",
  (e) => {
    if (!widget.classList.contains("widget-wrapper--expanded")) {
      widget.classList.add("widget-wrapper--expanded");
    }
  },
  false
);

btnClose.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    if (widget.classList.contains("widget-wrapper--expanded")) {
      widget.classList.remove("widget-wrapper--expanded");
    }
  },
  false
);
