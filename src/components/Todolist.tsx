import {useState} from 'react'
import React from 'react'
import Task from './Task'
import Done from './Done'

type TaskData = {
  id: number;
  name: string;
}

const TodoList = () => {

  const [curTask, setCurTask] = useState<string>('')
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [dones,setDones] = useState<TaskData[]>([])
  const inputbar = document.querySelector('input')
 

  const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCurTask(ev.target.value)
  }

    
  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if(ev.key === "Enter" )
    {
        addTask(curTask)
    }
  }

  const addTask = (taskName: string) => {
      if(taskName!==''){

          const newId = (new Date()).getTime()
    const newTasks = [...tasks, {id: newId, name: taskName}]

    setTasks(newTasks)
    setCurTask('')
    if(inputbar!=null)inputbar.value=''
      }
    else{
        alert("Task cannot be empty")
    }
  }

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }

  const doneTask = (id:number) =>{
      const [donetask] = tasks.filter(x => x.id === id)
    const newdone = [...dones,donetask]
    setDones(newdone)
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }

    const [search,setSearch] = useState<string>('')
    const [isSearch,setIsSearch] = useState<boolean>(false)
    const [filtered,setFiltered] = useState<TaskData[] | null>(null)
    const searchChange = (ev:any)=>{
        setSearch(ev.target.value)
        setIsSearch(false)
    }
    const searchClick = () =>{
      setIsSearch(true)
     const alltask:TaskData[]= tasks.concat(dones)
      setFiltered(alltask.filter(x=> x.name.toLowerCase().includes(search.toLowerCase())))
    }


  return (
    <div >
         <div className='flex space-x-1'>
        <input className='border border-gray-400 w-full text-2xl'
          onChange={onChangeCallback} onKeyDown={onKeyDownCallback} ></input>
        <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
      </div> 

      <div className="flex justify-center my-5">
          <p className='mx-5'>Search task by name </p>
          <input placeholder="task name" onChange={searchChange}></input>
          <button onClick={searchClick}>search</button>
      </div>

    <div className="flex flex-col-reverse">
         { isSearch?[tasks.filter(x=>filtered?.includes(x))
                              .map( x => <Task id={x.id} name={x.name} deleteFn={deleteTask} doneFn={doneTask}/>) 
                                  ,<p className="text-xl font-bold my-5 text-center">Search Result</p>
                 ] 
                 : tasks.map( x => <Task id={x.id} name={x.name} deleteFn={deleteTask} doneFn={doneTask}/>)} 
    </div> 
    <div className="flex flex-col-reverse">
          { isSearch?dones.filter(x=>filtered?.includes(x))
                              .map( x => <Done id={x.id} name= {x.name}/>) 
                     :dones.map( x => <Done id={x.id} name= {x.name} />)}
    </div> 
     
    </div>
  )
}

export default TodoList