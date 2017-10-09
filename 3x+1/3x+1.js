

var x = 0;
var repeat=0;
var cycle=1;

function divide(){
  x=x/2;
}
function conquer(){
  x=(3*x)+1;
}

function unsolved(){
  cycle=1;
  while(x!==1){
    if(x%2===0){
      divide();
      cycle+=1;
    }else{
      conquer();
      cycle+=1;
    };
  };
  return cycle;
}

//Insert the the 3x+1 graph into the DOM:
function createGraph(lines){
  $('.row').removeClass('hidden');
  $('#lines_wanted').removeClass('hidden');
  $('#summary').addClass('hidden');
  $('#graph').empty();
  $('#graph').removeClass('hidden');
  $('#lines_desired').val('');
  if(lines<50){
    for(i=1; i<=lines; i+=1){
        x=i;
        unsolved();
        $('#graph').append("<div class='bar2'style='height:"+((cycle-1)*3)+"px' id='"+i+"'></div></div>");
    };
  }else{
  for(i=1; i<=lines; i+=1){
      x=i;
      unsolved();
      $('#graph').append("<div class='bar'style='height:"+(cycle-1)+"px' id='"+i+"'></div></div>");
  };
}
  var box = $("<div id='height'></div>");

  $('.bar, .bar2').on("mouseenter",function(){
      $(this).css("background-color","#08f9e3");
      var height = $(this).css("height");
      height = height.replace(/px/g,'');
      parseInt(height);
      var amount = $(this).attr('id');
      $('.bars').append(box);
      $(box).append("number: "+ amount);
      $(box).append(" iterations: "+ height);
  });

  $('.bar, .bar2').on("mouseleave",function(){
       $(this).css("background-color","deepskyblue");
       $('#height').empty();
       $('div').remove('#height');
  });
}
function back(){
  $('#graph').addClass('hidden');
  $('#lines_wanted').addClass('hidden');
  $('#summary').removeClass('hidden');
}

function graph(){
let bars = $("#lines_desired").val();
  let html = [
    '<div class="success-msg">',
      bars,' numbers iterated! Drag mouse over any bar to see its corresponding information.',
      '<button onclick="back()" class="back-btn btn btn-success">Go Back</button>',
      '</div>'

  ].join('');
  event.preventDefault();
  console.log('lines: ',bars);
  $('#lines_wanted').html(html);
  createGraph(bars);
}
