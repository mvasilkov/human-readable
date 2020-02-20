'use strict'

const assert = require('assert').strict

const { sizeFormatter } = require('../javascript/disk_size')

function test(title, fun) {
    exports[`test ${title}`] = () => fun({ is: assert.strictEqual })
}

test('disk_size defaults', t => {
    const subj = sizeFormatter()

    t.is(subj(0), '0 bytes')
    t.is(subj(1), '1 byte')
    t.is(subj(2), '2 bytes')
    t.is(subj(1000), '1 kB')
    t.is(subj(1024), '1.02 kB')

    // negative
    t.is(subj(-1), '−1 byte')
    t.is(subj(-2), '−2 bytes')
    t.is(subj(-1e9), '−1 GB')
})

test('disk_size std=IEC', t => {
    const subj = sizeFormatter({ std: 'IEC' })

    t.is(subj(0), '0 bytes')
    t.is(subj(1), '1 byte')
    t.is(subj(2), '2 bytes')
    t.is(subj(1000), '1000 bytes')
    t.is(subj(1024), '1 KiB')

    // negative
    t.is(subj(-1), '−1 byte')
    t.is(subj(-2), '−2 bytes')
    t.is(subj(-1 * 2 ** 30), '−1 GiB')
})

test('disk_size std=JEDEC', t => {
    const subj = sizeFormatter({ std: 'JEDEC' })

    t.is(subj(0), '0 bytes')
    t.is(subj(1), '1 byte')
    t.is(subj(2), '2 bytes')
    t.is(subj(1000), '1000 bytes')
    t.is(subj(1024), '1 KB')

    // negative
    t.is(subj(-1), '−1 byte')
    t.is(subj(-2), '−2 bytes')
    t.is(subj(-1 * 2 ** 30), '−1 GB')
})
