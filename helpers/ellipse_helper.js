var ellipseHelper = function(){
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
            var ellipseSPACE_beg_1 = "[a-z]#4#4 #4#4 #4#4";
            var ellipseREGEX_beg_1 = new RegExp(ellipseSPACE_beg_1,"g");
            var ellipseSPACE_beg_array_1 = string.match(ellipseREGEX_beg_1);
            if (ellipseSPACE_beg_array_1) {
                ellipseSPACE_beg_array_1.forEach(function(match){
                    var addSpace = match[0] + " " + match.slice(1, match.length);
                    string = string.replace(match, addSpace);
                });
            }

            var ellipseSPACE_beg_2 = "[a-z]#4#4#4#4#4#4";
            var ellipseREGEX_beg_2 = new RegExp(ellipseSPACE_beg_2,"g");
            var ellipseSPACE_beg_array_2 = string.match(ellipseREGEX_beg_2);
            if (ellipseSPACE_beg_array_2) {
                ellipseSPACE_beg_array_2.forEach(function(match){
                    var addSpace = match[0] + " " + match.slice(1, match.length);
                    string = string.replace(match, addSpace);
                });
            }

            var ellipseSPACE_end_1 = "#4#4 #4#4 #4#4[a-z]";
            var ellipseREGEX_end_1 = new RegExp(ellipseSPACE_end_1,"g");
            var ellipseSPACE_end_array_1 = string.match(ellipseREGEX_end_1);
            if (ellipseSPACE_end_array_1) {
                ellipseSPACE_end_array_1.forEach(function(match){
                    var firstChars = match.slice(0, match.length -1);
                    var lastChar = match.substr(match.length - 1);
                    string = string.replace(match, firstChars + " " + lastChar);
                });
            }

            var ellipseSPACE_end_2 = "#4#4#4#4#4#4[a-z]";
            var ellipseREGEX_end_2 = new RegExp(ellipseSPACE_end_2,"g");
            var ellipseSPACE_end_array_2 = string.match(ellipseREGEX_end_2);
            if (ellipseSPACE_end_array_2) {
                ellipseSPACE_end_array_2.forEach(function(match){
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