sentence-cleaner
================
Package for sanitizing strings intended to be used as sentences.

* Capitalizes sentences.
* Removes duplicate punctuation marks in sentences.
* Removes unnecessary whitespace in sentences.


Installation
-----

```bash
npm install sentence-cleaner --save
```

Usage
-----


```Javascript
var sentenceCleaner = require('sentence-cleaner');

************* Capitalization *************
// Single Sentence
sentenceCleaner("hello world.")            // => "Hello world."

// Multiple Sentences
sentenceCleaner("hello. world.")           // => "Hello. World."


************* Punctuation *************
// Default adds period "."
sentenceCleaner("Hello world")             // => "Hello world."

// Remove duplicate punctuation
sentenceCleaner("Hello world..")           // => "Hello world."

// Remove duplicate mixed punctuation 
// (defaults to last character in match)
sentenceCleaner("Hello world.?")           // => "Hello world?"


************* Whitespace *************
// Removes duplicate space between words
sentenceCleaner("Hello      world.")       // => "Hello world."

// Removes outside whitespace
sentenceCleaner("   Hello world.    ")     // => "Hello world."

// Removes whitespace before punctuation marks
sentenceCleaner("Hello , world.")          // => "Hello, world."

// Adds whitespace when missing
sentenceCleaner("Hello.World.")            // => "Hello. World."

```

Usage
-----

Find this package useful? Support it on [GitHugz](http://www.githugz.com/projects/npm/sentence-cleaner)!