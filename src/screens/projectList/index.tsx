import React from "react"
import { useEffect, useState } from "react"
import { SearchPanel } from "./searchPanel"
import { List } from "./list"
// import {$get} from '../../utils/request'
import {useDebounce,cleanObject} from '../../utils/index'
import qs from 'qs'

const apiUrl = 'http://localhost:3000'
export const ProjectListScreen = () => {
  const [param,setParam] = useState({
    name:'',
    personId: ''
  })
  // 设置一个定时器
  const debouncedParam = useDebounce(param, 300)
  const [list, setList] = useState([])
  const [users,setUsers] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
      // let a = await response.json
      // console.log(a)
      if(response.ok) {
        setList(await response.json())
      }
    })
  }, [debouncedParam])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if(response.ok) {
        setUsers(await response.json())
      }
    })
  },[])
  // useEffect(() => {
  //   getProjectList().then(res => {
  //     let {data} = res
  //     console.log(data)
  //     setList(data.results)
  //   })   
  // }, [param])

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />
  </div>
}