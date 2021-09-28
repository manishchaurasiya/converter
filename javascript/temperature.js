function getSelectValue()
		 {
			let options=document.getElementById('choose').value;
		    let inp=document.getElementById('temp').value;
		 	if(inp==""){
		 		document.getElementById('error').style.display="inline-block";
		 		document.getElementById('error').innerHTML="Please enter value!";
		 	}
		 	else if (options=='celcius') {
		 		document.getElementById('error').style.visibility="hidden";
		 		document.getElementById('result').style.display="block";
		 		let fahrenheit_result = (inp - 32) * 5/9;
		 		 var n = fahrenheit_result.toFixed(2);
		 		//console.log(fahrenheit);
		 		document.getElementById('showres').innerHTML=n+" F";
		 	}
		 	else {
		 		document.getElementById('result').style.display="block";
		 		document.getElementById('error').style.visibility="hidden";
		 		let celcius_result = inp * 1.8 + 32;
		 		document.getElementById('showres').innerHTML=celcius_result+" C";;
		 			//console.log(celcius);
		 	}

		 }