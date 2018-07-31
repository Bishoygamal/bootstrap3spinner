$(document).ready(function(){

    $('.carousel').carousel({
     interval:5000    
    });

    //show clor option
    $('.gear-check').click(function(){
    	$('.color-option').toggle();
    })

   var colorLI=$('.option-box .color-option ul li');
    colorLI.eq(0).css('backgroundColor','#E41B17').end()
    .eq(1).css('backgroundColor','#C717E4').end()
    .eq(2).css('backgroundColor','#17A6E4').end()
    .eq(3).css('backgroundColor','#C0E417');

    colorLI.click(function(){
 
      /*console.log($(this).attr("data-value"));*/
    	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });

     var scrollButton=$("scroll-top");
    $(window).scroll(function(){
        console.log($(this).scrollTop());
       $(this).scrollTop() > 900 ?  scrollButton.show() : scrollButton.hide();
   
    });


   
});

 //Loading Element

$(window).on('load',(function(){

	$("body").css("overflow","auto");
	$(".loading-overlay .spinner").fadeOut(2000,function(){
        $(this).parent().fadeOut(1000,function(){
            $(this).remove();
        });
    });
   
	
}));