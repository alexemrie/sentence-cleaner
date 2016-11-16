var assert = require('assert');
var acronymHelper = require('./../helpers/acronym_helper')();

describe('Acronym Helper', function() {
    it('finds single acronym in sentence', function() {
        var acronymSentence = "Sentence with U.S.A. in it.";
        assert.deepEqual(acronymHelper.findAcronyms(acronymSentence), ["U.S.A."]);
        assert.deepEqual(acronymHelper.findAcronyms(acronymSentence).length, 1);
    });

    it('finds multiple acronyms in sentence', function() {
        var acronymSentence = "Sentence with U.S.A. in A.B.C. it.";
        assert.deepEqual(acronymHelper.findAcronyms(acronymSentence), ["U.S.A.", "A.B.C."]);
        assert.deepEqual(acronymHelper.findAcronyms(acronymSentence).length, 2);
    });

    it('finds acronym at end of sentence', function() {
        var acronymSentence = "Sentence with U.S.A.";
        assert.deepEqual(acronymHelper.findAcronyms(acronymSentence), ["U.S.A."]);
        assert.deepEqual(acronymHelper.findAcronyms(acronymSentence).length, 1);
    });
});