let input = document.getElementById("input");
let pushBtn = document.getElementById("push");
let emptyBtn = document.getElementById("empty");
let peekBtn = document.getElementById("peek");

let arr = []; //[1, 2, 3, 4, 5];

pushBtn.onclick = () => {
  let { value } = input;

  if (!value) {
    alert("Input Empty!!!");
    return;
  }

  if (arr.length >= 5) {
    alert("Table full!!!");
    return;
  }
  arr.push(value);
  document.getElementById(`${arr.length}`).innerHTML = value;
};

emptyBtn.onclick = () => {
  if (!arr.length) {
    alert("Nothing to Empty");
    return;
  }

  arr.map((element, index) => {
    document.getElementById(`${index + 1}`).innerHTML = "";
  });
  arr.length = 0;
};

peekBtn.onclick = () => {
  if (!arr.length) {
    alert("Nothing to Peek");
    return;
  }

  alert(`Latest data: ${arr[arr.length - 1]}`);
};


