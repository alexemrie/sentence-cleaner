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
        }
    }
};

module.exports = acronymHelper;