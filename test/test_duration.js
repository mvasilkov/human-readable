'use strict'

const assert = require('assert').strict

const { durationFormatter } = require('../javascript/duration')

exports['test duration defaults'] = () => {
    const subj = durationFormatter()

    assert.strictEqual(subj(0), '0s')
    assert.strictEqual(subj(1582221478664), '50y 1mo 20d 4h 28m 52s')
    assert.strictEqual(subj(-1582221478664), '−50y 1mo 20d 4h 28m 52s')
    assert.strictEqual(subj(Date.parse('1971-01-01T09:00:00.000+0200')), '1y 1h 10m 48s')
}

exports['test duration milliseconds'] = () => {
    const subj = durationFormatter({ allowMultiples: ['ms'] })

    assert.strictEqual(subj(0), '0ms')
    assert.strictEqual(subj(1582221478664), '1582221478664ms')
    assert.strictEqual(subj(-1582221478664), '−1582221478664ms')
    assert.strictEqual(subj(Date.parse('1971-01-01T09:00:00.000+0200')), '31561200000ms')
}

exports['test duration zeroes'] = () => {
    const subj = durationFormatter({ keepNonLeadingZeroes: true })

    assert.strictEqual(subj(0), '0s')
    assert.strictEqual(subj(1582221478664), '50y 1mo 20d 4h 28m 52s')
    assert.strictEqual(subj(-1582221478664), '−50y 1mo 20d 4h 28m 52s')
    assert.strictEqual(subj(Date.parse('1971-01-01T09:00:00.000+0200')), '1y 0mo 0d 1h 10m 48s')
}
