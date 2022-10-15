//variables for Datepicker

var datePicker=document.getElementById('datePicker');
var choseDate=document.getElementById('choseDate');

var ageYears=document.getElementById('ageYears');
var ageMonths=document.getElementById('ageMonths');
var ageDays=document.getElementById('ageDays');
var ageHours=document.getElementById('ageHours');
var ageSeconds=document.getElementById('ageSeconds');
var ageMilliSeconds=document.getElementById('ageMilliSeconds');

datePicker.addEventListener('change',function(){
	var options= {year: 'numeric',month: 'long',day: 'numeric'};
	var selectedDate=new Date(this.value);
	var DOB =selectedDate.toLocaleDateString('en-US',options);
	
	//console.log("DOB IS : "+DOB);
	choseDate.innerHTML="DOB: "+" "+ DOB;
	
	var milliSeconds_Btw_DOB=Date.parse(DOB);
	var milliSeconds_Btw_Now=Date.now();
	var age_in_MilliSeconds=milliSeconds_Btw_Now - milliSeconds_Btw_DOB;
	var milliSeconds=age_in_MilliSeconds;
	var second=1000;
	var minute=second*60;
	var hour=minute*60;
	var day=hour*24;
	var month=day*30.4;
	var year=day*365.25;
	
	
	//Now start the calulation;
	
	//var years=Math.round(milliSeconds/year);
	//var months=years*12;
	//var days=years*365;
	//var hours=Math.round(milliSeconds/hour);
	//var seconds=Math.round(milliSeconds/second);
	
	var years=Math.floor(milliSeconds/year);
	var months=Math.floor(milliSeconds/month);
	var days=Math.floor(milliSeconds/day);
	var hours=Math.floor(milliSeconds/hour);
	var seconds=Math.floor(milliSeconds/second);
	//Now it is time to print the value in boxes
	
	ageYears.innerHTML=years;
	ageMonths.innerHTML=months;
	ageDays.innerHTML=days;
	ageHours.innerHTML=hours;
	ageSeconds.innerHTML=seconds;
	ageMilliSeconds.innerHTML=milliSeconds;
})