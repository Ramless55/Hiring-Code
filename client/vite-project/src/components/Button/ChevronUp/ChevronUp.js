document.getElementById("chevron").addEventListener("click", scrollUp => {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0){
        window.scrollTo (0, 0);
    }
});

window.onscroll = function() {

    let scroll = document.documentElement.scrollTop;

    if(scroll > 500) {
        chevron.style.transform = "scale(1)";
    }else if(scroll < 500) {
        chevron.style.transform = "scale(0)";
    }
}