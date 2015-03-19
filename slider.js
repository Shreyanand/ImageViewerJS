$(document).ready(function() {
  var currentIndex = 0,
  items = $('.container div'),
  itemAmt = items.length;
  items.hide();
  $("#first").show();
 //$("#para:contains('Green')").addClass('green');
 //$("#para:contains('Red')").addClass('red');
// $("div:contains('Blue')").addClass('blue');

function cycleItems() {
  var i = $('.container div').eq(currentIndex);
  items.hide();
  i.css('display','inline-block');
}



$('#NEXT').click(function() {
  
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('#PREV').click(function() {
  
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});
	
	
	
	
	
	});