function search() {
   let list = Array.from(document.querySelectorAll("ul li"));
   let searchText = document.getElementById("searchText").value;
   let count = 0;
   for (let text of list) {
      let current = text.textContent;
      if (current.includes(searchText)) {
         count++;
         text.style.textDecoration = "underline";
         text.style.fontWeight = "bold";
      } else {
         text.style.textDecoration = "none";
         text.style.fontWeight = "underline";
      }
   }

   document.getElementById("result").textContent = `${count} matches found`;
}
