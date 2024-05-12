const Food = require('../food.js')

let banana

beforeAll(() => {
  banana = new Food('Banana', 3)
})

describe('Food class', () => {
  test('Can call new on Food', () => {
    const bananaCreamPie = new Food('BananaCreamPie', 4)
    expect(bananaCreamPie).toBeTruthy()
  })

  test('Food has name that is a string', () => {
    expect(banana.name).toBe('Banana')
    expect(typeof banana.name).toBe('string')
  })

  test('Food has daysToSpoil that is a number', () => {
    expect(banana.daysToSpoil).toBe(3)
    expect(typeof banana.daysToSpoil).toBe('number')
  })

  test('Food has fresh property, set to be default to true', () => {
    expect(banana.fresh).toBe(true)
    expect(banana.fresh).toBe(true)
  })

  test('Food has prepare method', () => {
    expect(typeof banana.prepare).toBe('function')
    expect(banana.prepare).toBeTruthy()
  })

  test('Food prepare function calls console log', () => {
    console.log = jest.fn()
    banana.prepare()
    expect(console.log).toHaveBeenCalledWith('Banana is being prepared')
  })

  test('Food has isFresh method', () => {
    expect(typeof banana.isFresh).toBe('function')
    expect(banana.isFresh).toBeTruthy()
  })

  test('isFresh logs days left when food is fresh', () => {
    console.log = jest.fn()
    banana.isFresh()
    expect(console.log).toHaveBeenCalledWith(
      'There are 3 days left before Banana spoils.'
    )
  })

  test('isFresh logs days left when food is fresh', () => {
    const grossBanana = new Food('eeewww what an old banana', -1)
    console.log = jest.fn()
    grossBanana.isFresh()
    expect(console.log).toHaveBeenCalledWith(
      'eeewww what an old banana has spoiled.'
    )
  })

  test('Food has aDayPasses method', () => {
    expect(typeof banana.aDayPasses).toBe('function')
    expect(banana.aDayPasses).toBeTruthy()
  })

  test('aDayPasses decreases number of days to spoil', () => {
    banana.aDayPasses()
    expect(banana.daysToSpoil).toBe(2)
  })

  test('aDayPasses method calls isFresh method', () => {
    banana.isFresh = jest.fn()
    banana.aDayPasses()
    expect(banana.isFresh).toHaveBeenCalled()
  })
})
