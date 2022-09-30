function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let table = Array.from(document.querySelectorAll("tr"));
      let search = document.getElementById("searchField").value;
      for(let row of table) {
         let res = row.textContent;
         if (res.includes(search)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      }
   }
}