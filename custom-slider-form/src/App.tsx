import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useContext, useEffect } from 'react'
import { Routes , Route, useNavigate } from 'react-router-dom' 
import { AuthContext } from './context/authContext';
import RequireAuth from './components/requireAuth';

import { Navbar } from './components/ui/navbar/Navbar';
import Rounds from './pages/rounds/Rounds';
import Home from './pages/Home';

function App() {

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // NOTE: console log for testing purposes
  console.log('User:', !!currentUser);

  // Check if currentUser exists on initial render
  useEffect(() => {
    if (currentUser) {
      navigate('/rounds')
    }
  }, [currentUser])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="rounds" element={
          <RequireAuth>
            <Rounds />
          </RequireAuth>}
        />
      </Routes>
    </div>
  )
}

export default App
