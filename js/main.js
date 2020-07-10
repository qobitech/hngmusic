// DROP DOWN MENU
var header = document.getElementById('header_nav');
var main_menu = document.getElementById('main_menu');
var dot = document.getElementById('logo_dot');
var menu_icon_container = document.getElementById('menu_icon_container');

var navbtn = document.getElementsByClassName('nav_btn');
var join_us_btn = document.getElementsByClassName('outside_btn_nav_qobi');
var tp = document.getElementsByClassName('inside_btn_nav_qobi');
var nav = document.getElementsByClassName('main_nav_mb');

var navcontrol = document.getElementById('navbarToggleExternalContent');
var navitem = document.getElementsByClassName('nav-item');


var lastscrollup = 0;


function closemenu(){
    navcontrol.classList.remove('show');
    tp[0].style.transition = ".4s ease-in";            
    tp[0].style.opacity = 0;
    join_us_btn[0].style.transition = ".4s ease-in";            
    join_us_btn[0].style.opacity = 1;
}

window.addEventListener('scroll',()=>{
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if(st > lastscrollup){
        header.classList.remove('menuDown');
        header.classList.add('menuUp');
        closemenu();
    }else{
        header.classList.remove('menuUp');
        header.classList.add('menuDown');
        main_menu.style.transition = `.4s ease-in-out`;
        main_menu.style.backgroundColor= st <= 0 ? `rgba(1,169,180,0)` : `rgba(1,169,180,.9)` ;     
        dot.style.transition = `.4s ease-in-out`;
        dot.style.backgroundColor= st <= 0 ? `#87DFD6` : `#FBFD8A` ;     
        menu_icon_container.style.transition = `.4s ease-in-out`;
        menu_icon_container.style.backgroundColor= st <= 0 ? `#87DFD6` : `#FBFD8A` ;     
    }

    lastscrollup = st <= 0 ? 0 : st;
})


// MOBILE-NAV HEADER EFFECT

for(let i=0; i < nav.length; i++){
        navbtn[i].addEventListener('click',()=>{
            setTimeout(()=>{
                if(nav[i].clientHeight > 300){
                    join_us_btn[i].style.transition = ".4s ease-out";
                    join_us_btn[i].style.opacity = 0;
                    tp[i].style.transition = ".4s ease-out";
                    tp[i].style.opacity = 1;
                }
                if(nav[i].clientHeight < 300){
                    join_us_btn[i].style.transition = ".4s ease-in";            
                    join_us_btn[i].style.opacity = 1;
                    tp[i].style.transition = ".4s ease-in";            
                    tp[i].style.opacity = 0;
                }
            },500)
        })
}
for(let j=0; j < navitem.length; j++){
    navitem[j].addEventListener('click',()=>{
        closemenu();
    })
}

// close menu
var close_menu_icon = document.getElementById('close_menu_icon');

close_menu_icon.addEventListener('click',()=>{
    closemenu();
})
