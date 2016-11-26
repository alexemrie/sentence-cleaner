var abbreviationHelper = require('./abbreviation_helper')();
var acronymHelper = require('./acronym_helper')();
var ellipseHelper = require('./ellipse_helper')();
var emailHelper = require('./email_helper')();
var urlHelper = require('./url_helper')();

var encryptHelper = function(){
    return {
        encryptString: function(string){
            string = abbreviationHelper.encryptAbbreviations(string);
            string = acronymHelper.encryptAcronyms(string);
            string = ellipseHelper.encryptEllipse(string);
            string = emailHelper.encryptEmails(string);
            string = urlHelper.encryptURL(string);

            return string;
        },
        decryptString: function(string) {
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

            return string;
        }
    }
};

module.exports = encryptHelper;