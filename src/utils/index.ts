import { useEffect, useState } from "react"

export const isFalsy = (value:unknown) => value === 0 ? false : !value

// 在一个函数中，改变传入的对象本身是不好的
export const cleanObject = (object:object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if(isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useDebounce = (value:unknown, deplay:number): any => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)},deplay
    )
    return () => clearTimeout(timeout)
  }, [value,deplay])
  return debouncedValue
}