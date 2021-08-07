
import TodoList from './components/Todolist';
import Header from './components/Header';

function App() {

  return (
    <div>
      {/* header section */}
      <Header></Header>
      {/* todo section */}
       <div className='mx-auto max-w-4xl'> 
        {/* task input and add button */}
         <TodoList></TodoList>
      </div> 

      {/* footer section */}
      <p className='text-center text-gray-400'> Copyright©2021 </p>
    </div>
  );
}

export default App;
