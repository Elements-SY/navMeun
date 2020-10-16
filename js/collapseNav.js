var navMenuWrap = document.querySelector('.nav_meun_wrap')
var oBtn = document.getElementById('btn')
oBtn.onclick = function () {
  var classList = navMenuWrap.className.split(' ')
  if (classList.includes('collapse_nav')) {
    navMenuWrap.classList.remove('collapse_nav')
  } else {
    navMenuWrap.classList.add("collapse_nav");
  }
}