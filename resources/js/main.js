$(function(){


    var mixer = mixitup('.container');


});

$(function(){
    
    $('.menu-list a, .nav-bar a,img.logo, .menu-items a').on('click', function(){
       $('html,body').animate({
         scrollTop: $($.attr(this, 'href')).offset().top
       }, 1000 );
 
       return false;
 
     });
 
    });

    function openMenu(){
        document.getElementById("hamburger").style.width="100%";
    }
    
    function closeMenu(){
        document.getElementById("hamburger").style.width="0%";
    }