import { TodoList, AddTodo } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Toaster position='bottom-center' />
      <AddTodo />
      <TodoList />
      <h1>yes</h1>
    </div>
  )
}

export default App
