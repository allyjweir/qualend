/*
	Contains all of the code for all of the pages. Please place the code under the correct heading and describe what each code block does to avoid repetition.
*/

console.log('\'Allo \'Allo!');

//Main
$(document).ready(function() {

// Shop view (shop.html)

	//Put listeners on each 'Buy Now' button to increase count of basket in navbar
	var counter=0
	$('.btn-buy').click(function(){
		console.log('buy button clicked!');
		counter++;
		$('#cart-count').text(counter);
		alert("Product added to cart. Click cart in navigation bar to proceed to checkout!");
	});

});
