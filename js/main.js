var main = function(){
    var navbar = $('.navbar-inverse');
    navbar.children().children().children('span').mouseenter(function(){
        $('div.'+ $(this).attr('class')).show(600);
    });
    navbar.children().children().children().mouseleave(function(){
        $('div.' + $(this).attr('class')).hide(600);
    });

    navbar.children().children().children('a').children().mouseenter(function(){
        $('div.'+ $(this).attr('class')).show(600);
    });
    navbar.children().children().children('a').children().mouseleave(function(){
        $('div.'+ $(this).attr('class')).hide(600);
    });

    var images = $('.thumbnail');
    images.mouseenter(function(){
        $(this).children('a').children('img.regular').hide();
        $(this).children('a').children('img.hover').show();
    });
    images.mouseleave(function(){
        $(this).children('a').children('img.hover').hide();
        $(this).children('a').children('img.regular').show();
    });

};


$(document).ready(main);