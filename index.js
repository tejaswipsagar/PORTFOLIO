$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            var a = document.querySelector(".navbar");
            a.style.paddingTop = "10px";
            a.style.paddingBottom = "10px";
            var b = document.querySelector(".navbar-brand-span");
            b.style.color = "white";
            document.getElementById("first-section").style.height = "542px";
            $('.navbar').addClass("sticky");
        }else{
            var a = document.querySelector(".navbar");
            a.style.paddingTop = "20px";
            a.style.paddingBottom = "20px";
            var b = document.querySelector(".navbar-brand-span");
            b.style.color = "crimson";
            document.getElementById("first-section").style.height = "522px";
            $('.navbar').removeClass("sticky");

        }
    })
});
