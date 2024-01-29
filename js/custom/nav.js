//js有一个小问题：就是只要鼠标滚动不论哪里都会响应，即便你滚动的是子元素

//2022.9.11 已修复，需要jq，请自行引入
// - <script type="text/javascript" src="/js/custom/jquery.min.js"></script> #一定要放在所有引入的js前面！！


document.getElementById("name-container").setAttribute("style", "display:none");

var position = $(window).scrollTop();

$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll > position) {


    document.getElementById("name-container").setAttribute("style", "");
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");

  } else {


    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");

  }

  position = scroll;

});
function scrollToTop(){
    document.getElementsByClassName("menus_items")[1].setAttribute("style","");
    document.getElementById("name-container").setAttribute("style","display:none");
    btf.scrollToDest(0, 500);
}

document.getElementById("page-name").innerText=document.title

