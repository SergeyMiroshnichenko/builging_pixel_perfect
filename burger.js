let nav=document.querySelector("#nav")
$(function() {
    $('#nav-icon7').click(function(){
        $(this).toggleClass('open');
        nav.classList.toggle('open')
    });
});