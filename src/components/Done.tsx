type Donetype={
    name:string;
}
  
  const Done = ({name }: Donetype) => {
    return (
        <div
        className="flex justify-between h-8 items-center py-6 border-b"
      >
        <span className="text-2xl line-through"> {name}</span>
      </div>
    )
  }
  
  export default Done