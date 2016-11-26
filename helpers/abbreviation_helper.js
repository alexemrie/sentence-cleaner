var abbreviationHelper = function(){
    return {
        commonAbbreviations: function(){
            var init = [];
            var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May Jun.", "Jul.", "Aug.", "Sep.", "Sept.", "Oct.", "Nov.", "Dec."];
            var daysOfWeek = ["Mon.", "Tu.", "Tue.", "Tues.", "Wed.", "Th.", "Thu.", "Thur.", "Thurs.", "Fri.", "Sat.", "Sun."];
            var time = [" sec.", " min.", "hr.", "wk.", "a.m.", "p.m.", " mo.", "yr.", " cent."];
            var unitOfMeasureEnglish = [" bbl.", " cu.", " doz.", " fl.", " ft.", " gal.", " gr.", " gro.", " in.", " k.", " kt.", " lb.", " lbs.", " mi.", " oz.", " pt.", " qt.", " sq.", " pt.", " qt.", " sq.", " t.", " tbsp.", " tsp.", " yd."];
            var metric = [" cc.", " cm.", " G.", " GB.", " g.", " gr.", " ha.", " K.", " KB.", " kg.", " kl.", " km.", " l.", " m.", " M.", " MB.", " mcg.", " mg.", " ml.", " mm.", " MT.", " t.", " T.", " w.", " W.", " kw.", " kW.", " kwh.", " kWh."];
            var titles = ["Capt.", "Col.", "Comdr.", "Cpl.", "Dr.", "Esq.", "Gen.", "Gov.", "Hon.", "Jr.", "Lt.", "Mr.", "Mrs.", "Ms.", "Messrs.", "Mmes.", "Msgr.", "Prof.", "Rev.", "Rt.", "Hon.", "Sgt.", "Sr.", "St."];
            var miscellaneous = ["abbr.", "Acad.", " alt.", "Assn.", "Ave.", " ave.", " c.", " cal.", " co.", "Corp.", " dept.", " div.", " dr.", " ed.", " est.", "etc.", "et al.", "ex.", "Ex.", "grad.", "i.e.", "inc.", "Inst.", " lat.", "Lib.", " long.", "Ltd.", "mt.", "mts.", "Mus.", " pop.", "pseud.", "Ser.", "St.", " st.", "uninc.", "Univ.", "vol.", "vs.", "wt."];

            return init.concat(months, daysOfWeek, time, unitOfMeasureEnglish, metric, titles, miscellaneous);
        },

        encryptAbbreviations: function(string){
            var abbreviationArray = this.commonAbbreviations();

            abbreviationArray.forEach(function(elem){
                var encryptedAbbreviation = elem;
                encryptedAbbreviation = encryptedAbbreviation.replace(/[.]+/g, "#4#4");

                string = string.replace(elem, encryptedAbbreviation);
            });

            return string;
        }
    }
};

module.exports = abbreviationHelper;