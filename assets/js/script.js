// ********************************************************************************
//  * Search
//  ********************************************************************************
//  *

// const searchTogglers = document.querySelectorAll("[data-search-toggler]");
// const searchBox = document.querySelector("[data-search-box]");

// for (let i = 0; i < searchTogglers.length; i++) {
//   searchTogglers[i].addEventListener("click", function () {
//     searchBox.classList.toggle("active");
//   });
// }

// ********************************************************************************
//  * Header
//  ********************************************************************************
//  *
const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    // backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    // backTopBtn.classList.remove("active");
  }
});

// ********************************************************************************
//  * Accordion
//  ********************************************************************************
//  *

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      let icons = item.getElementsByTagName("i");
      for (let i = 0; i < icons.length; i++) {
        icons[i].classList.replace("fa-plus", "fa-minus");
      }
    } else {
      description.style.height = "0px";
      let icons = item.getElementsByTagName("i");
      for (let i = 0; i < icons.length; i++) {
        icons[i].classList.replace("fa-minus", "fa-plus");
      }
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      let icons = item2.getElementsByTagName("i");
      for (let i = 0; i < icons.length; i++) {
        icons[i].classList.replace("fa-minus", "fa-plus");
      }
    }
  });
}

// ********************************************************************************
//  * Coming Soon Time
//  ********************************************************************************
//  *
// counting days to new year
const countDownTime = new Date(2024, 1, 1, 0, 0, 0).getTime();
const daysValue = document.getElementById("days");
const hoursValue = document.getElementById("hours");
const minutesValue = document.getElementById("minutes");
const secondsValue = document.getElementById("seconds");

// run this function every 1000 ms or 1 second
let x = setInterval(function () {
  const dateTimeNow = new Date().getTime();
  let difference = countDownTime - dateTimeNow;

  //calculating time and assigning value
  daysValue.textContent = Math.floor(difference / (1000 * 60 * 60 * 24));
  hoursValue.textContent = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutesValue.textContent = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  secondsValue.textContent = Math.floor((difference % (1000 * 60)) / 1000);
  if (difference < 0) {
    clearInterval(x);
  }
}, 1000);
