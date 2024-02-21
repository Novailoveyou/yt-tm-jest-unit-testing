import axios from 'axios'

export const initDB = () => {
  console.log('Database Initialized...')
}

export const closeDB = () => {
  console.log('Database Closed...')
}

export const nameCheck = () => {
  console.log('Checking Name...')
}

export const sum = (num1: number, num2: number) => num1 + num2

export const isNull = () => null

export const checkValue = (value: any) => value

export const createUser = () =>
  ({
    firstName: 'jake',
    lastName: 'paul',
  } as const)

export const fetchUser = async (user: 1) =>
  (
    await axios
      .get<Record<string, string>>(
        `https://jsonplaceholder.typicode.com/users/${user}`,
      )
      .catch(_ => ({ data: null }))
  ).data

export const reverseString = (str: string) => str.split('').reverse().join('')

export const chunkArray = (arr: number[], len: number) => {
  const chunkedArr = []
  let i = 0

  while (i < arr.length) {
    chunkedArr.push(arr.splice(i, len))
  }

  return chunkedArr
}

export const isAnagram = (str1: string, str2: string) => {
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}
