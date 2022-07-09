import { choice, letter, sequenceOf, char, many1 } from 'arcsecond'

const rotationParser = choice([
    sequenceOf([letter, char('2')]).map((e) => ({
        letter: e[0],
        twice: true,
        inversed: false,
    })),
    sequenceOf([letter]).map((e) => ({
        letter: e[0],
        twice: false,
        inversed: false,
    })),
])

const optionalRotationParser = sequenceOf([rotationParser, char("'")]).map(
    (e) => ({
        ...e[0],
        inversed: true,
    })
)

const allRotationParser = choice([optionalRotationParser, rotationParser])

export interface Rotation {
    letter: string
    twice: boolean
    inversed: boolean
}

export const parser = many1<Rotation>(
    choice([
        sequenceOf([allRotationParser, char(' ')]).map((e) => e[0]),
        allRotationParser,
    ])
)
