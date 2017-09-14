PrettySize
==========

Helper utility to provide pretty printed file sizes (best used for logging or CLI output)

Build Status
------------

[![Build Status](https://secure.travis-ci.org/davglass/prettysize.svg?branch=master)](http://travis-ci.org/davglass/prettysize)
[![codecov](https://codecov.io/gh/davglass/prettysize/branch/master/graph/badge.svg)](https://codecov.io/gh/davglass/prettysize)

Usage
-----

```
npm install prettysize
```

```javascript

const pretty = require('prettysize');

const onekB = pretty(1024);
//str = "1 kB"

const oneMB = pretty(1024 * 1024);
//str = "1 MB"

const hundredMB = pretty(123456789);
//str = "117.7 MB"
```

It supports the following sizes:

* bytes
* kB
* MB
* GB
* TB
* PB
* EB

Arguments
---------

```javascript
pretty(123456, true, true, 2);

/*

First arg is size
Second argument is to remove the space from the output
Third argument is to use a single character for the size.
Forth argument is the number of decimal places to return, default is 1. 
*/


const oneMb = pretty(1024 * 1024, true);
//str = "1MB"

let str = pretty(123456789, true, true);
//str = "117.7M"

   str = pretty(123456789, false, true);
//str = "117.7 M"

   str = pretty(123456789, false, true, 2);
//str = "117.74 M"

   str = pretty(123456789, false, true, 3);
//str = "117.738 M"

```
