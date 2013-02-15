/*
Copyright (c) 2013, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://yuilibrary.com/license/
*/

var sizes = [
    'kb', 'mb', 'gb', 'tb', 'pb', 'eb'
];

module.exports = function(size) {
    var mysize = size + ' bytes';

    sizes.forEach(function(f, id) {
        id++;
        var s = Math.pow(1024, id);
        f = f.toUpperCase();
        if (f === 'KB') {
            f = 'Kb';
        }
        if (size >= s) {
            mysize = (size / s).toFixed(1) + ' ' + f;
        }
    });

    return mysize;
};
