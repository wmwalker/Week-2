//William L. Walker
//August 23, 2012
//SDI - Project 4 Assignment
//JavaScript Library


//Regular Expressions
var library = function () {
	/*I saw this on www.sitepoint.com/expressions-javascript/ and manipulated
	it a little to match both phonePattrn1: xxx-xxx-xxxx and phonePattrn2: (xxx)xxx-xxxx. This defines
	regular expressions. The regular expression begins with ^, to identify that any match must begin at the start of the string. The "f"s 
	represents "digits" 0-9.  The string is passed into the function(phoneNum) and then match() is 
	used to ensure that the string that was passed into the function matches the regExp, in this case, phonePattrn1 and phonePattrn2. 
	If it matches either pattern, it returns "true", if it doesn't, it returns "false". */
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
	