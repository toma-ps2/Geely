$(document). ready(function(){
    $('.banner__slider').slick({
        infinite: true,
        speed: 1000,
    });
});
$(document). ready(function(){
    $('.color__car_slider').slick({
        infinite: true,
        arrows:false,
        dots:true,
        speed: 300,
        slidesToShow:1,
    });
});
document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('.wrapper').classList.toggle('open')
    })
})