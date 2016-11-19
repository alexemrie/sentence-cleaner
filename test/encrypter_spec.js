var assert = require('assert');
var encryptionHelper = require('./../helpers/encrypt_helper')();
var sentenceCleaner = require('./../index');

describe('Encryption', function() {
    describe('Encrypt Helper', function () {
        describe('Acronyms', function() {
            it('encrypts acronyms', function () {
                var initial = "Encrypt acronym sentence U.S.";
                var encrypted = "Encrypt acronym sentence U#4#4S#4#4";
                assert.equal(encryptionHelper.encryptString(initial), encrypted);
            });
        });

        describe('Ellipses', function () {
            it('encrypts no space ellipse', function () {
                var initial = "The ceremony honored twelve brilliant athletes...visiting.";
                var encrypted = "The ceremony honored twelve brilliant athletes #4#4#4#4#4#4 visiting.";
                assert.equal(encryptionHelper.encryptString(initial), encrypted);
            });

            it('encrypts spaced ellipse', function () {
                var initial = "The ceremony honored twelve brilliant athletes. . .visiting.";
                var encrypted = "The ceremony honored twelve brilliant athletes #4#4 #4#4 #4#4 visiting.";
                assert.equal(encryptionHelper.encryptString(initial), encrypted);
            });
        });

        describe('Emails', function() {
            it('encrypts emails', function () {
                var initial = "Encrypt email sentence user@example.com.";
                var encrypted = "Encrypt email sentence user@example#4#4com.";
                assert.equal(encryptionHelper.encryptString(initial), encrypted);
            });
        });

        describe('Url', function() {
            it('encrypts url', function () {
                var initial = "Encrypt url sentence http://www.url.com.";
                var encrypted = "Encrypt url sentence http#2#2//www#4#4url#4#4com.";
                assert.equal(encryptionHelper.encryptString(initial), encrypted);
            });
        });
    });
});