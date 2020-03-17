import Axios from "axios"

export const fetchData = (fn) => {
  Axios.get("http://www.dell-lee.com/react/api/demo.json")
    .then(res => {
      fn(res)
    })
}
export const fetchData1 = () => {
  return Axios.get("http://www.dell-lee.com/react/api/demo.json")
}
export const fetchErr = () => {
  return Axios.get("http://www.dell-lee.com/react/api/demo1.json")
}