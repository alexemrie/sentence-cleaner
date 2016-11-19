var assert = require('assert');
var urlHelper = require('./../helpers/url_helper')();
var sentenceCleaner = require('./../index');

describe('URL', function(){
    describe('URL Helper', function() {
        describe('URL Match Types', function(){
            it('http', function() {
                var urlSentence = "Sentence with httpwwwurlcom in it.";
                assert.deepEqual(urlHelper.findURL(urlSentence), ["httpwwwurlcom"]);
                assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
            });

            it('https', function() {
                var urlSentence = "Sentence with httpswwwurlcom in it.";
                assert.deepEqual(urlHelper.findURL(urlSentence), ["httpswwwurlcom"]);
                assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
            });

            it(':// ', function() {
                var urlSentence = "Sentence with xxx://wwwurlcom in it.";
                assert.deepEqual(urlHelper.findURL(urlSentence), ["xxx://wwwurlcom"]);
                assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
            });

            it('www', function() {
                var urlSentence = "Sentence with www.urlcom in it.";
                assert.deepEqual(urlHelper.findURL(urlSentence), ["www.urlcom"]);
                assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
            });

            it('.com', function() {
                var urlSentence = "Sentence with url.com in it.";
                assert.deepEqual(urlHelper.findURL(urlSentence), ["url.com"]);
                assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
            });

            it('.net', function() {
                var urlSentence = "Sentence with url.net in it.";
                assert.deepEqual(urlHelper.findURL(urlSentence), ["url.net"]);
                assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
            });

            it('.org', function() {
                var urlSentence = "Sentence with url.org in it.";
                assert.deepEqual(urlHelper.findURL(urlSentence), ["url.org"]);
                assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
            });

            it('.io', function() {
                var urlSentence = "Sentence with url.io in it.";
                assert.deepEqual(urlHelper.findURL(urlSentence), ["url.io"]);
                assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
            });

            it('.edu', function() {
                var urlSentence = "Sentence with url.edu in it.";
                assert.deepEqual(urlHelper.findURL(urlSentence), ["url.edu"]);
                assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
            });

            it('.wiki', function() {
                var urlSentence = "Sentence with url.wiki in it.";
                assert.deepEqual(urlHelper.findURL(urlSentence), ["url.wiki"]);
                assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
            });
        });

        describe('Sentence URL', function(){
            describe('End of sentence', function(){
                it('url end of sentence: period', function() {
                    var urlSentence = "Sentence with url end: http://www.end.url.";
                    assert.deepEqual(urlHelper.findURL(urlSentence), ["http://www.end.url"]);
                    assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
                });

                it('url end of sentence: question mark', function() {
                    var urlSentence = "Sentence with url end: http://www.end.url?";
                    assert.deepEqual(urlHelper.findURL(urlSentence), ["http://www.end.url"]);
                    assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
                });

                it('url end of sentence: square brackets', function() {
                    var urlSentence = "Sentence with url end: [http://www.end.url]";
                    assert.deepEqual(urlHelper.findURL(urlSentence), ["http://www.end.url"]);
                    assert.deepEqual(urlHelper.findURL(urlSentence).length, 1);
                });
            });

            describe('Mutliple URL', function(){
                it('multiple url sentence', function() {
                    var urlSentence = "Sentence with www.multiple.io different sentence.io.";
                    assert.deepEqual(urlHelper.findURL(urlSentence), ["www.multiple.io", "sentence.io"]);
                    assert.deepEqual(urlHelper.findURL(urlSentence).length, 2);
                });
            });
        });
    });

    describe('URL: Sentence Cleaner', function() {
        it('url: middle of sentence', function () {
            var urlSentence = "Sentence with http://url.middle.com in it.";
            assert.equal(sentenceCleaner(urlSentence), urlSentence);
        });

        it('url: end of sentence', function() {
            var urlSentence = "Sentence with http://url.middle.com.";
            assert.equal(sentenceCleaner(urlSentence), urlSentence);
        });

        it('url: multiple urls', function() {
            var urlSentence = "Sentence with multiple.sentence.com middle.sentence.io in them.";
            assert.equal(sentenceCleaner(urlSentence), urlSentence);
        });
    });
});