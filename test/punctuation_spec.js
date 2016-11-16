var assert = require('assert');
var sentenceCleaner = require('./../index');

describe('Punctuation', function() {
    describe('Default', function(){
        it('adds period to string if no punctuation provided', function() {
            assert.equal(sentenceCleaner("No period"), "No period.");
        });
    });

    describe('Duplicates', function(){
        describe('True Duplicates', function(){
            it('replaces duplicate commas', function() {
                assert.equal(sentenceCleaner("Duplicate,, commas."), "Duplicate, commas.");
            });

            it('replaces duplicate period', function() {
                assert.equal(sentenceCleaner("Duplicate.. Periods.."), "Duplicate. Periods.");
            });

            it('replaces duplicate exclamation points', function() {
                assert.equal(sentenceCleaner("Duplicate!! Exclamation points!!"), "Duplicate! Exclamation points!");
            });

            it('replaces duplicate question marks', function() {
                assert.equal(sentenceCleaner("Duplicate?? Question marks??"), "Duplicate? Question marks?");
            });

            it('replaces duplicate colons', function() {
                assert.equal(sentenceCleaner("Duplicate:: Colons."), "Duplicate: Colons.");
            });

            it('replaces duplicate semi-colons', function() {
                assert.equal(sentenceCleaner("Duplicate;; semi-colons."), "Duplicate; semi-colons.");
            });
        });

        describe('Duplicates Space Between', function(){
            it('replaces duplicate commas', function() {
                assert.equal(sentenceCleaner("Duplicate, , commas."), "Duplicate, commas.");
            });

            it('replaces duplicate period', function() {
                assert.equal(sentenceCleaner("Duplicate. . Periods.."), "Duplicate. Periods.");
            });

            it('replaces duplicate exclamation points', function() {
                assert.equal(sentenceCleaner("Duplicate! ! Exclamation points!!"), "Duplicate! Exclamation points!");
            });

            it('replaces duplicate question marks', function() {
                assert.equal(sentenceCleaner("Duplicate? ? Question marks??"), "Duplicate? Question marks?");
            });

            it('replaces duplicate colons', function() {
                assert.equal(sentenceCleaner("Duplicate: : Colons."), "Duplicate: Colons.");
            });

            it('replaces duplicate semi-colons', function() {
                assert.equal(sentenceCleaner("Duplicate; ; semi-colons."), "Duplicate; semi-colons.");
            });
        });

        describe('Mixed Duplicates', function(){
            it('mixed duplicate replace with last punctuation: comma - period', function() {
                assert.equal(sentenceCleaner("Duplicate comma period,."), "Duplicate comma period.");
            });

            it('mixed duplicate replace with last punctuation: comma - question mark', function() {
                assert.equal(sentenceCleaner("Duplicate comma question mark,?"), "Duplicate comma question mark?");
            });

            it('mixed duplicate replace with last punctuation: colon - semicolon - exclamation point', function() {
                assert.equal(sentenceCleaner("Duplicate colon semicolon exclamation point:;!"), "Duplicate colon semicolon exclamation point!");
            });
        });
    });
});