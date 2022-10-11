  function notify(message) {
  let div = document.getElementById('notification');
  div.textContent = message;
  div.style.display = "block";
  div.addEventListener('click', () => {
    let currentStyle = div.style.display;
    currentStyle === 'block' ? div.style.display = 'none': div.style.display = 'none'; 
  });
}