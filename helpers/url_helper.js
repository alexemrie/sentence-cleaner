var urlHelper = function(){
    return {
        findURL: function(string){
            var wordArray = string.split(" ");
            var result = [];
            wordArray.forEach(function(word){

                var urlStringTypes = ["http", "www", ".com", ".net", ".org", ".io", ".edu", ".wiki"];

                urlStringTypes.every(function(subString){
                   if (word.indexOf(subString) !== -1) {
                       if (word[word.length - 1].match(/[,:;.!?]/)) {
                           word = word.slice(0, -1);
                       }

                       if (word[word.length - 1].match("]")) {
                           word = word.slice(0, -1);
                       }

                       if (word[0].match(/\[/)) {
                           word = word.slice(1, word.length);
                       }

                       result.push(word);
                       return false;
                   } else {
                       return true;
                   }
                });
            });

            return result;
        },
        encryptURL: function(string) {
            var urlArray = this.findURL(string);

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

            return string;
        }
    }
};

module.exports = urlHelper;