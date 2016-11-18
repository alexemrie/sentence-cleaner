var assert = require('assert');
var emailHelper = require('./../helpers/email_helper')();
var sentenceCleaner = require('./../index');

describe('Emails', function(){
    describe('Email Helper', function() {
        it('finds single email in sentence', function() {
            var emailSentence = "Sentence with middle@sentence.com in it.";
            assert.deepEqual(emailHelper.findEmails(emailSentence), ["middle@sentence.com"]);
            assert.deepEqual(emailHelper.findEmails(emailSentence).length, 1);
        });

        it('finds multiple emails in sentence', function() {
            var emailSentence = "Sentence with multiple@sentence.com middle@sentence.com in them.";
            assert.deepEqual(emailHelper.findEmails(emailSentence), ["multiple@sentence.com", "middle@sentence.com"]);
            assert.deepEqual(emailHelper.findEmails(emailSentence).length, 2);
        });

        it('finds email at end of sentence: period', function() {
            var emailSentence = "Sentence with end@sentence.com.";
            assert.deepEqual(emailHelper.findEmails(emailSentence), ["end@sentence.com"]);
            assert.deepEqual(emailHelper.findEmails(emailSentence).length, 1);
        });

        it('finds email at end of sentence: question mark', function() {
            var emailSentence = "Sentence with end@sentence.com?";
            assert.deepEqual(emailHelper.findEmails(emailSentence), ["end@sentence.com"]);
            assert.deepEqual(emailHelper.findEmails(emailSentence).length, 1);
        });

        it('finds email at end of sentence: exclamation point', function() {
            var emailSentence = "Sentence with end@sentence.com!";
            assert.deepEqual(emailHelper.findEmails(emailSentence), ["end@sentence.com"]);
            assert.deepEqual(emailHelper.findEmails(emailSentence).length, 1);
        });
    });

    describe('Emails: Sentence Cleaner', function(){
        it('emails: middle of sentence', function() {
            var emailSentence = "Sentence with middle@sentence.com in it.";
            assert.equal(sentenceCleaner(emailSentence), emailSentence);
        });

        it('emails: end of sentence', function() {
            var emailSentence = "Sentence with end@sentence.com.";
            assert.equal(sentenceCleaner(emailSentence), emailSentence);
        });

        it('emails: multiple emails', function() {
            var emailSentence = "Sentence with multiple@sentence.com middle@sentence.com in them.";
            assert.equal(sentenceCleaner(emailSentence), emailSentence);
        });
    });
});

