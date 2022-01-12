// Select color input
const color = document.getElementById("colorPicker");

// Select size input
const width = document.getElementById("inputWidth");
const height = document.getElementById("inputHeight");
// When size is submitted by the user, call makeGrid()
const submit = document.getElementById("sizePicker");
// makeGrid() called on click on submit
submit.addEventListener("submit", function (evt){
  evt.preventDefault();
  makeGrid(width,height);
});

function makeGrid() {
const allbody = document.getElementsByTagName("body")[0];

const table = document.getElementById("pixelCanvas");
//Grid gets cleaned on submit
table.innerHTML="";

for (let row = 0; row < width.value; row++ ) { // creates rows
    let rows = document.createElement("tr");

  for (let col = 0; col < height.value; col++) { // creates columns
    let cols = document.createElement("td");

// Colors the pixels, removes color on click if already exists
    cols.addEventListener("click", function colorPixel (e){
      if (cols.hasAttribute("style")){
        cols.removeAttribute("style");
      } else {
        cols.style.backgroundColor = color.value;
      }
    });



    rows.appendChild(cols); // appends columns to rows

  } table.appendChild(rows); //appends rows to table
}

  allbody.appendChild(table); //appends table to body

}
