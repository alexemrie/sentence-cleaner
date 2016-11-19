var acronymHelper = require('./helpers/acronym_helper')();
var emailHelper = require('./helpers/email_helper')();
var urlHelper = require('./helpers/url_helper')();

var stringCleaner = function(string){

    var addMissingWhitespace = function(string){
        var missingWhitespace = string.match(/[a-zA-Z][,:;.!?][a-zA-Z]/g);
        if (missingWhitespace) {
            missingWhitespace.forEach(function(missingSubstr){
                var firstChar = missingSubstr[0];
                var punctuation = missingSubstr.match(/[,:;.!?]/);
                var lastChar = missingSubstr.substr(missingSubstr.length - 1);
                string = string.replace(missingSubstr, firstChar + punctuation + " " + lastChar);
            });
        }

        return string;
    };

    var capitalizeFirstLetter = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    var capitalizeSentence = function(array, punctuationMark) {
        return array.map(function(elem){
            if (elem.slice(-1).match(/[a-zA-Z]/)) {
                return capitalizeFirstLetter(elem) + punctuationMark;
            } else {
                return capitalizeFirstLetter(elem);
            }
        }).join(" ");
    };

    var capitalizeMultipleSentence = function(string) {
        var singlePuncSentence = string.match(/[.?!]/g) ? string : (string + ".");

        var periodSentence = punctuationSplitter(singlePuncSentence, ".");
        var exclamationSentence = punctuationSplitter(periodSentence, "!");
        var questionSentence = punctuationSplitter(exclamationSentence, "?");

        return questionSentence;
    };

    var decrypt = function(string) {
        var patComma = new RegExp("#1#1", "g");
        var patColon = new RegExp("#2#2", "g");
        var patSemiColon = new RegExp("#3#3", "g");
        var patPeriod = new RegExp("#4#4", "g");
        var patExclamation = new RegExp("#5#5", "g");
        var patQuestion = new RegExp("#6#6", "g");

        string = string.replace(patComma, "," );
        string = string.replace(patColon, ":" );
        string = string.replace(patSemiColon, ";" );
        string = string.replace(patPeriod, "." );
        string = string.replace(patExclamation, "!" );
        string = string.replace(patQuestion, "?" );

        string = string.replace(/[.][.]+/g, '.');

        return string;
    };

    var encrypt = function(string){
        // Encrypt Acronyms
        var acronymArray = acronymHelper.findAcronyms(string);
        var emailArray = emailHelper.findEmails(string);
        var urlArray = urlHelper.findURL(string);

        if (acronymArray.length >= 1) {
            acronymArray.forEach(function(elem){
                var encryptedAcronym = elem.replace(/[.]/g, "#4#4");
                string = string.replace(elem, encryptedAcronym);
            })
        }

        // Encrypt Emails
        if (emailArray.length >= 1) {
            emailArray.forEach(function(elem){
                var encryptedEmail = elem;
                encryptedEmail = encryptedEmail.replace(/[,]+/g, "#1#1");
                encryptedEmail = encryptedEmail.replace(/[:]+/g, "#2#2");
                encryptedEmail = encryptedEmail.replace(/[;]+/g, "#3#3");
                encryptedEmail = encryptedEmail.replace(/[.]+/g, "#4#4");
                encryptedEmail = encryptedEmail.replace(/[!]+/g, "#5#5");
                encryptedEmail = encryptedEmail.replace(/[?]+/g, "#6#6");

                string = string.replace(elem, encryptedEmail);
            })
        }

        // Encrypt URLs
        if (urlArray.length >= 1) {
            urlArray.forEach(function(elem){
                var encryptedURL = elem;
                encryptedURL = encryptedURL.replace(/[,]+/g, "#1#1");
                encryptedURL = encryptedURL.replace(/[:]+/g, "#2#2");
                encryptedURL = encryptedURL.replace(/[;]+/g, "#3#3");
                encryptedURL = encryptedURL.replace(/[.]+/g, "#4#4");
                encryptedURL = encryptedURL.replace(/[!]+/g, "#5#5");
                encryptedURL = encryptedURL.replace(/[?]+/g, "#6#6");

                string = string.replace(elem, encryptedURL);
            })
        }


        string = addMissingWhitespace(string);

        return string;
    };

    var punctuationCleaner = function(string){
        /*
            remove multiple whitespace, replace with single space
            remove leading whitespace before punctuation marks
            remove duplicate punctuation marks, replace with single punctuation mark
            remove whitespace between punctuation marks
         */

        // whitespace
        string = string.trim();
        string = string.replace(/\s\s+/g, ' ');

        string = string.replace(/\s+\,/g, ',');
        string = string.replace(/\s+\:/g, ':');
        string = string.replace(/\s+\;/g, ';');
        string = string.replace(/\s+\./g, '.');
        string = string.replace(/\s+\!/g, '!');
        string = string.replace(/\s+\?/g, '?');

        // duplicate
        string = string.replace(/[,][,]+/g, ',');
        string = string.replace(/[:][:]+/g, ':');
        string = string.replace(/[;][;]+/g, ';');
        string = string.replace(/[.][.]+/g, '.');
        string = string.replace(/[!][!]+/g, '!');
        string = string.replace(/[?][?]+/g, '?');

        // mixed duplicate
        var mixedPunctuation = string.match(/[,:;.!?][,:;.!?]+/g);
        if (mixedPunctuation) {
            mixedPunctuation.forEach(function(match){
                var lastChar = match.substr(match.length - 1);
                string = string.replace(match, lastChar);
            });
        }

        // whitespace between punctuation
        string = string.replace(/[,]\s+[,]+/g, ',');
        string = string.replace(/[:]\s+[:]+/g, ':');
        string = string.replace(/[;]\s+[;]+/g, ';');
        string = string.replace(/[.]\s+[.]+/g, '.');
        string = string.replace(/[!]\s+[!]+/g, '!');
        string = string.replace(/[?]\s+[?]+/g, '?');

        return string;
    };

    var punctuationSplitter = function(string, punctuationMark){
        var pattern = "[" + String(punctuationMark) + "]+" + "\\" + "\s+";
        var regex = new RegExp(pattern,"g");
        var sentence = capitalizeSentence(string.split(regex), punctuationMark);
        return sentence;
    };

    var that = this;

    return {
      cleanString: function(string){
          var inputString = String(string);
          var cleaned = punctuationCleaner(inputString);
          var encrypted = encrypt(cleaned);
          var capitalized = capitalizeMultipleSentence(encrypted);
          var decrypted = decrypt(capitalized);
          return decrypted;
      }
    };
};

module.exports = stringCleaner().cleanString;