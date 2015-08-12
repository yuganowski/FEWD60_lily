$(document).ready(function() {

var cities = ["austin", "LA", "NYC","SF","Sydney"];

for( var i = 0; i < cities.length; i++) {
	$("select").append ("<option>" + cities [i] + "</option");
	}

	$ ("select").on('change', function(){
		var opt = $("select").val();

		if (opt == 'NYC') {
			$('body').attri('class','nyc');
		} else if ( ){
})