/** @format */

const panels: NodeListOf<Element> = document.querySelectorAll(".panel");

const removeActiveClass = () => {
  panels.forEach((panel: any) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel: any) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});
