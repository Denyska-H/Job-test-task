import { Route, Routes } from 'react-router-dom';

import JobList from './pages/JobList';
import DetailedJob from './pages/DetailedJob';

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/detailed" element={<DetailedJob />} />
    </Routes>
  );
}

export default App;
