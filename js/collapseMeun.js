var li = document.getElementsByTagName('li')
var subMenu = document.querySelectorAll('.sub_menu')

for (var i = 0; i < li.length; i++) {
  li[i].index = i
  li[i].onclick = function (ev) {
    var ul = this.children[1];
    if (ul) {
      if (ul.className !== 'show_collapse') {
        ul.className = 'show_collapse';
      } else {
        ul.className = 'hide_collapse';
      }
    }
    var parent = this.parentNode;
    var lis = parent.children;
    for (var j = 0; j < lis.length; j++) {
      if (lis[j] != this) {
        var uls = lis[j].getElementsByTagName('ul');
        for (var k = 0; k < uls.length; k++) {
          uls[k].className = 'hide_collapse';
        }
      }
    }
    ev.cancelBubble = true;
  }
}

