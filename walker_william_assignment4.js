//William L. Walker
//August 23, 2012
//SDI - Project 4 Assignment
//JavaScript Library


//String Function
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