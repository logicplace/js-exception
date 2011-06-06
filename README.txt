Simple to use exception making helper.

It will automatically make a function into an exception class.

Simply make a function with exception(this); as its only contents.

Use throw new FunctionName(etc) to make and throw the exception.

exception will build the passed arguments into the instance by name and also
set the name key to the function's name you called it from. Very easy!

If you don't want to use the new keyword, you may use the form:
return exception();
in the definition instead.

See test.js for an example.
