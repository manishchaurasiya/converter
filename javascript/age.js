		function agecalculator()
		{
			let DOB=document.getElementById('dob').value;
			//console.log(d.getMillisecond());
			if (DOB=="")
			 {
			 	document.getElementById('error').style.display="block";
				document.getElementById('error').innerHTML="Please enter your date of birth";
			 }
			 else
			 {
			 	document.getElementById('error').style.visibility="hidden";
			 	document.getElementById('result').style.display="grid";
			 	var miliSeconds_Btw_DOB = Date.parse(DOB);
			    var miliSecond_Btw_Now = Date.now();
                var age_in_MiliSeconds = miliSecond_Btw_Now -  miliSeconds_Btw_DOB;
			 	var miliSeconds = age_in_MiliSeconds;
				var second = 1000;
				var minute = second*60;
				var hour = minute*60;
				var day = hour*24;
				var month = day*30;
				var year = day*365;

				// NOW START THE CALCULATION

				var years = Math.round(miliSeconds/year);
				var months = Math.round((miliSeconds/year)*12);
				var days = Math.round((miliSeconds/year)*365);
				var hours = Math.round(miliSeconds/hour);
				var minutes= Math.round((miliSeconds/hour)*60);
				var seconds = Math.round(miliSeconds/second);
				
			 	document.getElementById('year_result').innerHTML=years;
			 	document.getElementById('month_result').innerHTML=months;
			 	document.getElementById('day_result').innerHTML=days;
			 	document.getElementById('hours_result').innerHTML=hours;
			 	document.getElementById('minute_result').innerHTML=minutes;
			 	document.getElementById('second_result').innerHTML=seconds;
			 }
			
		}