//https://codeburst.io/how-to-test-javascript-with-mocha-part-2-2d83fcb6101a


var assert = require('assert');//.strict;


//include the JS file you are testing.
var convert = require('../app.js');//should be able to use let instead of var


describe('Required File Tests', function() {
	/*
	Commented out because convert was printing as having two methods,
	however failing this test.
	A different test would need to be used to verify the methods existed.
	it('should not be empty', function() {
		var emptyObj = {};
		console.log('convert: ');
		console.log(convert);
		//assert.equal({}, convert);
		assert.equal(true, Object.is(emptyObj, convert));
	});*/
});


describe('Temperature Conversion Tests', function() {
	describe('cToF', function() {
		//(they are equal)
		it('should convert -40 Celcius to -40 Fahrenheit', function() {
			//how does it have access to this function?
			//assert.equal(-40, cToF(-40));//before testing on a file
			assert.equal(-40, convert.cToF(-40));
		});
		//freezing
		it('should convert 0 Celcius to 32 Fahrenheit', function() {
			assert.equal(32, convert.cToF(0));
		});
		//invalid input test
		it('should convert invalid input to undefined', function() {
			assert.equal(undefined, convert.cToF(''));
		});
	});
	describe('fToC', function() {
		//(they are equal)
		it('should convert -40 Fahrenheit to -40 Celcius', function() {
			//how does it have access to this function?
			assert.equal(-40, convert.fToC(-40));
		});
		//freezing
		it('should convert 32 Fahrenheit to 0 Celcius', function() {
			assert.equal(0, convert.fToC(32));
		});
		//invalid input test
		it('should convert invalid input to undefined', function() {
			assert.equal(undefined, convert.fToC(''));
		});
	});
})



/*Previous, from Mocha documentation
//require Node.js's built-in assert module
var assert = require('assert');

//describe groups our Mocha tests
	//accepts
		//> name of test group
		//> a callback func
	//can be nested as deeply as we want
describe('Array', function() {
	describe('#indexOf()', function() {
		//it denotes one individual test case
			//accepts
				//> string explaining what the test should do
				//> callback func (actual test)
		it('should return -1 when the value is not present', function() {
			//checks for the index 4 in an array with length 3
			//assert.equal accepts 2 args that must be equivalent to pass
				//> actual
				//> expected
			assert.equal([1,2,3].indexOf(4), -1);
		});
	});
});

//Works without being grouped.
it('double done', function(done) {
	// Calling `done()` twice is an error
	setImmediate(done);//This line will show up as a passed test.
	setImmediate(done);//This line will show up as  failed test.
});*/
