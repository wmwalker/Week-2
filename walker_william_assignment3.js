//William L. Walker
//August 17, 2012
//SDI - Project 3 Assignment

//Global Variables
var announcement 		= "Fear the quiz!"; 
	classSize 			= 12;
var writer 				= {tool : "pencil", madeOf : "wood", needsSharpening : true};
	activity			= ["games", "computer", "art"];
	release 			= "the class is released for the day.";

//Mutator + Procedure with Conditional and output but no returned value
var teacher = {
	name: "Mr. Robert Johnson",
	subject: "Math",
    greetsClass : function (name) {
	if (name >= name) {
	console.log(teacher.name + ' informs his students to, "' + announcement +"!");
	}
	else console.log(teacher.name + " is out for the day.");
	}
};
teacher.greetsClass("Mr. Robert Johnson");

//Boolean function with Nested Conditional and Returned value
var quiz = {
	type : "math",
	day : "Wednesday",
	takeQuiz : function (value) {
	if (value === true){
		if (quiz.day === "Wednesday") {
			console.log("Clear off your desks for a " + quiz.type + " quiz!");
			return true;
		};
	}
	else
		console.log("No " + quiz.type + " quiz today!");
		return false;
	}
};
var returnValue = quiz.takeQuiz(true);
console.log("It\'s " + returnValue + " that students will take a " + quiz.type + " quiz today.");

// Number function with Math and While loop
var testSheet = {
	paper : true,
	format : ["fill-in-the-blank", "multiple choice"],
    distribute : function (handedOut) {
	var testsNeeded,
		done = 0;
	while (handedOut <= classSize) {
		quizNeeded = classSize - handedOut;
		console.log(teacher.name + ", there are " + quizNeeded + " students without a quiz.");
		handedOut++
	}
	return done;
	}
};
var retVal = testSheet.distribute(0);
console.log(retVal + " quizzes need to be handed out. Everyone should have a test, You have 50 minutes."); 

//Object function with For Loop and math
var timer = {
	timeExpire : 50,
	alarm : "Beep, Beep!",
	volume: "Loud",	
	//stopTest : function (timer.alert) {
			//console.log(timer.alert);
	//},
	getTime : function (item) {
		var output = timer.alarm + " Time is Up! Put down your " + item + ".";
		for (var i = 0; i < timer.timeExpire; i += 10) {			
			var minutesLeft = timer.timeExpire - i;
			console.log("There are " + minutesLeft + " minutes remaining for the test.");			
		}
	return output;
	}
};
var returnVal = timer.getTime(writer.tool);
console.log(returnVal);

//String Function with string Concantenation
var announcement = {
	length : "short",
	after : "test has been graded",
	makeAnnouncement : function (prize, luck) {
		var sheSaid = "Now that the " + announcement.after + ", " + prize + " If you made a 94 or above, " + luck;
		return sheSaid;
	}
};
var retValu = announcement.makeAnnouncement("those who made an 'A' will get m&ms!", "it\'s your lucky day!");
console.log(retValu);


//Accessor Method using JSON Data
var studentInfo = {
	imported : true,
    getData : function (jsonData) {
		for ( var i = 0; i < jsonData.students.length; i++) {
		var stuff = console.log(jsonData.students[i].name + ", prepare for next week\'s quiz.");
			};
		for ( var i = 0; i < jsonData.students.length; i++) {	
			var student = jsonData.students[i];		
			console.log(student.name + ", your grade is " + student.grade);			
				if (student.grade >=94) {
					console.log(student.name + ", enjoy your M&Ms during recess!");					
				}	
				else {
				console.log(student.name + ", no M&Ms today.");
				};
		};	
		return stuff;
	}
};
var returnValu = studentInfo.getData(json);

console.log(returnValu);

//Array function
var freeTime = {
	atEndOfDay : true, 
	goPlay : function (activity) {
		var minsPerActivity = [20, 20, 20];
		var output = minsPerActivity;
		for (i = 0; i < activity.length; i++) {
			var minsThisActivity = minsPerActivity[i];
			console.log("Students, you all have " + minsPerActivity[i] + " minutes at this " + activity[i] + " activity.");
			for (var mins = 0; mins < minsThisActivity; mins+=5) {
				var minsLeft = minsThisActivity - mins;
				console.log("You have " + minsLeft + " minutes left at this activity.");
			};
			console.log("You are finished with the " + activity[i] + " activity.");
		}
		return output;
	}
};
var retValue = freeTime.goPlay(activity);
console.log(retValue + " are the number of minutes the children had at each activity.");

//Following code is a Procedure with Argument Conditional with output and no return
var sayGoodbye = function (closing) {
	if(closing === release) {
		console.log("Have a great day!");
	}
	else {
	console.log("You're not released, there is more time!");
	}
};
sayGoodbye("school is dismissed");

