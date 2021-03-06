var encryptionHelper = require('./helpers/encrypt_helper')();

var stringCleaner = function(){

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
        for(var i = 0; i < string.length ; i++) {
            if (string.charAt(i).match(/[a-zA-Z]/g)) {
                string = string.substring(0, i) + string.charAt(i).toUpperCase() + string.substring(i+1);
                return string;
            }
        }
    };

    var capitalizeSentence = function(array, punctuationMark) {
        if (punctuationMark == "." || punctuationMark == "!" || punctuationMark == "?") {
            return array.map(function(elem){
                if (elem.slice(-1).match(/[a-zA-Z]/)) {
                    return capitalizeFirstLetter(elem) + punctuationMark;
                } else {
                    return capitalizeFirstLetter(elem);
                }
            }).join(" ");
        } else {
            return array.map(function(elem){
                return capitalizeFirstLetter(elem);
            }).join("#4#4'");
        }
    };

    var capitalizeMultipleSentence = function(string) {
        var singlePuncSentence = string.match(/[.?!]/g) || string.slice(-1) != "#4#4" ? string : (string + ".");

        var periodQuoteSentence = periodQuoteSplitter(singlePuncSentence);
        var periodSentence = punctuationSplitter(periodQuoteSentence, ".");
        var exclamationSentence = punctuationSplitter(periodSentence, "!");
        var questionSentence = punctuationSplitter(exclamationSentence, "?");

        return questionSentence;
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

        string = addMissingWhitespace(string);

        return string;
    };

    var periodQuoteSplitter = function(string){
        var pattern = "[" + String(".") + "]" + "\'";
        var periodQuoteRegex = new RegExp(pattern,"g");

        var sentence = capitalizeSentence(string.split(periodQuoteRegex), ".'");
        return sentence;
    };

    var punctuationSplitter = function(string, punctuationMark){
        var pattern = "[" + String(punctuationMark) + "]+" + "\\" + "\s+";
        var regex = new RegExp(pattern,"g");
        var sentence = capitalizeSentence(string.split(regex), punctuationMark);

        return sentence;
    };

    return {
      cleanString: function(input){
          var inputString = String(input);
          var encrypted = encryptionHelper.encryptString(inputString);
          var cleaned = punctuationCleaner(encrypted);
          var capitalized = capitalizeMultipleSentence(cleaned);
          var decrypted = encryptionHelper.decryptString(capitalized);

          return decrypted;
      }
    };
};

module.exports = stringCleaner().cleanString;