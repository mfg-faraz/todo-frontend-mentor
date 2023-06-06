import './App.css';
import Main from './containers/Main/Main';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import Wrapper from './containers/Wrapper/Wrapper';
import Header from './components/Header/Header';
import { useEffect, useState } from "react"
import FilterLink from './components/FilterLink/FilterLink';
import Footer from './components/Footer/Footer';

const basicData = [
  {id:"123121",text:"Complete online JavaScript course",isCompleted:true},
  {id:"e23121",text:"Jog around the park 3x",isCompleted:false},
  {id:"r23121",text:"10 minutes meditation",isCompleted:false},
  {id:"q23121",text:"Read for 1 hour",isCompleted:false},
  {id:"v23121",text:"Pick up groceries",isCompleted:false},
  {id:"l23121",text:"Complete Todo App on Frontend Mentor",isCompleted:false},
]

function App() {

/** use State Hooks */ 
  const [todos, setTodos] = useState(basicData)
  const [filterData, setFilterData] = useState(basicData)

  /** use Effect Hooks */
  useEffect(() => {
    const list = [...todos]
    setFilterData(list)
  }, [todos])

  /** Handlers */
  const submitHandler = (todo) => {
    const id = Math.random().toString(16).slice(2)
    todo = { id, ...todo }
    const list = [...todos]
    list.push(todo)
    setTodos(list)
  }

  const filterHandler = (filter) => {
    const list = [...todos]
    let filtering = []
    switch (filter) {
      case "completed":
        filtering = list.filter(single => single.isCompleted)
        break;
        case "active":
        filtering = list.filter(single => !single.isCompleted)
        break;
      default:
        filtering = list
        break;
    }
    setFilterData(filtering)
  }

  /* Render */
  return (
    <>
      <Main>
        <Wrapper>
          <Header />
          <Input onSubmit={submitHandler} />
          <TodoList onSetTodo={(x)=>setTodos(x)} todos={filterData} onFilter={filterHandler}  />
          <div className="sm:hidden  block rounded-lg overflow-hidden mt-5">

            <div className="bg-light-100 dark:bg-dark-200 flex  items-center  py-3 justify-center">
              <FilterLink onFilter={filterHandler} />
            </div>
          </div>
        <div className='text-center text-[13px] text-bold text-light-400 dark:text-dark-400 mt-5'>Drag and drop to reorder list</div>
        </Wrapper>
      </Main>
      <Footer/>
    </>
  );
}

export default App;
