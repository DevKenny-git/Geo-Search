

function convertTemperature(chosen) {

	let celciusInput , fahrenheitValue = 0;
	

	//calculate conversion based on selection
	switch (chosen) {
		case 'celcius' :		
			 celciusInput = $('.input').val();   
			  
			console.log(celciusInput)
			if ( (!($.isNumeric(celciusInput))) || (celciusInput == "") ) {
				alert('Please enter a Number');
				return;
			}
			fahrenheitValue = Math.floor(celciusInput * 9 / 5 + 32);
			
			return fahrenheitValue.toFixed(2) + '°F';
			  
			break;
		case 'fahrenheit': 
				fahrenheitValue = $('.input').val();		
				if ((!($.isNumeric(fahrenheitValue))) || fahrenheitValue == "")	{
					alert('Please enter a Number');
					 $('#result').text(' ');	
					return;
				}
				celciusInput = Math.floor((fahrenheitValue - 32)  * 5 / 9);
				
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
			ev.preventDefault();

			var conVal = convertTemperature(decision);
			if(conVal != undefined) $('#result').text('Result is ' + conVal);	

				$(this).text('Make Another conversion');

				$(this).on('click', function () {
					location.reload(true);	
				});


				
			

			/*

			let originalValue = $('#submit').text('Submit');		
			if (originalValue == 'Submit') {
				console.log(originalValue);
				$(this).text('Make Another conversion');
				location.reload(true);
			}
			else{
				$(this).text('Submit');
			}

			*/


		});	
			
	});

/*
	$('#submit').on('click', function(e) {
		e.preventDefault();
		let originalValue = $(this).prop('text','Submit');
		if (originalValue == 'Submit') {
			$(this).text('Make Another conversion');
			location.reload(true);
		}
		else{
			$(this).text('Submit');
		}
		

	})
	*/

});


