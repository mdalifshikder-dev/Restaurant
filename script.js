const switchButtons = document.querySelectorAll(".switch-btn");
const views = document.querySelectorAll(".site-view");

switchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.site;
    switchButtons.forEach((item) => item.classList.toggle("active", item === button));
    views.forEach((view) => view.classList.toggle("active", view.id === target));
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = target === "business"
      ? "Northstar — Business Solutions Demo"
      : "Maison — Restaurant Demo";
  });
});

// Smoothly close the active demo's menu state is handled by the browser's native anchors.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
