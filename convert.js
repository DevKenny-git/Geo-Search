$(document).ready(function() {
	$('input[name="convert"]').on('click', function (e) {
		e.preventDefault();
		let celciusInput = 0, fahrenheitValue = 0;
		//make a decision with radio button
		let chosen = $('input[name="convert"]:checked').val();
		
		//decide whether to convert from celcius to fahrenheit or from fahrenheit to celcius
		if (chosen === 'celcius') {
			$('#response').append('<form><input type="text" class="cel" placeholder="Enter temperature in Celcius" size="25"<br><button id="submit">Submit</button>');
			$('#response').css({'display': 'block'});
			$('#submit').on('click',  function(ev) {
				ev.preventDefault();
				celciusInput = $('.cel').val();

				console.log(celciusInput);
				fahrenheitValue = celciusInput * 9  / 5 + 32;
				if (!($.isNumeric(fahrenheitValue))) {
					fahrenheitValue = 'Please enter a Number';
				}
				
				$('#response').append('<input type="text" id="result" >');
				$('#result').val(fahrenheitValue);
				$('#result').after('<button type="reset" id="beginAgain">Make Another Conversion</button></form>');
				//clear the result section on beginAgain click
				$('#beginAgain').on('click',function(e) {
					e.preventDefault();
					console.log('Clicked');
					$('#response').fadeOut(function() {
						$(this).remove();
					});

				});
			
				
			});
						
		} else {
			$('#response').append('<form><input type="text" class="cel" placeholder="Enter temperature in Fahrenheit" size="25"<br><button id="submit">Submit</button>');
			$('#response').css({'display': 'block'});
			$('#submit').on('click', function(ev) {
				ev.preventDefault();
				fahrenheitValue = $('.cel').val();
				celciusInput = (fahrenheitValue - 32)  * 5 / 9;
				if (!($.isNumeric(celciusInput))) {
					celciusInput = 'Please enter a Number';
				}
				$('#response').append('<input type="text" id="result" >');
				$('#result').val(celciusInput);
				$('#result').after('<button type="reset" id="beginAgain">Make Another Conversion</button></form>');
				
			// 	//clear the result section on beginAgain click
				$('#beginAgain').on('click',function(e) {
					e.preventDefault();					
					$('#response').fadeOut(function() {
						$(this).remove();
				});

			});
			
				
			});
		}
	})
})