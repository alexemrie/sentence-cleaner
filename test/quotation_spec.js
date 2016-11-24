var assert = require('assert');
var sentenceCleaner = require('./../index');

describe('Quotation', function() {
    it('single sentence ending in quotation: period placed inside quotation mark', function() {
        var quotationSentence = "The president’s speech both began and ended with the word 'freedom.'";
        assert.equal(sentenceCleaner(quotationSentence), quotationSentence);
    });

    it('multiple sentence ending in quotation: period placed inside quotation mark, capitalized', function() {
        var quotationSentence = "The president’s speech both began and ended with the word 'freedom.' However, it was not a great speech.";
        assert.equal(sentenceCleaner(quotationSentence), quotationSentence);
    });

    it('multiple sentence ending in quotation: period placed inside quotation mark, lowercase', function() {
        var quotationSentence = "The president’s speech both began and ended with the word 'freedom.' however, it was not a great speech.";
        assert.equal(sentenceCleaner(quotationSentence), "The president’s speech both began and ended with the word 'freedom.' However, it was not a great speech.");
    });

    it('sentence ending in quotation: question mark', function() {
        var quotationSentence = "'What are we having for dinner?' his son asked.";
        assert.equal(sentenceCleaner(quotationSentence), quotationSentence);
    });
});