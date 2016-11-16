var assert = require('assert');
var sentenceCleaner = require('./../index');

describe('General', function() {
    it('converts input to string', function() {
        assert.equal(typeof sentenceCleaner(123), "string");
    });
});