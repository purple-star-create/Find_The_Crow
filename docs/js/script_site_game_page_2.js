(function($) {


// Scripts exécutés quand le document est chargé (sauf images)
$(document).ready(function(){

	$('img.crow').on('click', function(){
		console.log("crow was clicked")

		if($('img.crow').hasClass('etat3') ){
			window.location.href = 'file:///C:/Users/Alice/Desktop/FIND_THE_CROW/FICHIERS/docs/site_game_page_3.html';
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