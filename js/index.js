let imgLink = [
  "img/JS-r.png",
  "img/CSS-r.png",
  "img/HTML-r.png",
  "img/bootstrap-r.png",
  "img/materialize-r.png",
];

let step = 0;
let offset = 0;
let count = imgLink.length - 1;

next.onclick = left;
back.onclick = right;

getImage();

function getImage() {
  back.onclick = null;
  back.style.borderRight = "35px solid rgb(228, 214, 214)";
  back.style.cursor = "auto";

  for (let i = 0; i < imgLink.length; i++) {
    let img = document.createElement("img");
    img.src = imgLink[step];
    img.classList.add("singleImg");
    img.style.left = offset * 450 + "px";
    document.querySelector("#slide").appendChild(img);
    step++;
    offset++;
  }
}

function left() {
  let arr = document.querySelectorAll(".singleImg");

  for (let i = 0; i < arr.length; i++) {
    let tmp = parseInt(arr[i].style.left);
    arr[i].style.left = tmp - 450 + "px";
  }

  count--;

  if (count === 0) {
    next.onclick = null;
    next.style.borderLeft = "35px solid rgb(228, 214, 214)";
    next.style.cursor = "auto";
  }

  if (count > 0) {
    back.onclick = right;
    back.style.borderRight = "35px solid grey";
    back.style.cursor = "pointer";
  }
}

function right() {
  let arr = document.querySelectorAll(".singleImg");

  for (let i = 0; i < arr.length; i++) {
    let tmp = parseInt(arr[i].style.left);
    arr[i].style.left = tmp + 450 + "px";
  }

  count++;

  if (count === arr.length - 1) {
    back.onclick = null;
    back.style.borderRight = "35px solid rgb(228, 214, 214)";
    back.style.cursor = "auto";
  }

  if (count > 0) {
    next.onclick = left;
    next.style.borderLeft = "35px solid grey";
    next.style.cursor = "pointer";
  }
}
