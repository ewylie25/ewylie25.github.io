var main = function(){
    var x;
    var enter_key = {
    					'.name':'.about_me',
    					'.home_link':'.home',
    					'.res_link': '.resume',
    					'.li_glyph':'.linked_in',
    					'.git_glyph':'.github',
    					'.goog_glyph':'.google_plus',
    					'.fb_glyph':'.facebook',
    					'.sk_glyph':'.skype'
    				};
    
    for(x in enter_key){
    	$(x).mouseenter(function(){
        	var currentSlide = $('.active-slide');
        	var nextSlide = $(enter_key[x]);
        
        	currentSlide.fadeOut(600);
        	currentSlide.removeClass("active-slide");
        	nextSlide.fadeIn(600);
        	nextSlide.addClass('active-slide');
    	});
    	
    	$(x).mouseleave(function(){
        	var currentSlide = $('.active-slide');
        	var nextSlide = $('.intro');
        
        	currentSlide.fadeOut(600);
        	currentSlide.removeClass("active-slide");
        	nextSlide.fadeIn(600);
        	nextSlide.addClass('active-slide');
    	});
    } 
};


$(document).ready(main);