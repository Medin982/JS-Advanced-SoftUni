function solve() {
  let input = document.getElementById("input").value;
  let arr = input.split(".").filter(e => e.length > 0);
  let output = document.getElementById("output");
  output.innerHTML = ""

  for (let i = 0; i < arr.length; i += 3) {
    let res = [];
    for (let m = 0; m < 3; m++) {
      if (arr[i + m]) {
        res.push(arr[i + m]);
      }
    }
    let result = res.join(". ") + ".".trim();
    output.innerHTML += `<p>${result}</p>`;
  }
}