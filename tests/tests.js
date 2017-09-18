const assert = require('assert'),
    pretty = require('../index');

describe('prettysize', () => {

    it('should export a function', () => {
        assert.ok(pretty);
    });

    it('should print bytes', () => {
        assert.equal(pretty(12), '12 Bytes');
    });

    it('should print bytes with no space', () => {
        assert.equal(pretty(12, true), '12Bytes');
    });
    
    it('should print bytes with no space and one char', () => {
        assert.equal(pretty(12, true, true), '12B');
    });

    it('should print bytes with space and one char', () => {
        assert.equal(pretty(12, false, true), '12 B');
    });
    
    it('should print kilobytes', () => {
        assert.equal(pretty(123456), '120.6 kB');
    });
    
    it('should print exact kilobytes', () => {
        assert.equal(pretty(1024), '1 kB');
    });
    
    it('should print megs', () => {
        assert.equal(pretty(123456789), '117.7 MB');
    });
    
    it('should print exact megs', () => {
        assert.equal(pretty(1024 * 1024), '1 MB');
    });
    
    it('should print gigs', () => {
        assert.equal(pretty(12345678901), '11.5 GB');
    });

    it('should print exact gigs', () => {
        assert.equal(pretty(1024 * 1024 * 1024), '1 GB');
    });
    
    it('should print teras', () => {
        assert.equal(pretty(1234567890123), '1.1 TB');
    });

    it('should print exact teras', () => {
        assert.equal(pretty(1024 * 1024 * 1024 * 1024), '1 TB');
    });
    
    it('should print petas', () => {
        assert.equal(pretty(1234567890123456), '1.1 PB');
    });
    
    it('should print exact petas', () => {
        assert.equal(pretty(1024 * 1024 * 1024 * 1024 * 1024), '1 PB');
    });
    
    it('should print exabyte', () => {
        assert.equal(pretty(1234567890123456789), '1.1 EB');
    });
    
    it('should print exact exobyte', () => {
        assert.equal(pretty(1024 * 1024 * 1024 * 1024 * 1024 * 1024), '1 EB');
    });

    it('should print zero bytes', () => {
        assert.equal(pretty(0), '0 Bytes');
    });

    it('should print zero bytes with no space', () => {
        assert.equal(pretty(0, true), '0Bytes');
    });

    it('should print zero bytes with no space and one char', () => {
        assert.equal(pretty(0, true, true), '0B');
    });

    it('should print zero bytes with space and one char', () => {
        assert.equal(pretty(0, false, true), '0 B');
    });

    it('should print, two decimal places', () => {
        assert.equal(pretty(123456789, false, false, 2), '117.74 MB');
    });

    it('should print three decimal places', () => {
        assert.equal(pretty(123456789, false, false, 3), '117.738 MB');
    });

});
