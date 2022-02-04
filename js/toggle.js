var toggler = document.querySelector("#toggler");
var left = document.querySelector("#left");
var right = document.querySelector("#right");

// Register Event on your Button.

// element.addEventListener('eventName', cb, false(capturing/bubbling));

// element.style.cssproperty = 'cssValue';
left.style.marginLeft = "0px";

console.log(left.offsetWidth);

toggler.addEventListener("click", swithWidth, false);

document.querySelector("#btnWrap").addEventListener(
  "click",
  function () {
    alert("parent 1");
  },
  false
);

function swithWidth() {
  alert("child 0");
  if (left.style.width == "20%") {
    //   alert(-left.offsetWidth + "px");
    left.style.width = "10%";
    right.style.width = "90%";
  } else {
    left.style.width = "20%";
    right.style.width = "80%";
  }
}

// toggler.onclick = function () {
//   swithWidth();
// };
