
import SideBar from './components/SideBar'
import Task from './pages/Task'
import { TaksState } from './context/TaskContext'

function App() {

  return (
    <>
      <TaksState>
        <div className='flex' >
          <SideBar />
          <div className='default-container'>
            <Task />
          </div>
        </div >
      </TaksState >
    </>
  )
}

export default App
