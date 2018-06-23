'use strict';
/*
Copyright (c) 2013, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://yuilibrary.com/license/
*/

const sizes = [
    'Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB'
];

/**
Pretty print a size from bytes
@method pretty
@param {Number} size The number to pretty print
@param {Boolean} [nospace=false] Don't print a space
@param {Boolean} [one=false] Only print one character
@param {Number} [places=1] Number of decimal places to return
*/

module.exports = (size, nospace, one, places,stringOptional) => {
    if (typeof nospace === 'object') {
        const opts = nospace;
        nospace = opts.nospace;
        one = opts.one;
        places = opts.places || 1;
        stringOptional = opts.stringOptional || false;
    } else {
        places = places || 1;
    }

    let mysize;

    sizes.forEach((unit, id) => {
        if (one) {
            unit = unit.slice(0, 1);
        }
        const s = Math.pow(1024, id);
        let fixed;
        if (size >= s) {
            fixed = String((size / s).toFixed(places));
            if (fixed.indexOf('.0') === fixed.length - 2) {
                fixed = fixed.slice(0, -2);
            }
            mysize = fixed + (nospace ? '' : ' ') + unit;
        }
    });

    // zero handling
    // always prints in Bytes
    if (!mysize) {
        let unit = (one ? sizes[0].slice(0, 1) : sizes[0]);
        mysize = '0' + (nospace ? '' : ' ') + unit;
    }
    
    if (stringOptional === true)
    	return Number.parseFloat(mysize);
    
    return mysize;
};
