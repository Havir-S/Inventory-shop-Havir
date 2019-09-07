
if (window.location.pathname.search('products') > 0) {
    document.querySelector('.admin-room a').style.color = 'black'
}

let sorting  = document.querySelector('select[name="sort"]');

sorting.addEventListener('change',function() {
  console.log('Ding');
});

function seeOnly(n) {
  var x = document.getElementsByClassName('itemType');
  for (z of x) {
    z.parentNode.style.display = 'none';
  }
  for (y of x) {
    if (n == y.innerHTML) {
      y.parentNode.style.display = 'block';
    }
  }
}

function showEverything() {
  var x = document.getElementsByClassName('itemType');
  for (z of x) {
    z.parentNode.style.display = 'block';
  }
}
