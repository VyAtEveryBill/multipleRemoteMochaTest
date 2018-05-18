//https://codeburst.io/how-to-test-javascript-with-mocha-part-2-2d83fcb6101a
/*
ORIGINAL JavaScript

cToF = function(celsius) {
  if(!Number.isInteger(celsius)) return undefined;
  return celsius * 9 / 5 + 32;
}

fToC = function(fahrenheit) {
  if(!Number.isInteger(fahrenheit)) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}
*/
//this change is only on multipleRemoteMochaTest. It should be overwritten when pushing a change from mochaTest

//JS with testing:

//create an empty obj
var convert = {};

convert.cToF = function(celsius) {
  if(!Number.isInteger(celsius)) return undefined;
  return celsius * 9 / 5 + 32;
}

convert.fToC = function(fahrenheit) {
  if(!Number.isInteger(fahrenheit)) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}

//Tells JS which obj to return as a result of require calls
	//But how will we test just small parts of a large file?
module.exports = convert;


//testing to see if git push --all pushes to both origin and github
//Demoing
//Demoing again
//Should go to both repos
