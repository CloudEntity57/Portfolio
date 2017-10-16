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
    imageSrc: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/c_scale,w_1150/v1508174464/IMG_8200_pcg9nh.jpg",
    positionY:"-75vh"
  }
);
$('.divider_1').parallax(
  {
    imageSrc: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1507927559/sunset_monet_w0oo1f.jpg"
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

(()=>{
  window.addEventListener('resize',()=>{
    // console.log('width: ',window.innerWidth);
    // console.log('height: ',window.innerHeight);
    // let width=window.innerWidth;
    // let height=window.innerHeight;
    // if(width/height>1.618 && width/height<1.619){
    //   console.log("It's the Golden Ratio!!");
    // }else{
    //   console.log(width/height);
    // }
    // let bodyHTML = document.body.innerHTML;
    // bodyHTML.innerHTML+=('<div>'+window.innerWidth+'</div>');
  });
  window.addEventListener('scroll',()=>{
    console.log($(window).scrollTop());
  })
})();
