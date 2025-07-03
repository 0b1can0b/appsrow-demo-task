import "./style.css";

new Splide(".splide", {
  type: "loop",
  gap: "24px",
  width: "1200px",
  height: "490px",
}).mount();

//

const incrementElements = [...document.querySelectorAll(".increment-text")];
incrementElements.forEach((element) => {
  element.parentElement.addEventListener("animationend", () => {
    let count = Number(element.getAttribute("from"));
    const loopFuncton = () => {
      element.querySelector(".data").innerText = count;
      count++;
      if (count < Number(element.getAttribute("to"))) setTimeout(() => loopFuncton(), 5);
    };
    loopFuncton();
  });
});

//

document.querySelector(".section.hero .arrow-down").addEventListener("click", () => {
  document.querySelector(".section.modern-homes").scrollIntoView({ behavior: "smooth" });
});

//

[...document.querySelectorAll(".animate")].forEach((element) => {
  new IntersectionObserver((entries) => {
    entries[0].target.classList.toggle("is-in-viewport", entries[0].isIntersecting);

    if ([...entries[0].target.childNodes].some((element) => element.classList?.contains("increment-text"))) {
      entries[0].target.querySelector(".data").innerText = "0";
    }
  }).observe(element);
});

//

[...document.querySelectorAll(".tab-title")].forEach((btn) =>
  btn.addEventListener("click", () => {
    console.log("clicked");

    document.querySelector(".tab-title.active").classList.remove("active");
    btn.classList.add("active");

    document.querySelector(".tab-content.active").classList.remove("active");
    const index = [...btn.parentElement.parentElement.children].indexOf(btn.parentElement);
    const tabContents = [...document.querySelectorAll(".tab-content")];
    tabContents[index].classList.add("active");

    document.querySelector(".tab-indicator-container").style.top = `${[8, 54, 100, 144, 190][index]}px`;
  })
);

//
