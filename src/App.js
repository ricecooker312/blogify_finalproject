import logo from './logo.svg';
import './App.css';

import BlogGroup from './components/BlogGroup';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BlogGroup />
    </div>
  );
}

export default App;