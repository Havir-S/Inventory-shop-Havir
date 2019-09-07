//PHOTOS
var slideIndex = 0;
startSlides();

function startSlides() {
  var i;
  var slides = document.getElementsByClassName('photo');
  for (i=0; i <slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display='block';
  setTimeout(startSlides, 8000);
}

//SCROLL PROGRESS
window.addEventListener('scroll',function() {
  siteScroll();
})



function siteScroll() {
  var nowScrolled = document.body.scrollTop || document.documentElement.scrollTop;
  var maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = ((nowScrolled / maxHeight) * 100);
  document.getElementsByClassName('scrollprogress')[0].style.width = scrolled + '%';
}



// SLIDE REVIEWS

var reviewIndex = 1;
reviewChange(reviewIndex);

function reviewChangeIndex(n) {
  reviewChange(reviewIndex += n);
}

function reviewChange(n) {
  var reviews = document.getElementsByClassName('slide-box');
  var i;

if (n > reviews.length) {reviewIndex = 1}
if (n < 1) {reviewIndex = reviews.length}


  for (i = 0; i < reviews.length; i++) {
    reviews[i].className = reviews[i].className.replace(' ondisplay', "");
    reviews[i].className = reviews[i].className.replace(' come-in', "");
  }

  reviews[reviewIndex-1].className += ' ondisplay';
  reviews[reviewIndex-1].className += ' come-in';

}

window.setInterval(function() {
  reviewChangeIndex(1);
},10000);

// ADMIN ROOM REDIRECT RANDOM TEST

// var adminRoom = document.getElementsByClassName('admin-room')[0];
//
// adminRoom.addEventListener('click',function() {
//   window.location.href = 'https://www.google.com';
// });

// NEWSLETTER FAST-VALIDATION

var newsbutton = document.querySelector('.newsletter input');
var newsbutton2 = document.querySelector('.newsletter button').onclick = function() {
  var i;
  var ifError = document.getElementsByClassName('ifError')[0];

  for (i = 0; i < ifError.childElementCount; i++) {
    ifError.removeChild(ifError.children[i]);
  }

  if  (!newsbutton.value || !newsbutton.checkValidity() ) {
    var node = document.createElement('span');
    var text = document.createTextNode('Your email seems to be invalid, please fix it before trying again!');
    node.appendChild(text);
    var style = document.createAttribute('style');
    style.value = 'color: rgba(255,0,0,0.6); font-size: 0.8rem;';
    node.setAttributeNode(style);
    ifError.appendChild(node);
  }

  if (newsbutton.checkValidity() && (newsbutton.value)) {
    document.forms[0].submit();
  }
}

newsbutton.addEventListener('keydown', function() {
  if (newsbutton.value) {
    document.getElementsByClassName('label')[0].className += ' fade-in';
  } else {
    document.getElementsByClassName('label')[0].className = document.getElementsByClassName('label')[0].className.replace(' fade-in', "");
  }

});


// KEYBOARD BAR
var barIndex = 0;
function keyboardBar(n) {
  var keyboardBar = document.getElementsByClassName('imgbox-bar')[0];
  if (barIndex - 1 < 0 && n == -1) {
    return;
  }
  var keyboardTabsCount = document.getElementsByClassName('keyboard-tab').length;

  if (barIndex >= keyboardTabsCount - 2 && keyboardTabsCount % 3 == 0 && n == 1) {
    return;
  }

  barIndex += n;

  var barmove = -((880/3) * barIndex + 40 * barIndex);
  keyboardBar.style.left = barmove + 'px';
  console.log(barIndex);

}

// MOUSE APPEAR

window.onload = function() {
  if (document.documentElement.clientHeight + document.documentElement.scrollTop > 1200) {
    document.getElementsByClassName('mouse-pic-l')[0].className = document.getElementsByClassName('mouse-pic-l')[0].className += ' mouse-l-anim';
    document.getElementsByClassName('mouse-pic-r')[0].className = document.getElementsByClassName('mouse-pic-r')[0].className += ' mouse-r-anim';
  }
}

window.onscroll = function() {
  if (document.getElementsByClassName('mouse-pic-l')[0].className.indexOf('mouse-l-anim') > -1) {return;}
  if (document.documentElement.scrollTop + document.documentElement.clientHeight > 1200) {
    document.getElementsByClassName('mouse-pic-l')[0].className = document.getElementsByClassName('mouse-pic-l')[0].className += ' mouse-l-anim';
    document.getElementsByClassName('mouse-pic-r')[0].className = document.getElementsByClassName('mouse-pic-r')[0].className += ' mouse-r-anim';
    }
  }

// ALERT 3 SECONDS AFTER LOADING

// window.onload = function() {
//   setTimeout(function() {
//     window.confirm('Do you see my alert?');
//   },3000);
// }
