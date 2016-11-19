var assert = require('assert');
var ellipseHelper = require('./../helpers/ellipse_helper')();
var sentenceCleaner = require('./../index');

describe('Ellipses', function() {
    describe('Ellipse Helper: Encrypt', function(){
        it('encrypts no space ellipse', function () {
            var initial = "The ceremony honored twelve brilliant athletes...visiting.";
            var encrypted = "The ceremony honored twelve brilliant athletes #4#4#4#4#4#4 visiting.";
            assert.equal(ellipseHelper.encryptString(initial), encrypted);
        });

        it('encrypts spaced ellipse', function () {
            var initial = "The ceremony honored twelve brilliant athletes. . .visiting.";
            var encrypted = "The ceremony honored twelve brilliant athletes #4#4 #4#4 #4#4 visiting.";
            assert.equal(ellipseHelper.encryptString(initial), encrypted);
        });

    });

    describe('Ellipse Types', function(){
        it('ellipse in sentence: spaced, capitalized', function () {
            var ellipseSentence = "Sentence with ellipse . . . In it.";
            assert.equal(sentenceCleaner(ellipseSentence), ellipseSentence);
        });

        it('ellipse in sentence: spaced, lowercase', function () {
            var ellipseSentence = "Sentence with ellipse . . . in it.";
            assert.equal(sentenceCleaner(ellipseSentence), ellipseSentence);
        });

        it('ellipse in sentence: unspaced, capitalized', function () {
            var ellipseSentence = "Sentence with ellipse ... In it.";
            assert.equal(sentenceCleaner(ellipseSentence), ellipseSentence);
        });

        it('ellipse in sentence: unspaced, lowercase', function () {
            var ellipseSentence = "Sentence with ellipse ... in it.";
            assert.equal(sentenceCleaner(ellipseSentence), ellipseSentence);
        });
    });

    describe('Use Cases', function(){
        it('separate two sentences: capitalized', function () {
            var ellipseSentence = "If only there was . . . Oh, who cares anyway.";
            assert.equal(sentenceCleaner(ellipseSentence), ellipseSentence);
        });

        it('separate two sentences: mixed capitalization', function () {
            var ellipseSentence = "I wasn’t really . . . well, what I mean . . . see, the thing is . . . I didn’t mean it.";
            assert.equal(sentenceCleaner(ellipseSentence), ellipseSentence);
        });

        it('middle sentence no space: a space should appear between the first and last ellipsis marks and the surrounding letters', function () {
            var incorrectEllipse = "The ceremony honored twelve brilliant athletes...visiting the U.S.";
            var correctEllipse = "The ceremony honored twelve brilliant athletes ... visiting the U.S.";
            assert.equal(sentenceCleaner(incorrectEllipse), correctEllipse);
        });

        it('middle sentence spaced: a space should appear between the first and last ellipsis marks and the surrounding letters', function () {
            var incorrectEllipse = "The ceremony honored twelve brilliant athletes. . .visiting the U.S.";
            var correctEllipse = "The ceremony honored twelve brilliant athletes . . . visiting the U.S.";
            assert.equal(sentenceCleaner(incorrectEllipse), correctEllipse);
        });

        it('ellipse next to quote mark', function () {
            var ellipseSentence = "'I\'m wondering …' Juan said, bemused.";
            assert.equal(sentenceCleaner(ellipseSentence), ellipseSentence);
        });
    });
});