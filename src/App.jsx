import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => {
    state;
  });
  console.log(todos);

  return (
    <>
      <div>
        <h1>Redux TODO App</h1>
      </div>
    </>
  );
}

export default App;
