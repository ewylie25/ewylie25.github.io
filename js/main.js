var main = function(){

    $('.container.sub').hide();

    $('.ed-sub').hide();

    $('div.about-me').show(600);
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

    $('.main-link').click(function(){
        var target = "#" + $(this).data("target");
        //$(".container.sub").not(target).hide();
        $(target).toggle();
    });

    $('.ed-link').click(function(){
        var target = "#" +$(this).data("target");
        $(target).toggle();
    });
};


$(document).ready(main);
