var main = function(){
    var name = $( '.name' );
    var resume = $('.res_link');
    var linked_in =  $('.li_glyph');
    var github = $('.git_glyph');
    var google = $('.goog_glyph');
    var facebook = $('.fb_glyph');
    var skype = $('.sk_glyph');

    name.mouseenter(function(){
    	$(this).animate({color:'#FF0066'});
        var currentSlide = $('.active-slide');
        var nextSlide = $('.about_me');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
        });
    name.mouseleave(function(){
    	$(this).animate({color:'#fff'});
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    resume.mouseenter(function(){
    	$(this).children().animate({color:'#FF9900'});
        var currentSlide = $('.active-slide');
        var nextSlide = $('.resume');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    resume.mouseleave(function(){
    	$(this).children().animate({color:'#fff'});
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });

    linked_in.mouseenter(function(){
    	$(this).children().animate({color:'#66FF33'});
        var currentSlide = $('.active-slide');
        var nextSlide = $('.linked_in');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    linked_in.mouseleave(function(){
    	$(this).children().animate({color:'#222'});
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    github.mouseenter(function(){
    	$(this).children().animate({color:'#00FFFF'});
        var currentSlide = $('.active-slide');
        var nextSlide = $('.github');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    github.mouseleave(function(){
    	$(this).children().animate({color:'#222'});
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    google.mouseenter(function(){
    	$(this).children().animate({color:'#0000FF'});
        var currentSlide = $('.active-slide');
        var nextSlide = $('.google_plus');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    google.mouseleave(function(){
    	$(this).children().animate({color:'#222'});
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    facebook.mouseenter(function(){
    	$(this).children().animate({color:'#6600CC'});
        var currentSlide = $('.active-slide');
        var nextSlide = $('.facebook');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    facebook.mouseleave(function(){
    	$(this).children().animate({color:'#222'});
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    
    skype.mouseenter(function(){
    	$(this).children().animate({color:'#3D003D'});
        var currentSlide = $('.active-slide');
        var nextSlide = $('.skype');

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });
    skype.mouseleave(function(){
    	$(this).children().animate({color:'#222'});
        var currentSlide = $(".active-slide");
        var nextSlide = $(".intro");

        currentSlide.fadeOut(600);
        currentSlide.removeClass("active-slide");
        nextSlide.fadeIn(600);
        nextSlide.addClass("active-slide");
    });

    var play = $('.play');
    var new_play = $('.hover_play');

    play.mouseenter(function(){
        new_play.removeClass('hidden');
        $(this).fadeOut(0);
        new_play.fadeIn(0);
    });
    new_play.mouseleave(function(){
        $(this).fadeOut(0);
        $(this).addClass('hidden');
        play.fadeIn(0);
    });

    var work = $('.work');
    var new_work = $('.hover_work');

    work.mouseenter(function(){
        new_work.removeClass('hidden');
        $(this).fadeOut(0);
        new_work.fadeIn(0);
    });
    new_work.mouseleave(function(){
        $(this).fadeOut(0);
        $(this).addClass('hidden');
        work.fadeIn(0);
    });

};


$(document).ready(main);