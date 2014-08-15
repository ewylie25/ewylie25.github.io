var main = function(){

    var name = $( 'span.about-me');
    var about = $('div.about-me');
    name.mouseenter(function(){
    	$(this).animate({color:'#FF0066'});
        about.show(600);
        });
    name.mouseleave(function(){
    	$(this).animate({color:'#fff'});
        about.hide(600);
    });

    var download = $('span.resume');
    var resume = $('div.resume');
    download.mouseenter(function(){
    	$(this).children().animate({color:'#FF9900'});
        resume.show(600);
    });
    download.mouseleave(function(){
    	$(this).children().animate({color:'#fff'});
        resume.hide(600);
    });

    var linked_in =  $('span.linked_in');
    var linked_in_info = $('div.linked_in');
    linked_in.mouseenter(function(){
    	$(this).children().animate({color:'#66FF33'});
        linked_in_info.show(600);
    });
    linked_in.mouseleave(function(){
    	$(this).children().animate({color:'#222'});
        linked_in_info.hide(600);
    });


    var github = $('span.github');
    var github_info = $('div.github');
    github.mouseenter(function(){
    	$(this).children().animate({color:'#00FFFF'});
        github_info.show(600);
    });
    github.mouseleave(function(){
    	$(this).children().animate({color:'#222'});
        github_info.hide(600);
    });

    var google = $('span.google_plus');
    var google_info = $('div.google_plus');
    google.mouseenter(function(){
    	$(this).children().animate({color:'#0000FF'});
        google_info.show(600);
    });
    google.mouseleave(function(){
    	$(this).children().animate({color:'#222'});
        google_info.hide(600);
    });

    var facebook = $('span.facebook');
    var fb_info = $('div.facebook');
    facebook.mouseenter(function(){
    	$(this).children().animate({color:'#6600CC'});
        fb_info.show(600);
    });
    facebook.mouseleave(function(){
    	$(this).children().animate({color:'#222'});
        fb_info.hide(600);
    });


    var skype = $('span.skype');
    var skype_info = $('div.skype');
    skype.mouseenter(function(){
    	$(this).children().animate({color:'#3D003D'});
        skype_info.show(600);
    });
    skype.mouseleave(function(){
    	$(this).children().animate({color:'#222'});
        skype_info.hide(600);
    });

    //var images = $('.thumbnail');
    //images.mouseenter(function(){
    //    $(this).children('img.regular').hide();
    //    $(this).children('img.hover').show();
    //});
    //images.mouseleave(function(){
    //    $(this > 'img.hover').hide();
    //    $(this > 'img.regular').show();
    //});

    var play = $('.play');
    var new_play = $('.hover_play');
    play.mouseenter(function(){
        $(this).hide();
        new_play.show();
    });
    new_play.mouseleave(function(){
        $(this).hide();
        play.show();
    });

    var work = $('.work');
    var new_work = $('.hover_work');
    work.mouseenter(function(){
        $(this).hide();
        new_work.show();
    });
    new_work.mouseleave(function(){
        $(this).hide();
        work.show();
    });

    var study = $('.study');
    var new_study = $('.hover_study');
    study.mouseenter(function(){
        $(this).hide();
        new_study.show();
    });
    new_study.mouseleave(function(){
        $(this).hide();
        study.show();
    });

    var travel = $('.travel');
    var new_travel = $('.hover_travel');
    travel.mouseenter(function(){
        $(this).hide();
        new_travel.show();
    });
    new_travel.mouseleave(function(){
        $(this).hide();
        travel.show();
    });

    var service = $('.service');
    var new_service = $('.hover_service');
    service.mouseenter(function(){
        $(this).hide();
        new_service.show();
    });
    new_service.mouseleave(function(){
        $(this).hide();
        service.show();
    });

    var blog = $('.blog');
    var new_blog = $('.hover_blog');
    blog.mouseenter(function(){
        $(this).hide();
        new_blog.show();
    });
    new_blog.mouseleave(function(){
        $(this).hide();
        blog.show();
    });

};


$(document).ready(main);