window.onload = () => {
  var testDiv = document.getElementsByClassName("test")[0];

  // testDiv.onclick = (event) => {
  //   alert("Hello Test!!");
  // };

  testDiv.addEventListener("click", (event) => {
    // event.preventDefault();
    alert("Hello Test");
  });
};
