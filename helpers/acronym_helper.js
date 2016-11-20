var acronymHelper = function(){
    return {
        findAcronyms: function(string){
            var spaceArray = string.split(" ");
            var result = [];

            for (var i = 0; i < spaceArray.length; i++) {
                var currElem = spaceArray[i];

                if (currElem.match(/[.][A-Z][.]/)) {
                    result.push(currElem);
                }
            }

            return result;
        },
        findLowerCaseAcronyms: function(string) {
            var spaceArray = string.split(" ");
            var result = [];
            for (var i = 0; i < spaceArray.length; i++) {
                var currElem = spaceArray[i];



                if (currElem.match(/\b[a-z][.][a-z[.]\b/)) {
                    result.push(currElem);
                }
            }

            return result;
        },

        encryptAcronyms: function(string) {
            var acronymArray = this.findAcronyms(string);
            var lowerCaseAcronymArray = this.findLowerCaseAcronyms(string);

            if (acronymArray.length >= 1) {
                acronymArray.forEach(function(elem){
                    var encryptedAcronym = elem;
                    encryptedAcronym = encryptedAcronym.replace(/[.]+/g, "#4#4");
                    string = string.replace(elem, encryptedAcronym);
                })
            }

            if (lowerCaseAcronymArray.length >= 1) {
                lowerCaseAcronymArray.forEach(function(elem){
                    var encryptedLowerCaseAcronym = elem;
                    encryptedLowerCaseAcronym = encryptedLowerCaseAcronym.replace(/[.]+/g, "#4#4");
                    string = string.replace(elem, encryptedLowerCaseAcronym);
                    console.log("Result: ", string);
                })
            }

            return string;
        }
    }
};

module.exports = acronymHelper;