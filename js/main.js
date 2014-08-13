

var enter = function(new_slide){
	var currentSlide = $('.active-slide');
    var nextSlide = $(new_slide);
        
    currentSlide.fadeOut(600);
    currentSlide.removeClass("active-slide");
    nextSlide.fadeIn(600);
    nextSlide.toggleClass('active-slide');
};

var exit = function(){
	var currentSlide = $(".active-slide");
    var nextSlide = $(".intro");
        
    currentSlide.fadeOut(600);
    currentSlide.removeClass("active-slide");
    nextSlide.fadeIn(600);
    nextSlide.addClass("active-slide");
};



var main = function(){
    $('.name').mouseenter(enter('.about_me'));
    $('.name').mouseleave(exit());
    
    $('.home_link').mouseenter(enter('.home'));
    $('.home_link').mouseleave(exit());
    
    $('.res_link').mouseenter(enter('.resume'));
    $('.res_link').mouseleave(exit());
    
    $('.li_glyph').mouseenter(enter('.linked_in'));
    $('.li_glyph').mouseleave(exit());
    
    $('.git_glyph').mouseenter(enter('.github'));
    $('.git_glyph').mouseleave(exit());
    
    $('.goog_glyph').mouseenter(enter('.google_plus'));
    $('.goog_glyph').mouseleave(exit());
    
    $('.fb_glyph').mouseenter(enter('.facebook'));
    $('.fb_glyph').mouseleave(exit());
    
    $('.sk_glyph').mouseenter(enter('.skype'));
    $('.sk_glyph').mouseleave(exit());
	 
};


$(document).ready(main);