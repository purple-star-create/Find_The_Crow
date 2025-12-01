(function($) {


// Scripts exécutés quand le document est chargé (sauf images)
$(document).ready(function(){

	$('img.crow').on('click', function(){
		console.log("crow was clicked")

		if($('img.crow').hasClass('etat4') ){
			window.location.href = 'https://purple-star-create.github.io/Find_The_Crow/site_game_page_5.html';
		}

		if($('img.crow').hasClass('etat3') ){
				$('img.crow').removeClass('etat3').addClass('etat4')	
		}

		if($('img.crow').hasClass('etat2') ){
				$('img.crow').removeClass('etat2').addClass('etat3')
		}	

		if($('img.crow').hasClass('etat1') ){
			$('.crow').removeClass('etat1').addClass('etat2');
		}
	
	
	});	

});


})( jQuery );

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}