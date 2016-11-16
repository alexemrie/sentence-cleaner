var assert = require('assert');
var sentenceCleaner = require('./../index');

describe('Whitespace', function() {
    it('removes multiple whitespace and replaces with single', function() {
        assert.equal(sentenceCleaner("Multiple   spaces  between words."), "Multiple spaces between words.");
    });

    it('removes outside whitespace', function() {
        assert.equal(sentenceCleaner("        Outside whitespace.    "), "Outside whitespace.");
    });

    it('removes whitespace before comma', function() {
        assert.equal(sentenceCleaner("Whitespace before , comma."), "Whitespace before, comma.");
    });

    it('removes whitespace before colon', function() {
        assert.equal(sentenceCleaner("Whitespace before : colon."), "Whitespace before: colon.");
    });

    it('removes whitespace before semi-colon', function() {
        assert.equal(sentenceCleaner("Whitespace before ; semi-colon."), "Whitespace before; semi-colon.");
    });

    it('removes whitespace before period', function() {
        assert.equal(sentenceCleaner("Whitespace before period ."), "Whitespace before period.");
    });

    it('removes whitespace before exclamation point', function() {
        assert.equal(sentenceCleaner("Whitespace before exclamation point !"), "Whitespace before exclamation point!");
    });

    it('removes whitespace before question mark', function() {
        assert.equal(sentenceCleaner("Whitespace before question mark ?"), "Whitespace before question mark?");
    });

    it('adds whitespace after end of sentence: question mark', function() {
        assert.equal(sentenceCleaner("No?Whitespace?"), "No? Whitespace?");
    });

    it('adds whitespace after end of sentence: period', function() {
        assert.equal(sentenceCleaner("No.Whitespace."), "No. Whitespace.");
    });

    it('adds whitespace after end of sentence: exclamation point', function() {
        assert.equal(sentenceCleaner("No!Whitespace!"), "No! Whitespace!");
    });
});