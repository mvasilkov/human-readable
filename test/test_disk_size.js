import { formatSize } from '../scripts/disk_size'
import test from 'ava'

test('formatSize', t => {
    t.is(formatSize(0), '0 bytes')
    t.is(formatSize(1), '1 byte')
    t.is(formatSize(24), '24 bytes')
    t.is(formatSize(1000), '1 KB')
    t.is(formatSize(1024, { binary: 1 }), '1 KiB')
    t.is(formatSize(1024), '1.02 KB')
    t.is(formatSize(1024, { decimalPlaces: 3 }), '1.024 KB')
})
