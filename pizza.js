<!-- SHOW AND HIDE INGREDIENTS-->	
	<!-- PEPPERONNI -->
 $(document).ready(function(){
	 $(".btn-pepperonni").click(function(){
	      $(".pep").toggle();
	  });


	<!-- MUSHROOMS -->
	 $(".btn-mushrooms").click(function(){
	        $(".mushroom").toggle();
	    });

	<!-- GREEN PEPPERS -->
	 $(".btn-green-peppers").click(function(){
	        $(".green-pepper").toggle();
	    });

	<!-- WHITE SAUCE -->
	 $(".btn-sauce").click(function(){
	        $(".sauce").toggleClass("sauce-white");
	    });

	<!-- GLUTEN-FREE CRUST -->
	 $(".btn-crust").click(function(){
	        $(".crust").toggleClass("crust-gluten-free");
	    });



<!--REMOVE ACTIVE CLASS-->
	 $(".btn-pepperonni").click(function(){
	      $(".btn-pepperonni").toggleClass("active");
	  });

	 $(".btn-mushrooms").click(function(){
	        $(".btn-mushrooms").toggleClass("active");
	    });

	 $(".btn-green-peppers").click(function(){
	        $(".btn-green-peppers").toggleClass("active");
	    });

	 $(".btn-sauce").click(function(){
	        $(".btn-sauce").toggleClass("active");
	    });
	$(".btn-crust").click(function(){
	        $(".btn-crust").toggleClass("active");
	    });
});


<!--PRICE UPDATE -->
	$(".btn-pepperonni").click(function(){
		      $(".pepPrice").toggle();
		  });
	$(".btn-mushrooms").click(function(){
		        $(".mushPrice").toggle();
		    });

	$(".btn-green-peppers").click(function(){
	        $(".greenPrice").toggle();
	    });

	$(".btn-sauce").click(function(){
	        $(".saucePrice").toggleClass("hide")
	});

	$(".btn-crust").click(function(){
	        $(".crustPrice").toggleClass("hide")
	});


<!--TOTAL PRICE UPDATE-->

// La idea aquí es crear una variable tal que si el botón tiene la clase active 
//añada el precio de ese ingrediente al precio final

var totalPrice = 13;
var pepperonniPrice = 1;
var mushroomsPrice = 1;
var greenpepperPrice = 1;
var whitesaucePrice = 3;
var glutenfreePrice = 5;
	
	$(".btn-pepperonni").click(function() {
	   if ($(".btn-pepperonni").hasClass( "active" ) === false) {
			totalPrice = totalPrice + pepperonniPrice;
	   } else {
			totalPrice = totalPrice - pepperonniPrice;
	   }
	   $(".totalPrice").text("$"+totalPrice);
	});
	
	$(".btn-mushrooms").click(function() {
	   if ($(".btn-mushrooms").hasClass( "active" ) === false) {
			totalPrice = totalPrice + mushroomsPrice;
	   } else {
			totalPrice = totalPrice - mushroomsPrice;
	   }
	   $(".totalPrice").text("$"+totalPrice);
	});
	
	$(".btn-green-peppers").click(function() {
	   if ($(".btn-green-peppers").hasClass( "active" ) === false) {
			totalPrice = totalPrice + greenpepperPrice;
	   } else {
			totalPrice = totalPrice - greenpepperPrice;
	   }
	   $(".totalPrice").text("$"+totalPrice);
	});
	
	$(".btn-sauce").click(function() {
	   if ($(".btn-sauce").hasClass( "active" ) === true) {
			totalPrice = totalPrice - whitesaucePrice;
	   } else {
			totalPrice = totalPrice + whitesaucePrice;
	   }
	   $(".totalPrice").text("$"+totalPrice);
	});
	
		$(".btn-crust").click(function() {
	   if ($(".btn-crust").hasClass( "active" ) === true) {
			totalPrice = totalPrice - glutenfreePrice;
	   } else {
			totalPrice = totalPrice + glutenfreePrice;
	   }
	   $(".totalPrice").text("$"+totalPrice);
	});
	$(".totalPrice").text("$"+totalPrice);