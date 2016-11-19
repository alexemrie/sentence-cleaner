var acronymHelper = require('./acronym_helper')();
var ellipseHelper = require('./ellipse_helper')();
var emailHelper = require('./email_helper')();
var urlHelper = require('./url_helper')();

var encryptHelper = function(){
    var that = this;
    return {
        encryptString: function(string){
            string = acronymHelper.encryptAcronyms(string);
            string = ellipseHelper.encryptEllipse(string);
            string = emailHelper.encryptEmails(string);
            string = urlHelper.encryptURL(string);

            return string;
        }
    }
};

module.exports = encryptHelper;