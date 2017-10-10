$(".navbar li").click(function(){
  $(".navbar li").removeClass("active");
  $(this).addClass("active");
});

$(".title-text li").click(function(){
  $(".navbar li").removeClass("active");
});

//add parallax to scrolling title image:
$('.title-bar').parallax(
  {
    imageSrc: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/c_scale,w_1500/v1507588997/Josh_eclipse_olovsk.jpg",
    positionY:"50vh"
  }
);
$(".navbar li").hover(function(){
  $(".navbar li").removeClass("active");
  $(this).addClass("active");
});
// $('.title-bar').css('top','50vh');

$('a').on('click',function(e){
        e.preventDefault();
        if(/^#/.test($(this).attr('href'))){
          var target = this.hash;
          var $target = $(target);

          $('html, body').stop().animate({
              'scrollTop': $target.offset().top
          }, 900, 'swing', function (){
              window.location.hash = target;
          });
        }else{
          window.location = $(this).attr('href');
        };

    });
