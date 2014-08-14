var main = function(){
    var name = $( '.name' );
    var home = $('.home_link');
    var resume = $('.res_link');
    var linked_in =  $('.li_glyph');
    var github = $('.git_glyph');
    var google = $('.goog_glyph');
    var facebook = $('.fb_glyph');
    var skype = $('.sk_glyph');

    name.mouseenter(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = $('.about_me');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
        });
    name.mouseleave(function(){
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    home.mouseenter(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = $('.home');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    home.mouseleave(function(){
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    resume.mouseenter(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = $('.resume');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    resume.mouseleave(function(){
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });

    linked_in.mouseenter(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = $('.linked_in');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    linked_in.mouseleave(function(){
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    github.mouseenter(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = $('.github');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    github.mouseleave(function(){
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    google.mouseenter(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = $('.google_plus');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    google.mouseleave(function(){
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    facebook.mouseenter(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = $('.facebook');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    facebook.mouseleave(function(){
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    skype.mouseenter(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = $('.skype');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    skype.mouseleave(function(){
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
	 
};


$(document).ready(main);