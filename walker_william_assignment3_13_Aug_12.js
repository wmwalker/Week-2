//William L. Walker
//August 17, 2012
//1208, Project 3 assignment

//Global variables

var teacherAnnouncement ="Fear the quiz!";
	classSize			=15;
	writinginstrument	={tool:"pencil", consistsOf: "wood", requiresSharpening:true};
	indoorActivities	=["games", "show and tell", "art"]; 
	dailyRelease		="class is released to go home."
	
	//console.log(teacherAnnouncement);
	//console.log(classSize);
	//console.log(indoorActivities);
	//console.log(dailyRelease);
	
//Mutator plus Procedure with conditional and output with no return value
var teacher = {
	name:"Mr. Robert Johnson",		
	subject: "Math", 
	speakToClass: function (name) {
	if(name === name){
	console.log(teacher.name + " tells students to" + " teacherAnnouncement!"); //variable (teacherAnnouncement) does not display as written.
	}
	else console.log(teacher.name + " has a substitute.");
	}
};
teacher.speakToClass("Mr. Robert Johnson");