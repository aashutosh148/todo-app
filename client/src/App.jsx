import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './pages/TaskList';
import TaskForm from './pages/TaskForm';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;