export const generateScramble = () => {
    const moves = ['U', 'D', 'R', 'L', 'F', 'B']

    let scramble = ''
    let previous = ''

    for (let i = 0; i < 20; i++) {
        const filteredMoves = moves.filter((m) => m !== previous)
        let move =
            filteredMoves[Math.floor(Math.random() * filteredMoves.length)]
        let twice = Math.floor(Math.random() * 2) === 1
        let reversed = Math.floor(Math.random() * 2) === 1

        scramble += move + (twice ? '2' : '') + (reversed ? "'" : '') + ' '
        previous = move
    }

    scramble = scramble.substring(0, scramble.length - 1)

    return scramble
}
