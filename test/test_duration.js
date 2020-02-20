'use strict'

const assert = require('assert').strict

const { durationFormatter } = require('../javascript/duration')

exports['test duration defaults'] = () => {
    const subj = durationFormatter()

    assert(subj(0), '0s')
    assert(subj(1582221478664), '50y 1mo 20d 4h 28m 52s')
    assert(subj(Date.parse('1971-01-01T09:00:00.000+0200')), '1y 1h 10m 48s')
}

exports['test milliseconds'] = () => {
    const subj = durationFormatter({ allowMultiples: ['ms'] })

    assert(subj(0), '0ms')
    assert(subj(1582221478664), '1582221478664ms')
    assert(subj(Date.parse('1971-01-01T09:00:00.000+0200')), '31561200000ms')
}
