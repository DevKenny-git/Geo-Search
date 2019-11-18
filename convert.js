

function convertTemperature(chosen) {

	let celciusInput = 0, fahrenheitValue = 0;
	

	//calculate conversion based on selection
	switch (chosen) {
		case 'celcius' :
			celciusInput = $('.input').val();
			console.log(celciusInput)
			if ((!($.isNumeric(celciusInput))) || (celciusInput.length < 1)) {
				fahrenheitValue = 'Please enter a Number';
			}
			fahrenheitValue = celciusInput * 9 / 5 + 32;
			
			return fahrenheitValue.toFixed(2) + '°F';
			break;
		case 'fahrenheit': 
			fahrenheitValue = $('.input').val();
			console.log(fahrenheitValue);
			if ((!($.isNumeric(fahrenheitValue))) || (fahrenheitValue.length < 1)) {
				celciusInput = 'Please enter a Number';
			}	
			
			celciusInput = (fahrenheitValue - 32)  * 5 / 9;
			console.log(celciusInput);
			return celciusInput.toFixed(2) + '°C';
			break; 
	}
}

$(document).ready(function() {
	$('input[name="convert"]').on('click', function () {
		
		//make a selection of conversion
		let	decision = $('input[name="convert"]:checked').val();
		console.log(decision);
		//display the response div and the submit button
		$('#response, #submit').css({'display': 'block'});

			$('#submit').on('click',  function(ev) {
				// ev.preventDefault();
				$('#result').text('Result is ' + convertTemperature(decision) );
				if ($('#submit').val() === 'Submit') {
					$('#submit').val () = 'Make Another Conversion';
				}				
			});	
	});


});


