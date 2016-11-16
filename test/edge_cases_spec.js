var assert = require('assert');
var sentenceCleaner = require('./../index');

describe('Edge Cases', function() {
    it('acronyms: middle of sentence', function() {
        var acronymSentence = "Sentence with A.C.R.O.N.Y.M.S. in it.";
        assert.equal(sentenceCleaner(acronymSentence), acronymSentence);
    });

    it('acronyms: end of sentence', function() {
        var acronymSentence = "Sentence with A.C.R.O.N.Y.M.S. Start of a new sentence.";
        assert.equal(sentenceCleaner(acronymSentence), acronymSentence);
    });

    it('acronyms: multiple acronyms', function() {
        var acronymSentence = "Sentence with M.U.L.T.I.P.L.E. different A.C.R.O.N.Y.M.S.";
        assert.equal(sentenceCleaner(acronymSentence), acronymSentence);
    });
});