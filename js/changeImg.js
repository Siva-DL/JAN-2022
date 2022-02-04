var i = 1;

setInterval(function () {
  //   var Img = ;
  //   console.log(Img);

  document.querySelector("#bind").innerHTML =
    "<img src=../tasks/" + i++ + ".jpg />";

  if (i >= 4) {
    i = 1;
  }
}, 2000);
