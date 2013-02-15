PrettySize
==========

Helper utility to provide pretty printed file sizes (best used for logging or CLI output)

Build Status
------------

[![Build Status](https://secure.travis-ci.org/davglass/prettysize.png?branch=master)](http://travis-ci.org/davglass/prettysize)


Usage
-----

```
npm install prettysize
```

```javascript

var pretty = require('prettysize');

var str = pretty(1024);
//str = "1 kB"

var str = pretty(1024 * 1024);
//str = "1 MB"

var str = pretty(123456789);
//str = "117.7 MB"
```

It supports the following sizes:

* bytes
* Kb
* MB
* GB
* TB
* PB
* EB

