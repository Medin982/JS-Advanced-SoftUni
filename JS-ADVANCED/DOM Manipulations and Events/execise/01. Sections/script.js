function create(words) {
   let res = document.getElementById('content');
  for (word of words) {
   let div = document.createElement('div');
   let p = document.createElement('p');
   p.appendChild(document.createTextNode(word));
   p.style.display = 'none';
   div.appendChild(p);
   div.addEventListener('click', function(event) {
      event.target.getElementsByTagName('p')[0].style.display = 'inline';
   })
   res.appendChild(div);
  }
}