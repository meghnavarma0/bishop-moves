import "./styles.css";

let grid = document.querySelector(".grid");
let no_of_rows = 10,
  no_of_cols = 10;

for (let i = 0; i < no_of_rows; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < no_of_cols; j++) {
    let subgrid = document.createElement("div");
    let key = String(i) + ":" + String(j);
    subgrid.classList.add("sub-grid");
    subgrid.setAttribute("id", key);
    if ((i + j) % 2 === 0) {
      subgrid.classList.add("white");
    } else {
      subgrid.classList.add("black");
    }

    row.appendChild(subgrid);
  }
  grid.appendChild(row);
}
let prev, prev_a, prev_b, prev_k, prev_k2, prev_k3, prev_k4;
grid.addEventListener("click", data => {
  let id = data.target.id;
  let [a, b] = id.split(":");
  let k = Math.min(a, b);
  // console.log(a, b);
  let target = document.getElementById(id);

  if (prev && prev_a && prev_b) {
    prev.classList.remove("red");
    for (let i = 1; i <= prev_k; i++) {
      let temp = String(+prev_a - +i) + ":" + String(+prev_b - +i);
      let temp_target = document.getElementById(temp);
      temp_target.classList.remove("red");
    }
    for (let i = 1; i <= prev_k2; i++) {
      let temp = String(prev_a - i) + ":" + String(+i + +prev_b);

      let temp_target = document.getElementById(temp);
      temp_target.classList.remove("red");
    }
    for (let i = 1; i <= prev_k3; i++) {
      let temp = String(+prev_a + +i) + ":" + String(+prev_b - +i);
      // console.log(temp)
      let temp_target = document.getElementById(temp);
      temp_target.classList.remove("red");
    }
    for (let i = 1; i <= prev_k4; i++) {
      let temp = String(+prev_a + +i) + ":" + String(+prev_b + +i);
      // console.log(temp)
      let temp_target = document.getElementById(temp);
      temp_target.classList.remove("red");
    }
  }

  target.classList.add("red");
  for (let i = 1; i <= k; i++) {
    let temp = String(+a - +i) + ":" + String(+b - +i);
    let temp_target = document.getElementById(temp);
    temp_target.classList.add("red");
  }
  let k2 = Math.min(a, no_of_cols - b - 1);
  for (let i = 1; i <= k2; i++) {
    let temp = String(+a - +i) + ":" + String(+i + +b);

    let temp_target = document.getElementById(temp);
    temp_target.classList.add("red");
  }
  let k3 = Math.min(no_of_rows - a - 1, b);
  for (let i = 1; i <= k3; i++) {
    let temp = String(+a + +i) + ":" + String(+b - +i);

    let temp_target = document.getElementById(temp);
    temp_target.classList.add("red");
  }
  let k4 = Math.min(no_of_rows - a - 1, no_of_cols - b - 1);
  for (let i = 1; i <= k4; i++) {
    let temp = String(+a + +i) + ":" + String(+b + +i);
    let temp_target = document.getElementById(temp);
    temp_target.classList.add("red");
  }

  prev = target;
  prev_a = a;
  prev_b = b;
  prev_k = k;
  prev_k2 = k2;
  prev_k3 = k3;
  prev_k4 = k4;
  console.log(target);
});
