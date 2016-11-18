var acronymHelper = function(){
    var that = this;
    return {
        findAcronyms: function(string){
            var periodArray = string.split(".");

            var result = [];
            var part = [];

            for(var i = 0; i < periodArray.length; i++) {
                var currElem = periodArray[i];
                var currElemLength = currElem.length;

                if (currElemLength == 1 && periodArray[i + 1].length == 1) {
                    if (part.length < 1) {
                        var lastElemPrev = periodArray[i - 1].slice(-1);
                        part.push(lastElemPrev);
                    }

                    part.push(currElem);
                }

                if ((i > 1 && periodArray[i - 1].length == 1 && currElemLength > 1) || (currElem == "" && periodArray[i - 1].length == 1)) {
                    var lastElemPrev = periodArray[i - 1].slice(-1);
                    part.push(lastElemPrev);
                    var acronym = part.join('.') + ".";

                    result.push(acronym);
                    part = [];
                }
            };

            return result;
        }
    }
};

module.exports = acronymHelper;