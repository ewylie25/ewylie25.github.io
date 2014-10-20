var main = function(){
    var navbar = $('.navbar');
    navbar.children().children().children('span').mouseenter(function(){
        $('div.'+ $(this).attr('class')).show(600);
    });
    navbar.children().children().children('span').mouseleave(function(){
        $('div.' + $(this).attr('class')).hide(600);
    });

    navbar.children().children().children('a').children().mouseenter(function(){
        $('div.'+ $(this).attr('class')).show(600);
    });
    navbar.children().children().children('a').children().mouseleave(function(){
        $('div.'+ $(this).attr('class')).hide(600);
    });

};


$(document).ready(main);
