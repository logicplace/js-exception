var exception = require("./exception.js"); //If using Node.JS
//var exception = require("exception"); //If using Node.JS node_modules

//Define my exception
function MyException(message){exception(this);}
function MyExceptionNonNew(message){return exception();}

//Begin try block
try {
	//Well, normally there's more here
	throw new MyException("hi :3");
} catch(e) {
	//Just cause it's good practice~
	switch(e.name) {
		case "MyException": {
			console.log(e.message);
			break;
		}
		default: throw e;
	}
}

try {
	throw MyExceptionNonNew("no new used for this one!");
} catch(e) {
	switch(e.name) {
		case "MyExceptionNonNew": {
			console.log(e.message);
			break;
		}
		default: throw e;
	}
}
