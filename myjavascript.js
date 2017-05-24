	var presentTime= new Date();	
	var aDayDate = presentTime.getDate();
	var aDayName= presentTime.getDay();
	var month = presentTime.getMonth();
	var year = presentTime.getFullYear();
	console.log(aDayDate);
	var days = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
	var months= new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var presentMonth= months[month];
	var aWeekDay=days[aDayName];
	month++;
	
	aDayDate=addZeros(aDayDate);
	month=addZeros(month);
	
	
	
	function whatTimeIsIt(){
		var hours = presentTime.getHours();
		var minutes = presentTime.getMinutes();
			minutes = addZeros(minutes);
			
		document.getElementById("top_clock").innerHTML=aWeekDay + " " + aDayDate + "/" + month + "/" + year + " " + " " + hours + ":" + minutes ;
		 var refresh = setTimeout(whatTimeIsIt, 500);
		
	}
	
	function addZeros(number) {
		if (number < 10) {number = "0" + number}; 
		return number;
	}
	
	function fullfillForm(){
		document.getElementById("destinationTown").innerHTML="<h1> "+localStorage.destination+" </h1>";

		var day1= presentTime.getDate();
		console.log(day1);
		var month1=presentTime.getMonth()+1;
		var year1=year;
		//TESTS:
		//var day1=27;
		//var month1=2;
		//var year1=2016;
		
		
		var zeroDay= "";
		var zeroMonth="";
		var options1=" ";
		var options2=" ";
		for(var i=0;i<37;i++){
			if (day1<10)zeroDay="0";
			else zeroDay="";
			if (month1<10)zeroMonth="0";
			else zeroMonth="";
			
			if(i<=30){
				options1= options1+ '<option value="'+zeroDay+day1+'/'+zeroMonth+month1+'/'+year1+ '" >'+zeroDay+day1+'/'+zeroMonth+month1+'/'+year1+ '</option>';
			}
			if(i>=7){
				options2= options2 + '<option value="'+zeroDay+day1+'/'+zeroMonth+month1+'/'+year1+ '" >'+zeroDay+day1+'/'+zeroMonth+month1+'/'+year1+ '</option>';
			}
			if(day1==28 && month1==2 && year1%4!=0 ){ // I'm using here Julian callendar - not a Gregorian one
					day1=0;
					month1++;
			}
			else if(day1==29 && month1==2){
						console.log(year1%4);
					day1=0;
					month1++;
			}
			else if(day1==30){
				if(month1==4 || month1==6 || month1==9 || month1==11){
						day1=0;
					month1++;
				}
			}
			else if(day1==31){
				if(month1==1 || month1==3 || month1==5 || month1==7 || month1==8 || month1==10 || month1==12){
					day1=0;
					month1++;
				}
			}
			
			if(month1==13){
				month1=1;
				year1++;
			}
			day1++;
			
		}

		document.getElementById("Date1").innerHTML=options1;
		document.getElementById("Date2").innerHTML=options2;
	}
	
	
	function linkToHomePage() {
		window.location.href="index.html";
		
	}
	
	
	function linkToBrasil() {
		window.location.href="goToBrasil.html";
		
	}
	
	function linkToForm(city){
		localStorage.destination = city;
		console.log(city);
		window.location.href="Form.html";
		
	}
	