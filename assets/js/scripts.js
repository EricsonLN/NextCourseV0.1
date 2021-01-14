const iconMenu = document.getElementById('icon-menu')
const toggleMenu = document.getElementById('toggleMenu')

if(iconMenu){
    iconMenu.addEventListener('click',()=>{
        toggleMenu.classList.toggle('main-menu__show');
    })
}


window.addEventListener('scroll',function(){
    const header = document.getElementById("header")
    const mainDataContactEdit = document.getElementById("mainDataContactEdit")
    const mainHeaderMenuEdit = document.getElementById("mainHeaderMenuEdit")
    const posicionObj1= header.getBoundingClientRect().top
    if(posicionObj1==0){
        header.classList.add("main-header--edir")
        mainDataContactEdit.classList.add("mainDataContactEdit")
        mainHeaderMenuEdit.classList.add("main-header__menu--edit")
    }else if(posicionObj1!=0){
        header.classList.remove("main-header--edir")
        mainDataContactEdit.classList.remove("mainDataContactEdit")
        mainHeaderMenuEdit.classList.remove("main-header__menu--edit")
    }
})



// animaciones

window.addEventListener('scroll',function(){
    const animacionServiceScroll1=document.getElementsByClassName('animacionScroll1')
    Array.from(animacionServiceScroll1)
    for (let i = 0; i < animacionServiceScroll1.length; i++) {
        const positionObj1= animacionServiceScroll1[i].getBoundingClientRect().top
        const tamañoPantalla= window.innerHeight/1.7;
        if(positionObj1 < tamañoPantalla){
            animacionServiceScroll1[i].classList.add('animacion')
    }
    }
})