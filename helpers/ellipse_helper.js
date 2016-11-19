var ellipseHelper = function(){
    var that = this;
    return {
        encryptEllipse: function(string){

            // encrypt ellipses ("..." OR ". . .")
            var ellipsePat_one = "[.]\\s[.]\\s[.]";
            var ellipseRegex_one = new RegExp(ellipsePat_one,"g");
            string = string.replace(ellipseRegex_one, "#4#4 #4#4 #4#4");

            var ellipsePat_two = "[.][.][.]";
            var ellipseRegex_two = new RegExp(ellipsePat_two,"g");
            string = string.replace(ellipseRegex_two, "#4#4#4#4#4#4");

            // add space
            var ellipseSPACE_beg = "[a-z]#4#4";
            var ellipseREGEX_beg = new RegExp(ellipseSPACE_beg,"g");
            var ellipseSPACE_beg_array = string.match(ellipseREGEX_beg);
            if (ellipseSPACE_beg_array) {
                ellipseSPACE_beg_array.forEach(function(match){
                    var addSpace = match[0] + " " + match.slice(1, match.length);
                    string = string.replace(match, addSpace);
                });
            }

            var ellipseSPACE_end = "#4#4[a-z]";
            var ellipseREGEX_end = new RegExp(ellipseSPACE_end,"g");
            var ellipseSPACE_end_array = string.match(ellipseREGEX_end);
            if (ellipseSPACE_end_array) {
                ellipseSPACE_end_array.forEach(function(match){
                    var firstChars = match.slice(0, match.length -1);
                    var lastChar = match.substr(match.length - 1);
                    string = string.replace(match, firstChars + " " + lastChar);
                });
            }

            return string;
        }
    }
};

module.exports = ellipseHelper;