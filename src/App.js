import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component.jsx';

const App=()=> {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default App;
