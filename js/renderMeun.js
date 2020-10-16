var menuDom = ''; // 树形菜单节点
var navMenuWrap = document.getElementById('nav_meun_wrap')
var classList = navMenuWrap.className.split(' ')
renderMenu(meunList)
navMenuWrap.innerHTML = menuDom
function renderMenu (data) {
  if (data.length) {
    menuDom = ''
    menuDom += `<ul>`
    for (var i = 0; i < data.length; i++) {
      if (data[i].children && data[i].children.length) {
        menuDom += `<li>`
        menuDom += `<div class="sub_menu">`
        menuDom += `<i class="iconfont menu_icon ${data[i].icon}"></i>`
        menuDom += `<span class="menu_title">${data[i].title}</span>`
        menuDom += `<i class="iconfont arrow_icon icon-jiantou"></i>`
        menuDom += `</div>`
        menuDom += renderMenu(data[i].children) // 有children结构的
        menuDom += `</li>`
      } else {
        menuDom += `<a href=${data[i].path}>`
        menuDom += `<li>`
        menuDom += `<i class="iconfont menu_icon ${data[i].icon}"></i>`
        menuDom += `<span class="menu_title">${data[i].title}</span>`
        menuDom += `</li>`
        menuDom += `</a>`
      }
    }
    menuDom += `</ul>`
    return menuDom;
  }
}

