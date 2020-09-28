/* global $ */

$(document).ready(function(){
	
	$('input[type="checkbox"]').on('change', function() {
   	$(this).siblings('input[type="checkbox"]').prop('checked', false);
	});

});