var assert = require('assert');
var sentenceCleaner = require('./../index');

describe('Examples', function() {
    it('Example 1:', function() {
        var sentence = "And then one day, she asked him what he was reading. He had just started “The Hunger Games,” " +
            "a series of dystopian young-adult novels by Suzanne Collins. The grandmother decided" +
            " to read the first volume so that she could talk about it with her grandson the next time they chatted on the phone.";
        assert.equal(sentenceCleaner(sentence), sentence);
    });

    it('Example 2:', function(){
        var sentence = "Books are uniquely suited to helping us change our relationship to the rhythms and habits" +
            " of daily life in this world of endless connectivity. We can’t interrupt books; we can only interrupt " +
            "ourselves while reading them. They are the expression of an individual or " +
            "a group of individuals, not of a hive mind or collective consciousness. They speak to us, thoughtfully, one at a time.";
        assert.equal(sentenceCleaner(sentence), sentence);
    });

    it('Example 3:', function(){
       var sentence = "Many of us keep a dusty box or drawer of cast-away tech, even if we don’t all treat them " +
           "like antiques. These gadget graveyards fill up because we upgrade our phones," +
           " on average, once every 29 months and buy cheapy “disposable” tablets and other gear without thinking twice.";
       assert.equal(sentenceCleaner(sentence), sentence);
    });

    it('Example 4:', function(){
        var sentence = "Some of us turn old devices into hand-me-downs for family who don’t necessarily " +
            "need the latest and greatest. Children seem to be born infatuated with tablets, " +
            "but you may have to lock one down before handing it to someone very young. (See this guide to making an iPad child-safe.)";
        assert.equal(sentenceCleaner(sentence), sentence);
    });

    it('Example 5:', function(){
        var sentence = "A phone might no longer hold much charge—but plugged in, it can still be the " +
            "world’s smartest alarm clock. There are apps like the $2 Wake for the iPhone that offer a gentle rise. " +
            "Or, if you need more sadistic assistance, apps like I Can’t Wake Up for Android won’t let you snooze until you solve a puzzle. " +
            "And even better than your current smartphone, it doesn’t blare with notifications and distract you from getting quality Zs.";
        assert.equal(sentenceCleaner(sentence), sentence);
    });

    it('Example 6:', function(){
        var sentence = "The best universal remote control is one that’s smart enough to know what’s on broadcast TV " +
            "and streaming. A free app called Peel does that with an old phone or tablet that needs just Wi-Fi to operate.";
        assert.equal(sentenceCleaner(sentence), sentence);
    });
});