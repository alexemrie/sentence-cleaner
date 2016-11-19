var assert = require('assert');
var acronymHelper = require('./../helpers/acronym_helper')();
var sentenceCleaner = require('./../index');

describe('Acronyms', function(){
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

    describe('Acronym: Sentence Cleaner', function(){
        it('acronyms: middle of sentence', function() {
            var acronymSentence = "Sentence with A.C.R.O.N.Y.M.S. in it.";
            assert.equal(sentenceCleaner(acronymSentence), acronymSentence);
        });

        it('acronyms: end of sentence, 1 sentence', function() {
            var acronymSentence = "Sentence with A.C.R.O.N.Y.M.S.";
            assert.equal(sentenceCleaner(acronymSentence), acronymSentence);
        });

        it('acronyms: end of sentence, 2 sentences', function() {
            var acronymSentence = "Sentence with A.C.R.O.N.Y.M.S. Start of a new sentence.";
            assert.equal(sentenceCleaner(acronymSentence), acronymSentence);
        });

        it('acronyms: multiple acronyms', function() {
            var acronymSentence = "Sentence with M.U.L.T.I.P.L.E. different A.C.R.O.N.Y.M.S.";
            assert.equal(sentenceCleaner(acronymSentence), acronymSentence);
        });
    });
});