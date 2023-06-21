import {mult, splitIntoWords, sum} from "./01";


let a = 1;
let b = 2;
let c = 3;

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('Сумма корректна', () => {


    //action
    const result1 = sum(a, b);
    const result2 = sum(b, c);


    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)


})


test('Умножение корректно', () => {


    const result = mult(a, b)

    expect(result).toBe(2)
})

test('split word correct', () => {
        const sent1 = 'Hello my friend!'
        const sent2 = 'JS - the best programming language.'

        const result1 = splitIntoWords(sent1)
        const result2 = splitIntoWords(sent2)

        //result1
        expect(result1.length).toBe(3)
        expect(result1[0]).toBe('hello')
        expect(result1[1]).toBe('my')
        expect(result1[2]).toBe('friend')

        //result2
        expect(result2.length).toBe(5)
        expect(result2[0]).toBe('js')
        expect(result2[1]).toBe('the')
        expect(result2[2]).toBe('best')
        expect(result2[3]).toBe('programming')
        expect(result2[4]).toBe('language')
    }
)