var urlHelper = function(){
    var that = this;
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
        }
    }
};

module.exports = urlHelper;