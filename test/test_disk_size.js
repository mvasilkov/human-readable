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

    /* negative */
    t.is(formatSize(-1), '−1 byte')
    t.is(formatSize(-16), '−16 bytes')
    t.is(formatSize(-1e10), '−10 GB')

    /* binary */
    t.is(formatSize(1024 ** 1 * 20, { binary: 1 }), '20 KiB')
    t.is(formatSize(1024 ** 2 * 20, { binary: 1 }), '20 MiB')
    t.is(formatSize(1024 ** 3 * 20, { binary: 1 }), '20 GiB')
    t.is(formatSize(1024 ** 4 * 20, { binary: 1 }), '20 TiB')
    t.is(formatSize(1024 ** 5 * 20, { binary: 1 }), '20 PiB')

    /* decimal */
    t.is(formatSize(1000 ** 1 * 40), '40 KB')
    t.is(formatSize(1000 ** 2 * 40), '40 MB')
    t.is(formatSize(1000 ** 3 * 40), '40 GB')
    t.is(formatSize(1000 ** 4 * 40), '40 TB')
    t.is(formatSize(1000 ** 5 * 40), '40 PB')
})
