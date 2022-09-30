function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let res = "";
  let words = text.split(" ");
  switch (convention) {
    case "Camel Case":
    words.forEach((ele, index) => {
      if (index === 0) {
       return res += ele.toLowerCase();
      }
       return res += ele[0].toUpperCase() + ele.substring(1).toLowerCase();
    });
      break;
    case "Pascal Case":
      words.forEach(ele => {
        res += ele[0].toUpperCase() + ele.substring(1).toLowerCase();
      })
      break;
    default:
      res = "Error!";
  }

  document.getElementById("result").textContent = res;
}