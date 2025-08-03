import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CouncilPage from './pages/CouncilPage';
import ClubPage from './pages/ClubPage';

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='council/:councilId' element={<CouncilPage />} />
        <Route path='council/:councilId/club/:clubId' element={<ClubPage />} />
      </Routes>
    </Router>
  )
}

export default App;