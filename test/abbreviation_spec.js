var assert = require('assert');
var abbreviationHelper = require('./../helpers/abbreviation_helper')();
var sentenceCleaner = require('./../index');

describe('Abbreviations', function() {
    describe('Abbreviation Helper', function(){
        it('encrypts period for abbreviation: basic', function() {
            var abbreviationSentence = "Sentence with month of Aug. in it.";
            assert.equal(abbreviationHelper.encryptAbbreviations(abbreviationSentence), "Sentence with month of Aug#4#4 in it.");
        });

        it('encrypts period for abbreviation: months of year', function() {
            var abbreviationSentence = "Sentence with month of Jan. Feb. Mar. Apr. May Jun. Jul. Aug. Sep. Sept. Oct. Nov. Dec. in it.";
            assert.equal(abbreviationHelper.encryptAbbreviations(abbreviationSentence), "Sentence with month of Jan#4#4 Feb#4#4 Mar#4#4 Apr#4#4 May Jun#4#4 Jul#4#4 Aug#4#4 Sep#4#4 Sept#4#4 Oct#4#4 Nov#4#4 Dec#4#4 in it.");
        });

        it('encrypts period for abbreviation: days of week', function() {
            var abbreviationSentence = "Sentence with days of week Mon. Tu. Tue. Tues. Wed. Th. Thu. Thur. Thurs. Fri. Sat. Sun. in it.";
            assert.equal(abbreviationHelper.encryptAbbreviations(abbreviationSentence), "Sentence with days of week Mon#4#4 Tu#4#4 Tue#4#4 Tues#4#4 Wed#4#4 Th#4#4 Thu#4#4 Thur#4#4 Thurs#4#4 Fri#4#4 Sat#4#4 Sun#4#4 in it.");
        });

        it('encrypts period for abbreviation: time', function() {
            var abbreviationSentence = "Sentence with time sec. min. hr. wk. a.m. p.m. mo. yr. cent. in it.";
            assert.equal(abbreviationHelper.encryptAbbreviations(abbreviationSentence), "Sentence with time sec#4#4 min#4#4 hr#4#4 wk#4#4 a#4#4m#4#4 p#4#4m#4#4 mo#4#4 yr#4#4 cent#4#4 in it.");
        });

        it('encrypts period for abbreviation: english units of measurement', function() {
            var abbreviationSentence = "Sentence with english units of measurement bbl. cu. doz. fl. ft. gal. gr. gro. in. k. kt. lb. lbs. mi. oz. pt. qt. sq. pt. qt. sq. t. tbsp. tsp. yd. in it.";
            assert.equal(abbreviationHelper.encryptAbbreviations(abbreviationSentence), "Sentence with english units of measurement bbl#4#4 cu#4#4 doz#4#4 fl#4#4 ft#4#4 gal#4#4 gr#4#4 gro#4#4 in#4#4 k#4#4 kt#4#4 lb#4#4 lbs#4#4 mi#4#4 oz#4#4 pt#4#4 qt#4#4 sq#4#4 pt#4#4 qt#4#4 sq#4#4 t#4#4 tbsp#4#4 tsp#4#4 yd#4#4 in it.");
        });

        it('encrypts period for abbreviation: metric', function() {
            var abbreviationSentence = "Sentence with metric cc. cm. G. GB. g. gr. ha. K. KB. kg. kl. km. l. m. M. MB. mcg. mg. ml. mm. MT. t. T. w. W. kw. kW. kwh. kWh. in it.";
            assert.equal(abbreviationHelper.encryptAbbreviations(abbreviationSentence), "Sentence with metric cc#4#4 cm#4#4 G#4#4 GB#4#4 g#4#4 gr#4#4 ha#4#4 K#4#4 KB#4#4 kg#4#4 kl#4#4 km#4#4 l#4#4 m#4#4 M#4#4 MB#4#4 mcg#4#4 mg#4#4 ml#4#4 mm#4#4 MT#4#4 t#4#4 T#4#4 w#4#4 W#4#4 kw#4#4 kW#4#4 kwh#4#4 kWh#4#4 in it.");
        });

        it('encrypts period for abbreviation: titles', function() {
            var abbreviationSentence = "Sentence with titles Capt. Col. Comdr. Cpl. Dr. Esq. Gen. Gov. Hon. Jr. Lt. Mr. Mrs. Ms. Messrs. Mmes. Msgr. Prof. Rev. Rt. Hon. Sgt. Sr. St. in it.";
            assert.equal(abbreviationHelper.encryptAbbreviations(abbreviationSentence), "Sentence with titles Capt#4#4 Col#4#4 Comdr#4#4 Cpl#4#4 Dr#4#4 Esq#4#4 Gen#4#4 Gov#4#4 Hon#4#4 Jr#4#4 Lt#4#4 Mr#4#4 Mrs#4#4 Ms#4#4 Messrs#4#4 Mmes#4#4 Msgr#4#4 Prof#4#4 Rev#4#4 Rt#4#4 Hon#4#4 Sgt#4#4 Sr#4#4 St#4#4 in it.");
        });

        it('encrypts period for abbreviation: miscellaneous', function() {
            var abbreviationSentence = "Sentence with miscellaneous abbr. Acad. alt. Assn. Ave. ave. c. cal. co. Corp. dept. div. dr. ed. est. etc. et al. ex. Ex. grad. i.e. inc. Inst. lat. Lib. long. Ltd. mt. mts. Mus. pop. pseud. Ser. St. st. uninc. Univ. vol. vs. wt. in it.";
            assert.equal(abbreviationHelper.encryptAbbreviations(abbreviationSentence), "Sentence with miscellaneous abbr#4#4 Acad#4#4 alt#4#4 Assn#4#4 Ave#4#4 ave#4#4 c#4#4 cal#4#4 co#4#4 Corp#4#4 dept#4#4 div#4#4 dr#4#4 ed#4#4 est#4#4 etc#4#4 et al#4#4 ex#4#4 Ex#4#4 grad#4#4 i#4#4e#4#4 inc#4#4 Inst#4#4 lat#4#4 Lib#4#4 long#4#4 Ltd#4#4 mt#4#4 mts#4#4 Mus#4#4 pop#4#4 pseud#4#4 Ser#4#4 St#4#4 st#4#4 uninc#4#4 Univ#4#4 vol#4#4 vs#4#4 wt#4#4 in it.");
        });

        it('does not encrypt words containing some abbreviations', function() {
            var abbreviationSentence = "Dog. Magnificent. Blowin. Want. Growl. Mom. Wow. Walt. Have. Musical. Calico. Adept. Wanted. Tallest. Oblong.";
            assert.equal(abbreviationHelper.encryptAbbreviations(abbreviationSentence), abbreviationSentence);
        });
    });

    describe('Abbreviation: Sentence Cleaner', function(){
        it('ignores abbreviation punctuation in middle of sentence: single', function() {
            var abbreviationSentence = "Sentence with month of Aug. in it.";
            assert.equal(sentenceCleaner(abbreviationSentence), abbreviationSentence);
        });

        it('ignores abbreviation punctuation in middle of sentence: combination', function() {
            var abbreviationSentence = "The good Dr. at 7 a.m. went 7 ft. up in the air one fatefuly Mon. in Nov. as he drove along the Ave. etc., when all of a sudden a 5 lb. wt. hit him.";
            assert.equal(sentenceCleaner(abbreviationSentence), abbreviationSentence);
        });
    });
});