import {
  checkValue,
  chunkArray,
  closeDB,
  createUser,
  fetchUser,
  initDB,
  isAnagram,
  isNull,
  nameCheck,
  reverseString,
  sum,
} from './functions'

// beforeEach(() => initDB())
// afterEach(() => closeDB())

// beforeAll(() => initDB())
// afterAll(() => closeDB())

describe('sum', () => {
  beforeAll(() => nameCheck())

  test('User is Jeff', () => {
    const user = 'Jeff'
    expect(user).toBe('Jeff')
  })
})

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4)
})

test('adds 2 + 2 to NOT equal 5', () => {
  expect(sum(2, 2)).not.toBe(5)
})

test('Should be null', () => {
  expect(isNull()).toBeNull()
})

test('Should be Jake Paul object', () => {
  expect(createUser()).toStrictEqual({
    firstName: 'jake',
    lastName: 'paul',
  })
})

test('Should be under 1337', () => {
  const load1 = 128
  const load2 = 420
  expect(load1 + load2).toBeLessThan(1337)
})

test('There is no I in team America, oh wait', () => {
  expect('America').toMatch(/I/i)
})

test('Eminem should be on the list', () => {
  const theList = ['j', 'drake', 'eminem', 'gucci mane']
  expect(theList).toContain('eminem')
})

test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1)
  return fetchUser(1).then(data => {
    expect(data?.name).toEqual('Leanne Graham')
  })
})

test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1)
  const data = await fetchUser(1)
  expect(data?.name).toEqual('Leanne Graham')
})

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined()
})

test('String reverses', () => {
  expect(reverseString('puuoyevigannogreven')).toBe('nevergonnagiveyouup')
})

test('chunkArray function exists', () => {
  expect(chunkArray).toBeDefined()
})

test('Chunk an array of 10 values with length of 2', () => {
  expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ])
})

test('isAnagram function exists', () => {
  expect(typeof checkValue).toEqual('function')
})

test('LGBTQIA+ is an anagram of TI+GBLAQ', () => {
  expect(isAnagram('LGBTQIA+', 'TI+GBLAQ')).toBeTruthy()
})

test('checkValue function exists', () => {
  expect(checkValue).toBeDefined()
})
