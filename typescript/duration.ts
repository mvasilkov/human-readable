'use strict'

// const ACTUAL_YEAR_DAYS = 365.242199
const GREGORIAN_YEAR_DAYS = 365.242500

export const DUR_MS = 1
export const DUR_S = 1000 * DUR_MS
export const DUR_M = 60 * DUR_S
export const DUR_H = 60 * DUR_M
export const DUR_D = 24 * DUR_H
export const DUR_W = 7 * DUR_D
export const DUR_MO = GREGORIAN_YEAR_DAYS / 12 * DUR_D
export const DUR_Y = GREGORIAN_YEAR_DAYS * DUR_D

type Multiple = [string, number]

const Units: Multiple[] = [
    ['y', DUR_Y],
    ['mo', DUR_MO],
    ['w', DUR_W],
    ['d', DUR_D],
    ['h', DUR_H],
    ['m', DUR_M],
    ['s', DUR_S],
    ['ms', DUR_MS],
]

type DurationPart = { literal: string, symbol: string }

type RenderFunction<T> = (parts: DurationPart[]) => T

interface IOptions<T> {
    allowMultiples?: string[]
    keepNonLeadingZeroes?: boolean
    render?: RenderFunction<T>
}

const defaultOptions: IOptions<string> = {
    allowMultiples: ['y', 'mo', 'd', 'h', 'm', 's'],
    keepNonLeadingZeroes: false,
    render(parts: DurationPart[]): string {
        return parts.map(({ literal, symbol }) => `${literal}${symbol}`).join(' ')
    },
}

type FormatterFunction<T> = (duration: number) => T

export function durationFormatter<T>(options?: IOptions<T>): FormatterFunction<T> {
    const opt: IOptions<T> = Object.assign({}, defaultOptions, options)
    const allowMultiples = new Set(opt.allowMultiples!.map(a => a.toLowerCase()))

    return function (n: number) {
        const parts: DurationPart[] = []
        const short: DurationPart = { literal: '0', symbol: 'ms' }

        let sign = ''
        if (n < 0) {
            sign = '−'
            n = -n
        }

        for (const [a, b] of Units) {
            if (allowMultiples.has(a)) {
                if (n >= b) {
                    parts.push({ literal: '' + Math.floor(n / b), symbol: a })
                    n %= b
                }
                else if (!parts.length) {
                    short.symbol = a
                }
                else if (opt.keepNonLeadingZeroes) {
                    parts.push({ literal: '0', symbol: a })
                }
            }
        }

        if (sign && parts.length && parts[0].literal != '0') {
            parts[0].literal = sign + parts[0].literal
        }

        return opt.render!(parts.length ? parts : [short])
    }
}
