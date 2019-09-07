
let modal = document.getElementById('modal');

let img = document.getElementById('main-img');
let modalimg = document.getElementById('modal-img');

img.addEventListener('click',function() {
  modal.style.display = 'block';
  modalimg.src = this.src;
})

modal.addEventListener('click',function() {
  this.style.display = 'none';
})
