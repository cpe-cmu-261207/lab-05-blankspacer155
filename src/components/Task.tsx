type TaskProps = {
  id: number;
  name: string;
  deleteFn: Function; //Function type
  doneFn: Function;
}

const Task = ({id, name, deleteFn,doneFn} : TaskProps) => {

  return (
    <div
    className="flex justify-between h-8 items-center py-6 border-b group "
  >
    <span className="text-2xl">{name}</span>
    <div className="flex space-x-1 items-center opacity-0 group-hover:opacity-100 ">
      <button className="bg-green-400 w-24 text-2xl" onClick={ () => doneFn(id) } >Done</button>
      <button className="bg-red-400 w-24 text-2xl" onClick={ () =>  deleteFn(id)} >Delete</button>
    </div>
  </div>
  )
}

export default Task