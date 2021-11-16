import { Route, Routes } from 'react-router-dom'
import Show from './components/Show'
import Episodes from './components/Episodes'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/show' exact element={<Show />} />
        <Route path='/episodes' element={<Episodes />} />
      </Routes>

    </div>
  );
}

export default App;
