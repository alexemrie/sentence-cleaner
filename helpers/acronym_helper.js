var acronymHelper = function(){
    var that = this;
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
        encryptAcronyms: function(string) {
            var acronymArray = this.findAcronyms(string);

            if (acronymArray.length >= 1) {
                acronymArray.forEach(function(elem){
                    var encryptedAcronym = elem;
                    encryptedAcronym = encryptedAcronym.replace(/[.]+/g, "#4#4");
                    string = string.replace(elem, encryptedAcronym);
                })
            }

            return string;
        }
    }
};

module.exports = acronymHelper;