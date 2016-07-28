$(document).ready(function(){

    var speed=500;
    var autoswitch = true;
    var autoswitch_speed = 4000;
    
    
    $('.slide').first().addClass('active');
    
    $('.slide').hide();
    
    $('.active').show();
    
    //next button
    $('.next').on('click',next_slide);
    
    //prev button
    $('.prev').on('click',function(){
      $('.active').removeClass('active').addClass('oldActive');
       if($('.oldActive').is(":first-child")){
          $('.slide').last().addClass('active');
       }
        else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    });
    
    //auto
    if(autoswitch==true){
        setInterval(next_slide,autoswitch_speed);
    }
    
    //next_slide
    function next_slide(){
      $('.active').removeClass('active').addClass('oldActive');
       if($('.oldActive').is(":last-child")){
          $('.slide').first().addClass('active');
       }
        else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});