interface TypeArray {
  _id: string
  [key: string]: any
}

export const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export const mereListById = (array1: TypeArray[], array2: TypeArray[]) => {
  console.log(888)
  const set1 = new Set(array1.map((item) => item._id))
  const array3 = array2.filter((item) => !set1.has(item._id))
  return [...array1, ...array3]
}
