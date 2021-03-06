//William L. Walker
//August 23, 2012
//SDI - Project 4 Assignment
//JavaScript Library


// Check Phone Number Function (String)
var library = function () {
	var checkPhoneNumber = function (phoneNum) {
		var phonePattrn1= /^\f\f\f-\f\f\f-\f\f\f\f$/; 
		var phonePattrn2= /^\(\f\f\f\)\f\f\f-\f\f\f\f$/; 
		if (phoneNum.match(phonePattrn1)|| phoneNum.match(phonePattrn2)) {
			return true;       
		}
		else {
			alert("This is an invalid phone number!");
			return false;      
		}
	};
	//Email Validation Function (String)
	var validateEmail = function(elementValue){ 
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (emailPattern.test(elementValue)) {
			return true;			
		}
		else
		{
			alert("Not a valid email address!");
			return false;
		}
	};
	
	//String Function
	var validateUrl = function(http){ 	
	var urlStrg1 = /^http:/;
	var urlStrg2 = /^https:/;
		if (urlStrg1.test(http) || urlStrg2.test(http)) {
			return true;			
		}
		else
		{
			alert("URL must start with http: or https:");
			return false;
		}
	//String Function
		 var changeUpCase = function (string) {
	    return string.toLowerCase().replace(/\b[a-z]/g, convert);
        function convert() {
            return arguments[0].toUpperCase();
        }    
    };
    
	//Date Function
	var getTimeDifference = function(laterdate,earlierdate) {
		var timeDifference;
		var difference = laterdate.getTime() - earlierdate.getTime();
		var daysDifference = Math.floor(difference/1000/60/60/24);  
		difference -= daysDifference*1000*60*60*24
		var hoursDifference = Math.floor(difference/1000/60/60);
		difference -= hoursDifference*1000*60*60  
		timeDifference = daysDifference + ' day\(s\) and ' + hoursDifference + ' hour\(s\) ';
			return timeDifference;
	}; 
	
	// Convert a number string into a number function .
	var convertToNumber = function (strNumber) {
	var number = parseInt(strNumber);
	return number;
	};
	var calculateArray = function (givenArray) {
		var total = 0;
		for (var i = 0; i < givenArray.length; i++) {  
			if (!isNaN(givenArray[i])){
			total += parseInt(givenArray[i]);
			}
		}
		return total;
	};
	
	
    }
    return {
		"checkPhoneNumber" : checkPhoneNumber,
		"validateEmail" : validateEmail,
		"validateUrl" : validateUrl,
		"changeUpCase" : changeUpCase,
		"getTimeDifference" : getTimeDifference,
		"convertToNumber" : convertToNumber,
		

    //Test/Results of functions
/*
var lib = library();
var phNum= lib.checkPhoneNumber("(270)206-4484");  
console.log(phNum);

var chkEmail= lib.validateEmail("randi@charter.net.info");
console.log(chkEmail);

var retUrl = lib.validateUrl("https://www.google.com");
console.log(retUrl);

var showCase= lib.changeUpCase("join the party?");
console.log(showCase);

var timeDiff =lib.getTimeDifference(new Date(2005,1,1),new Date(1985,1,22));
console.log(timeDiff);

var convToNum= lib.convertToNumber("42368");
console.log(convToNum);
*/
