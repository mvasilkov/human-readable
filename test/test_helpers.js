import { toFixed } from '../scripts/helpers'
import test from 'ava'

test('toFixed', t => {
    t.is(toFixed(1), '1')
    t.is(toFixed(Math.PI), '3.14')
    t.is(toFixed(1.001), '1')
    t.is(toFixed(1.001, { decimalPlaces: 3 }), '1.001')
    t.is(toFixed(1, { keepTrailingZeros: 1 }), '1.00')
})
