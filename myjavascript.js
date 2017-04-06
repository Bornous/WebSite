	var presentTime= new Date();	
	var aDayDate = presentTime.getDate();
	var aDayName= presentTime.getDay();
	var month = presentTime.getMonth();
	var year = presentTime.getFullYear();

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
	
	function linkToHomePage() {
		window.location.href="index.html";
		
	}
	
	
	function linkToBrasil() {
		window.location.href="goToBrasil.html";
		
	}
	