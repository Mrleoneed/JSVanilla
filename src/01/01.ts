export const sum = (a: number, b: number) => {
    return a + b
}
export const mult = (a: number, b: number) => {
    return a * b
}


export const splitIntoWords = (sentense: string) => {
    const words = sentense.toLowerCase().split(' ')
    return words.filter(e => e !== '' && e !== '-').map(e => e.replace('!', '').replace('.', '').replace(',', ''))

}

