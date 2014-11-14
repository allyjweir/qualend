/*
	Contains all of the code for all of the pages. Please place the code under the correct heading and describe what each code block does to avoid repetition.
*/

console.log('\'Allo \'Allo!');


// Shop view (shop.html)

//Main
$(document).ready(function() {
	var counter=0

	//Put listeners on each 'Buy Now' button to increase count of basket in navbar
	$('.btn-buy').click(function(){
		console.log('buy button clicked!');
		counter++;
		$('#cart-count').text(counter);
		//Show popup to signal success here.
		//Add shake notification here.
	});

});
