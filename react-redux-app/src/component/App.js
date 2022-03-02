import logo from '../logo.svg';
import '../App.css';
import TodoApp from '../containers/TodoApp';
import Login from '../containers/Login';
function App({auth}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Check token */}
        {!auth.token && <Login/>}
        {auth.token && <TodoApp/>}
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
