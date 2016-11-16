var assert = require('assert');
var sentenceCleaner = require('./../index');

describe('Capitalization', function() {
    it('capitalize single sentence', function() {
        assert.equal(sentenceCleaner("lower case sentence."), "Lower case sentence.");
    });

    it('capitalize multiple sentence', function() {
        assert.equal(sentenceCleaner("first lower case sentence. second lower case sentence."), "First lower case sentence. Second lower case sentence.");
    });
});