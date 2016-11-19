var emailHelper = function(){
    var that = this;
    return {
        findEmails: function(string){
            var wordArray = string.split(" ");
            var result = [];
            wordArray.forEach(function(word){
                if (word.match(/[@]/) !== null) {
                    if (word[word.length - 1].match(/[,:;.!?]/)) {
                        word = word.slice(0, -1);
                    }

                    result.push(word);
                }
            });

            return result;
        },
        encryptEmails: function(string){
            var emailArray = this.findEmails(string);

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

            return string;
        }
    }
};

module.exports = emailHelper;